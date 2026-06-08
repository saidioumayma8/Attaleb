import React, { useState } from 'react';
import { Link } from 'react-router-dom'; // Import essentiel pour la navigation sans rechargement
import { Menu, X, ChevronDown } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  
  // States for tracking each dropdown menu individually
  const [isDestinationsOpen, setIsDestinationsOpen] = useState(false);
  const [isConcoursOpen, setIsConcoursOpen] = useState(false);
  const [isLanguesOpen, setIsLanguesOpen] = useState(false);
  const [isSoutienOpen, setIsSoutienOpen] = useState(false);

  // Data lists for the dropdown options
  const destinations = [
    { name: "FRANCE", slug: "france" },
    { name: "ESPAGNE", slug: "espagne" },
    { name: "ALLEMAGNE", slug: "allemagne" },
    { name: "BELGIQUE", slug: "belgique" },
    { name: "ITALIE", slug: "italie" },
    { name: "ÉTATS-UNIS", slug: "etats-unis" },
    { name: "CANADA", slug: "canada" },
    { name: "ROYAUME-UNI", slug: "royaume-uni" },
    { name: "PORTUGAL", slug: "portugal" },
    { name: "ÉMIRATS ARABES UNIS", slug: "emirats-arabes-unis" },
    { name: "ROUMANIE", slug: "roumanie" },
    { name: "CHINE", slug: "chine" }
  ];

  const concoursList = [
    { name: "CONCOURS MÉDECINE (FMP/FMD)", slug: "medecine" },
    { name: "CONCOURS INGÉNIERIE (ENSA/ENSAM)", slug: "ingenierie" },
    { name: "CONCOURS DE COMMERCE (ENCG/ISCAE)", slug: "commerce" },
    { name: "CLASSES PRÉPARATOIRES (CPGE)", slug: "cpge" },
    { name: "AIX-MARSEILLE UNIVERSITÉ (AMU)", slug: "amu" }
  ];

  const languesList = [
    { name: "PRÉPARATION TCF / TEF", slug: "tcf-tef" },
    { name: "DIPLÔMES DELF / DALF", slug: "delf-dalf" },
    { name: "IELTS & TOEFL (ANGLAIS)", slug: "ielts-toefl" },
    { name: "ALLEMAND (GOETHE-ZERTIFIKAT)", slug: "allemand-goethe" }
  ];

  const soutienList = [
    { name: "SOUTIEN LYCÉE (BAC MAROCAIN)", slug: "lycee-marocain" },
    { name: "SOUTIEN MISSION (MISSION FRANÇAISE)", slug: "mission-francaise" },
    { name: "SOUTIEN UNIVERSITAIRE", slug: "universitaire" },
    { name: "AS AND A LEVEL (SYSTÈME BRITANNIQUE)", slug: "as-a-level" }
  ];

  return (
    <nav className="bg-brand-blue text-white sticky top-0 z-50 shadow-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logo */}
          <div className="flex-shrink-0">
            {/* Redirection vers la racine ou l'accueil propre */}
            <Link to="/" className="text-xl md:text-2xl font-black tracking-wider text-white uppercase group-hover:text-brand-gold transition-colors">
              Attaleb<span className="text-brand-gold">.net</span>
            </Link>
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex space-x-3 xl:space-x-4 font-black text-[10px] xl:text-[11px] tracking-wider items-center">
            
            <Link to="/a-propos" className="hover:text-brand-gold transition-colors text-slate-200">
              À PROPOS
            </Link>

            <Link to="/destinations" className="hover:text-brand-gold transition-colors text-slate-200">
              ÉTUDIER À L'ÉTRANGER
            </Link>


            <Link to="/concours" className="hover:text-brand-gold transition-colors text-slate-200">
              PRÉPARATION CONCOURS
            </Link>
           
           <Link to="/langues" className="hover:text-brand-gold transition-colors text-slate-200">
              CONCOURS DE LANGUES
            </Link>

            <Link to="/soutien" className="hover:text-brand-gold transition-colors text-slate-200">
              SOUTIEN SCOLAIRE
            </Link>



            <Link to="/#bourses-etudes" className="hover:text-brand-gold transition-colors text-slate-200">
              BOURSES
            </Link>

            {/* CORRECTION DESKTOP : Modifié de href="#contact-section" à to="/contact" */}
            <Link to="/contact" className="hover:text-brand-gold transition-colors text-white font-black">
              CONTACT
            </Link>

          </div>

          {/* Mobile Hamburger Button */}
          <div className="lg:hidden">
            <button onClick={() => setIsOpen(!isOpen)} className="text-white focus:outline-none p-2">
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Sidebar Navigation */}
      {isOpen && (
        <div className="lg:hidden bg-brand-blueDark px-4 pt-2 pb-6 space-y-4 border-t border-slate-800 max-h-[85vh] overflow-y-auto">
          <Link to="/" onClick={() => setIsOpen(false)} className="block py-1.5 text-xs font-bold text-slate-200 hover:text-brand-gold">
            ACCUEIL
          </Link>
          <Link to="/a-propos" onClick={() => setIsOpen(false)} className="block py-1.5 text-xs font-bold text-slate-200 hover:text-brand-gold">
            À PROPOS
          </Link>
          
          {/* Mobile Section 1 */}
          <div className="border-l-2 border-slate-700 pl-2 space-y-1">
            <span className="block text-xs font-black text-brand-gold uppercase">ÉTUDIER À L'ÉTRANGER :</span>
            <div className="grid grid-cols-2 gap-1 pl-2">
              {destinations.map((dest, i) => (
                <Link key={i} to={`/destinations/${dest.slug}`} onClick={() => setIsOpen(false)} className="block py-0.5 text-[10px] font-bold text-slate-300">• {dest.name}</Link>
              ))}
            </div>
          </div>

          {/* Mobile Section 2 */}
          <div className="border-l-2 border-slate-700 pl-2 space-y-1">
            <span className="block text-xs font-black text-brand-gold uppercase">PRÉPARATION CONCOURS :</span>
            <div className="space-y-1 pl-2">
              {concoursList.map((item, i) => (
                <Link key={i} to={`/concours/${item.slug}`} onClick={() => setIsOpen(false)} className="block text-[10px] font-bold text-slate-300">• {item.name}</Link>
              ))}
            </div>
          </div>

          {/* Mobile Section 3 */}
          <div className="border-l-2 border-slate-700 pl-2 space-y-1">
            <span className="block text-xs font-black text-brand-gold uppercase">CONCOURS DE LANGUES :</span>
            <div className="space-y-1 pl-2">
              {languesList.map((item, i) => (
                <Link key={i} to={`/langues/${item.slug}`} onClick={() => setIsOpen(false)} className="block text-[10px] font-bold text-slate-300">• {item.name}</Link>
              ))}
            </div>
          </div>

          {/* Mobile Section 4 */}
          <div className="border-l-2 border-slate-700 pl-2 space-y-1">
            <span className="block text-xs font-black text-brand-gold uppercase">SOUTIEN SCOLAIRE :</span>
            <div className="space-y-1 pl-2">
              {soutienList.map((item, i) => (
                <Link key={i} to={`/soutien/${item.slug}`} onClick={() => setIsOpen(false)} className="block text-[10px] font-bold text-slate-300">• {item.name}</Link>
              ))}
            </div>
          </div>
          

          <hr className="border-slate-800 my-1" />
          <a href="/#bourses-etudes" onClick={() => setIsOpen(false)} className="block py-1.5 text-xs font-bold text-slate-300 hover:text-brand-gold">
            BOURSES
          </a>
          
          {/* CORRECTION MOBILE : Remplacement propre de l'ancienne balise brisée par un vrai Link */}
          <Link to="/contact" onClick={() => setIsOpen(false)} className="block py-1.5 text-xs font-bold text-slate-200 hover:text-brand-gold">
            CONTACT
          </Link>
        </div>
      )}
    </nav>
  );
}