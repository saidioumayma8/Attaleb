const fs = require('fs');
const filePath = 'c:/Users/admin/Desktop/Attaleb/attaleb-portal/src/pages/Home.jsx';
let lines = fs.readFileSync(filePath, 'utf8').split('\n');

// Lines to remove (0-indexed): the "absolute inset-0 pointer-events-none" blocks
// Each block is 8 lines: the div, img(3 lines), gradient div, closing div, blank line
// Pattern: lines with "absolute inset-0 pointer-events-none" through the closing </div> + blank line

let result = [];
let skip = false;
let skipCount = 0;

for (let i = 0; i < lines.length; i++) {
  const line = lines[i];
  
  // Start skipping when we hit the background image container
  if (line.includes('absolute inset-0 pointer-events-none')) {
    skip = true;
    skipCount = 0;
    continue;
  }
  
  if (skip) {
    skipCount++;
    // The block is: img tag (3 lines) + gradient div + closing </div> = 5 more lines after the opening div
    // Then there's a blank line
    if (line.trim() === '' && skipCount >= 5) {
      skip = false;
      continue;
    }
    if (skipCount > 7) {
      skip = false;
    }
    continue;
  }
  
  // Clean up card wrapper: remove "relative overflow-hidden" and "group"
  if (line.includes('relative overflow-hidden bg-brand-blueDark')) {
    lines[i] = line
      .replace('relative overflow-hidden ', '')
      .replace(' group">', '">');
    result.push(lines[i]);
    continue;
  }
  
  // Clean up "relative z-10" from inner divs (only in service cards area, lines ~140-310)
  if (i > 130 && i < 320 && line.includes('className="relative z-10"')) {
    result.push(line.replace('className="relative z-10"', 'className=""'));
    continue;
  }
  
  result.push(line);
}

fs.writeFileSync(filePath, result.join('\n'), 'utf8');
console.log('Done! Removed background image blocks. New line count:', result.length);
