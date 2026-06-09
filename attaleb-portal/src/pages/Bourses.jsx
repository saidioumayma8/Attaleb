import React from 'react';
import { GraduationCap, Search, FileText, CheckCircle2 } from 'lucide-react';

export default function Bourses() {
  const bourses = [
    { title: "Bourses d'Excellence (France)", desc: "Pour les étudiants ayant un excellent dossier académique." },
    { title: "Bourses Gouvernementales (Espagne)", desc: "Aides financières pour les programmes de licence et master." },
    { title: "Bourses de Recherche (Canada)", desc: "Destinées aux étudiants en cycle doctoral ou recherche." },
    { title: "Bourses Sportives (USA)", desc: "Programmes spécifiques pour les athlètes de haut niveau." }
  ];

  return (
    <div className="min-h-screen bg-gray-50 pb-20">
      {/* HEADER */}
      <section className="bg-brand-blue py-16 px-4 text-center">
        <h1 className="text-3xl md:text-4xl font-black text-white uppercase tracking-wider">
          Bourses d'Études
        </h1>
        <p className="text-slate-300 mt-4 text-sm max-w-xl mx-auto">
          Découvrez les programmes de financement disponibles pour concrétiser votre projet d'études à l'étranger.
        </p>
      </section>

      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* POURQUOI POSTULER */}
        <div className="grid md:grid-cols-2 gap-12 items-center mb-20">
          <div className="space-y-6">
            <h2 className="text-2xl font-black text-brand-blue uppercase">Financez votre avenir</h2>
            <p className="text-gray-600 leading-relaxed">
              Obtenir une bourse est une étape clé pour réduire les coûts liés aux études internationales. 
              Chez Attaleb.net, nous vous aidons à identifier les programmes correspondant à votre profil 
              et à monter des dossiers de candidature solides.
            </p>
            <ul className="space-y-3">
              {[ "Analyse d'éligibilité", "Optimisation du CV", "Rédaction de lettre de motivation" ].map((item, i) => (
                <li key={i} className="flex items-center gap-2 text-sm font-bold text-gray-700">
                  <CheckCircle2 size={18} className="text-brand-gold" /> {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 text-center">
            <Search className="w-16 h-16 text-brand-gold mx-auto mb-4" />
            <h3 className="font-bold text-lg text-brand-blue">Besoin d'une recherche personnalisée ?</h3>
            <p className="text-sm text-gray-500 mt-2 mb-6">Nos experts analysent les bourses disponibles selon votre pays de destination.</p>
            <a href="/contact" className="bg-brand-blue text-white px-6 py-3 rounded-full font-bold text-xs uppercase hover:bg-blue-900 transition-colors">
              Nous contacter
            </a>
          </div>
        </div>

        {/* GRILLE DES BOURSES */}
        <h2 className="text-xl font-black text-brand-blue uppercase mb-8 text-center">Programmes populaires</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {bourses.map((b, i) => (
            <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 hover:border-brand-gold transition-colors shadow-sm">
              <div className="flex items-center gap-4 mb-4">
                <div className="bg-blue-50 p-3 rounded-xl">
                  <GraduationCap className="text-brand-blue" />
                </div>
                <h3 className="font-bold text-brand-blue">{b.title}</h3>
              </div>
              <p className="text-xs text-slate-500 leading-relaxed">{b.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}