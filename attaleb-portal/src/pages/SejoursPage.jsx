import React from 'react';
import { Link } from 'react-router-dom';
import { Globe, GraduationCap, CheckCircle2, Plane, Home as HomeIcon, Star, Users, Phone, ArrowRight, Shield, BookOpen, Languages } from 'lucide-react';

export default function SejoursPage() {
  const formulas = [
    {
      title: "Anglais Général & Académique",
      desc: "Développez votre aisance à l'écrit comme à l'oral pour des objectifs académiques ou de la vie quotidienne.",
      destinations: "Royaume-Uni, États-Unis, Canada, Irlande",
      features: ["20 à 30 leçons par semaine", "Niveaux : Débutant à Avancé", "Professeurs natifs qualifiés"]
    },
    {
      title: "Préparation aux Examens Officiels",
      desc: "Optimisez vos scores aux examens de langues internationaux indispensables pour Campus France ou les universités anglophones.",
      destinations: "Immersion IELTS, TOEFL, TCF / TEF",
      features: ["Exercices types en conditions réelles", "Focus méthodologie & timing", "Professeurs experts certificateurs"]
    },
    {
      title: "Anglais des Affaires & Professionnel",
      desc: "Boostez vos compétences linguistiques professionnelles pour faire évoluer votre carrière dans un contexte international.",
      destinations: "UK (Londres), USA, Canada",
      features: ["Vocabulaire business & corporate", "Ateliers négociations & réunions", "Réseautage professionnel international"]
    }
  ];

  const accommodations = [
    {
      type: "Famille d'Accueil",
      desc: "Immersion culturelle totale au sein d'une famille locale soigneusement sélectionnée. Pratiquez la langue au quotidien et découvrez le mode de vie du pays.",
      details: ["Chambre individuelle ou partagée", "Demi-pension incluse", "Familles vérifiées et de confiance"]
    },
    {
      type: "Résidence Étudiante",
      desc: "Vivez une expérience étudiante internationale en toute indépendance. Partagez votre quotidien avec des étudiants venant des quatre coins du monde.",
      details: ["Chambre individuelle avec salle de bain", "Espaces communs (cuisine, salons)", "Située à proximité des écoles partenaires"]
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
            { val: "10+", label: "Destinations Mondiales" },
            { val: "100%", label: "Immersion Culturelle" },
            { val: "24h/7", label: "Assistance & Suivi" },
            { val: "12-25+", label: "Tranches d'âge Éligibles" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-black text-brand-gold">{s.val}</div>
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
                <div className="p-6 md:p-8 space-y-4">
                  <div className="h-1 bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full w-12" />
                  <h3 className="text-base font-black text-brand-blue uppercase tracking-wide">{f.title}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{f.desc}</p>
                  
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 p-2.5 rounded-lg border border-slate-100 font-bold uppercase tracking-wider">
                    <Globe size={12} className="text-brand-gold shrink-0" />
                    <span>{f.destinations}</span>
                  </div>

                  <div className="space-y-2 pt-2">
                    {f.features.map((feat, idx) => (
                      <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                        <CheckCircle2 size={13} className="text-blue-500 shrink-0" />
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
              <div key={i} className="p-6 bg-slate-50 rounded-2xl border border-slate-100 space-y-4 flex flex-col justify-between">
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-100 text-blue-600 flex items-center justify-center">
                    <HomeIcon size={20} />
                  </div>
                  <h3 className="text-base font-black text-brand-blue uppercase tracking-wide">{a.type}</h3>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">{a.desc}</p>
                </div>
                <div className="space-y-2 pt-4 border-t border-slate-200/60">
                  {a.details.map((d, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-[11px] font-bold text-slate-700">
                      <CheckCircle2 size={12} className="text-brand-gold shrink-0" />
                      <span>{d}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Accompaniment roadmap */}
        <section className="space-y-12">
          <div className="text-center max-w-xl mx-auto space-y-2">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Processus</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Notre Accompagnement de A à Z</h2>
            <p className="text-xs text-slate-500 leading-relaxed">
              Nous gérons chaque étape de votre séjour pour vous garantir une expérience enrichissante et sereine.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
            {[
              { step: "01", title: "Choix de l'école", desc: "Sélection de l'école agréée et de la formule de cours." },
              { step: "02", title: "Inscription & Logement", desc: "Réservation de votre session de cours et de l'hébergement choisi." },
              { step: "03", title: "Visa & Vol", desc: "Aide à la constitution du dossier de visa et réservation du vol." },
              { step: "04", title: "Suivi sur place", desc: "Assistance et contact permanent durant tout votre séjour d'immersion." }
            ].map((step, i) => (
              <div key={i} className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm relative space-y-3 overflow-hidden">
                <span className="absolute right-4 top-2 text-4xl md:text-5xl font-black text-slate-100 select-none z-0">{step.step}</span>
                <div className="space-y-1 relative z-10 pt-4">
                  <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide">{step.title}</h4>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* CTA Bottom Section */}
      <section className="bg-brand-blue py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase">
            Prêt à partir en <span className="text-brand-gold">immersion</span> ?
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Contactez notre conseiller d'orientation pour concevoir votre projet de séjour linguistique sur-mesure.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              Demander un Devis Gratuit
            </Link>
            <a href="tel:0645212800" className="border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              06 45 21 28 00
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
