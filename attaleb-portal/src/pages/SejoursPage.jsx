import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, GraduationCap, CheckCircle2, Plane, Home as HomeIcon, Star, Users, Phone, ArrowRight, Shield, BookOpen, Languages } from 'lucide-react';
import ukFlag from '../assets/Flag_of_the_United_Kingdom_(3-5).svg.webp';
import canadaFlag from '../assets/Flag-Canada.webp';
import usaFlag from '../assets/US.png';

export default function SejoursPage() {
  const formulas = [
    {
      title: "Anglais Général & Académique",
      desc: "Développez votre aisance à l'écrit comme à l'oral pour des objectifs académiques ou de la vie quotidienne.",
      destinations: "London, Manchester, Birmingham",
      features: ["20 à 30 leçons par semaine", "Niveaux : Débutant à Avancé", "Professeurs natifs qualifiés"],
      gradient: "from-emerald-500 to-teal-600",
      checkColor: "text-emerald-500",
      image: "https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?auto=format&fit=crop&w=800&q=80",
      flag: ukFlag
    },
    {
      title: "Préparation aux Examens Officiels",
      desc: "Optimisez vos scores aux examens de langues internationaux indispensables pour Campus France ou les universités anglophones.",
      destinations: "Toronto, Vancouver",
      features: ["Exercices types en conditions réelles", "Focus méthodologie & timing", "Professeurs experts certificateurs"],
      gradient: "from-violet-500 to-purple-600",
      checkColor: "text-violet-500",
      image: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=800&q=80",
      flag: canadaFlag
    },
    {
      title: "Anglais des Affaires & Professionnel",
      desc: "Boostez vos compétences linguistiques professionnelles pour faire évoluer votre carrière dans un contexte international.",
      destinations: "New York, Orlando, Florida",
      features: ["Vocabulaire business & corporate", "Ateliers négociations & réunions", "Réseautage professionnel international"],
      gradient: "from-amber-500 to-orange-600",
      checkColor: "text-amber-500",
      image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=800&q=80",
      flag: usaFlag
    }
  ];

  const accommodations = [
    {
      type: "Famille d'Accueil",
      desc: "Immersion culturelle totale au sein d'une famille locale soigneusement sélectionnée. Pratiquez la langue au quotidien et découvrez le mode de vie du pays.",
      details: ["Chambre individuelle ou partagée", "Demi-pension incluse", "Familles vérifiées et de confiance"],
      image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      color: "from-emerald-500 to-teal-600",
      iconBg: "bg-emerald-100 text-emerald-600",
      checkColor: "text-emerald-500"
    },
    {
      type: "Résidence Étudiante",
      desc: "Vivez une expérience étudiante internationale en toute indépendance. Partagez votre quotidien avec des étudiants venant des quatre coins du monde.",
      details: ["Chambre individuelle avec salle de bain", "Espaces communs (cuisine, salons)", "Située à proximité des écoles partenaires"],
      image: "https://images.unsplash.com/photo-1555854877-bab0e564b8d5?auto=format&fit=crop&w=800&q=80",
      color: "from-violet-500 to-purple-600",
      iconBg: "bg-violet-100 text-violet-600",
      checkColor: "text-violet-500"
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">
      {/* Hero Section */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 text-center flex items-center justify-center min-h-[340px]"
        style={{ backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-gold text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full mb-2">
            <Plane size={14} /> Séjours d'Immersion Linguistique
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight">
            Séjours Linguistiques <br />
            <span className="text-brand-gold">à l'Étranger</span>
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Apprenez une langue en immersion totale à travers le monde. Attaleb vous accompagne de la sélection de votre école de langues à l'étranger jusqu'à votre installation.
          </p>
        </div>
      </section>

      {/* Stats Ribbon */}
      <section className="bg-brand-blue text-white py-5 border-b border-brand-gold/30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "10+", label: "Destinations Mondiales", color: "text-emerald-400" },
            { val: "100%", label: "Immersion Culturelle", color: "text-amber-400" },
            { val: "24h/7", label: "Assistance & Suivi", color: "text-cyan-400" },
            { val: "12-25+", label: "Tranches d'âge Éligibles", color: "text-violet-400" }
          ].map((s, i) => (
            <div key={i}>
              <div className={`text-xl font-black ${s.color}`}>{s.val}</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Main content area */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        
        {/* Formules section */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Formules</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Nos Formules d'Apprentissage</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Choisissez le format d'immersion adapté à votre profil et vos objectifs académiques ou professionnels.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {formulas.map((f, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden flex flex-col justify-between hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
                <div className="relative h-44 overflow-hidden">
                  <img src={f.flag} alt={f.title} className="w-full h-full object-cover" />
                  <div className="absolute bottom-3 left-3 right-3 flex items-center gap-2">
                    <span className="inline-block bg-white/90 text-brand-blue text-[10px] font-black uppercase tracking-wider px-3 py-1 rounded-full">
                      {f.title}
                    </span>
                  </div>
                </div>
                <div className="p-6 space-y-4">
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{f.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-bold uppercase tracking-wider">
                    <Globe size={12} className="text-cyan-500 shrink-0" />
                    <span>{f.destinations}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    {f.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                        <CheckCircle2 size={13} className={`${f.checkColor} shrink-0`} />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accommodations section */}
        <section className="space-y-12 bg-white p-8 md:p-12 rounded-3xl border border-slate-100 shadow-sm">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Hébergement</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Options d'Hébergement</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Pour que votre séjour soit réussi, nous sélectionnons des logements confortables et propices à l'échange linguistique.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 pt-4">
            {accommodations.map((a, i) => (
              <div key={i} className="bg-white rounded-2xl border border-slate-100 overflow-hidden shadow-sm hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col">
                <div className="relative h-48 overflow-hidden">
                  <img src={a.image} alt={a.type} className="w-full h-full object-cover" />
                  <div className={`absolute inset-0 bg-gradient-to-t ${a.color} opacity-30`} />
                  <div className="absolute bottom-3 left-3">
                    <div className={`w-10 h-10 rounded-xl ${a.iconBg} flex items-center justify-center shadow-md`}>
                      <HomeIcon size={20} />
                    </div>
                  </div>
                </div>
                <div className="p-6 space-y-4 flex flex-col flex-1">
                  <h3 className="text-base font-black text-brand-blue uppercase tracking-wide">{a.type}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{a.desc}</p>
                  <div className="space-y-2 pt-3 border-t border-slate-100 mt-auto">
                    {a.details.map((d, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                        <CheckCircle2 size={12} className={`${a.checkColor} shrink-0`} />
                        <span>{d}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

      </main>

      {/* CTA Bottom Section */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">
            Prêt à partir en <span className="text-red-600">immersion</span> ?
          </h2>
          <div className="flex justify-center pt-4">
            <a href="tel:0645212800" className="inline-flex items-center gap-2 text-sm font-black text-white bg-red-600 border-2 border-red-600 rounded-full px-8 py-3 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 transition-all duration-300 uppercase tracking-widest">
              06 45 21 28 00
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
