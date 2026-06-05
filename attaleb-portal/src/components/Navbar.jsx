import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            <a href="#" className="text-xl md:text-2xl font-black tracking-wider text-white">
              ATTALEB<span className="text-brand-gold">.MA</span>
            </a>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-6 xl:space-x-8 font-black text-[11px] tracking-wider">
            <a href="#about-section" className="hover:text-brand-gold transition-colors text-slate-200">
              À PROPOS
            </a>
            <a href="#destinations-section" className="hover:text-brand-gold transition-colors text-slate-200">
              ÉTUDIER À L'ÉTRANGER
            </a>
            <a href="#services-section" className="hover:text-brand-gold transition-colors text-slate-200">
              PRÉPARATION CONCOURS
            </a>
            <a href="#services-section" className="hover:text-brand-gold transition-colors text-slate-200">
              PRÉPARATION CONCOURS DES LANGUES
            </a>
            <a href="#services-section" className="hover:text-brand-gold transition-colors text-slate-200">
              SOUTIEN SCOLAIRE
            </a>
            <a href="#contact-section" className="hover:text-brand-gold transition-colors text-white">
              CONTACT
            </a>
          </div>

          {/* Mobile Hamburger Menu Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Dropdown */}
      {isOpen && (
        <div className="lg:hidden bg-brand-blueDark px-4 pt-2 pb-6 space-y-3 border-t border-slate-800">
          <a href="#" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-200 hover:text-brand-gold">
            ACCUEIL
          </a>
          <a href="#about-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-200 hover:text-brand-gold">
            À PROPOS
          </a>
          <a href="#destinations-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-200 hover:text-brand-gold">
            ÉTUDIER À L'ÉTRANGER
          </a>
          <hr className="border-slate-800 my-1" />
          <a href="#services-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-300 hover:text-brand-gold">
            SOUTIEN SCOLAIRE
          </a>
          <a href="#services-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-300 hover:text-brand-gold">
            PRÉPARATION CONCOURS
          </a>
          <a href="#services-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-300 hover:text-brand-gold">
            PRÉPARATION CONCOURS DES LANGUES
          </a>
          <a href="#contact-section" onClick={() => setIsOpen(false)} className="block py-2 text-xs font-bold tracking-wide text-slate-200 hover:text-brand-gold">
            CONTACT
          </a>
        </div>
      )}
    </nav>
  );
}