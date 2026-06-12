import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import logo from '../../public/imagecopy.png'; 

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0">
            <div className="flex items-center gap-3 flex-shrink-0">
            {/* Logo */}
            <Link to="/" className="flex items-center">
              <img 
                src={logo} 
                alt="Attaleb Logo" 
                className="h-10 w-auto object-contain" 
              />
            </Link>

            {/* Texte */}
            <Link to="/" className="text-xl md:text-2xl font-black tracking-wider text-white uppercase transition-colors">
              Attaleb<span className="text-brand-gold">.net</span>
            </Link>
          </div>
          </div>

          {/* Desktop Navigation (Reste inchangé) */}
          <div className="hidden lg:flex space-x-4 font-black text-[11px] tracking-wider items-center">
            <Link to="/a-propos" className="hover:text-brand-gold transition-colors">À PROPOS</Link>
            <Link to="/destinations" className="hover:text-brand-gold transition-colors">ÉTUDIER À L'ÉTRANGER</Link>
            <Link to="/concours" className="hover:text-brand-gold transition-colors">PRÉPARATION CONCOURS</Link>
            <Link to="/langues" className="hover:text-brand-gold transition-colors">CONCOURS DE LANGUES</Link>
            <Link to="/soutien" className="hover:text-brand-gold transition-colors">SOUTIEN SCOLAIRE</Link>
            <Link to="/bourses" className="hover:text-brand-gold transition-colors">BOURSES</Link>
            <Link to="/contact" className="hover:text-brand-gold transition-colors">CONTACT</Link>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Simplifiée (Sans dropdowns) */}
      {isOpen && (
        <div className="lg:hidden bg-brand-blueDark px-6 py-8 space-y-6 border-t border-slate-800 flex flex-col items-start font-black text-xs uppercase tracking-widest">
          <Link to="/" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">ACCUEIL</Link>
          <Link to="/a-propos" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">À PROPOS</Link>
          <Link to="/destinations" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">ÉTUDIER À L'ÉTRANGER</Link>
          <Link to="/concours" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">PRÉPARATION CONCOURS</Link>
          <Link to="/langues" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">CONCOURS DE LANGUES</Link>
          <Link to="/soutien" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">SOUTIEN SCOLAIRE</Link>
          <Link to="/bourses" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">BOURSES</Link>
          <Link to="/contact" onClick={() => setIsOpen(false)} className="hover:text-brand-gold">CONTACT</Link>
        </div>
      )}
    </nav>
  );
}