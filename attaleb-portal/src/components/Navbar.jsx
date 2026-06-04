import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-2xl font-black tracking-wider">
              ATTALEB<span className="text-brand-gold">.MA</span>
            </Link>
          </div>

          {/* Navigation Links */}
          <div className="hidden md:flex space-x-8 font-medium text-xs tracking-wider">
            <Link to="/" className="hover:text-brand-gold transition-colors">ACCUEIL</Link>
            <Link to="/about" className="hover:text-brand-gold transition-colors">À PROPOS</Link>
            <Link to="/destinations" className="hover:text-brand-gold transition-colors">ÉTUDIER À L'ÉTRANGER</Link>
            <Link to="/destinations" className="hover:text-brand-gold transition-colors">PREPARATION CONCOURS DES LANGUES</Link>
            <Link to="/destinations" className="hover:text-brand-gold transition-colors">PREPARATION CONCOURS </Link>
            <Link to="/destinations" className="hover:text-brand-gold transition-colors">SOUTIEN SCOLAIRE </Link>
          </div>

          {/* CTA Button */}
          <div className="hidden md:block">
            <a href="#contact-form" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue font-bold px-6 py-2.5 rounded text-xs transition-all shadow-md">
              CONTACTEZ-NOUS
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="md:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none">
              {isOpen ? <X size={26} /> : <Menu size={26} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="md:hidden bg-brand-blueDark px-4 pt-2 pb-6 space-y-3 border-t border-slate-800">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-200 hover:text-brand-gold">ACCUEIL</Link>
          <Link to="/about" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-200 hover:text-brand-gold">À PROPOS</Link>
          <Link to="/destinations" onClick={() => setIsOpen(false)} className="block py-2 text-sm text-slate-200 hover:text-brand-gold">ÉTUDIER À L'ÉTRANGER</Link>
          <a href="#contact-form" onClick={() => setIsOpen(false)} className="block text-center bg-brand-gold text-brand-blue font-bold py-2.5 rounded text-sm mt-4">
            CONTACTEZ-NOUS
          </a>
        </div>
      )}
    </nav>
  );
}