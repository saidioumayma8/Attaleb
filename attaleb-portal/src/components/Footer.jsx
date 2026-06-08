import React from 'react';
import { GraduationCap } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="bg-brand-blueDark text-slate-400 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* About Section */}
        <div>
          <div className="flex items-center gap-2 text-white font-black text-xl mb-4">
            <GraduationCap className="text-brand-gold" />
            <span>Attaleb<span className="text-brand-gold">.net</span></span>
          </div>
          <p className="text-sm text-slate-400 leading-relaxed">
            Votre passerelle de confiance vers le succès académique international. Nous vous guidons à chaque étape de votre projet d'études.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Navigation</h4>
          <ul className="space-y-2 text-sm">
            <li><a href="#accueil" className="hover:text-brand-gold transition-colors">Accueil</a></li>
            <li><a href="#propos" className="hover:text-brand-gold transition-colors">À Propos</a></li>
            <li><a href="#destinations" className="hover:text-brand-gold transition-colors">Étudier à l'étranger</a></li>
          </ul>
        </div>

        {/* Contact info shortcut */}
        <div>
          <h4 className="text-white font-bold text-sm tracking-wider uppercase mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-slate-400">
            <li>Email: contact@attaleb.net</li>
            <li>Marrakech, Maroc</li>
          </ul>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-12 pt-6 border-t border-slate-800 text-center text-xs text-slate-500">
        &copy; {new Date().getFullYear()} Attaleb.net. Tous droits réservés.
      </div>
    </footer>
  );
}