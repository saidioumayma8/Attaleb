import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Zap, Globe, GraduationCap, ArrowRight, Star, Shield, Plane, Briefcase, Stethoscope, Cog, Scale } from 'lucide-react';
import concoursTeacher from '../assets/classroom-teacher.png';
import concoursLecture from '../assets/lecture-hall.png';
import satLogo from '../assets/SAT.jfif';
import gmatLogo from '../assets/GMAT.png';
import greLogo from '../assets/GRE.svg';
import sesameLogo from '../assets/SESAME.png';
import actLogo from '../assets/ACT.png';
import tageMageLogo from '../assets/TageMage.png';

export default function ConcoursPage() {
  
  const concoursInternationaux = [
    { 
      name: "SAT", 
      logo: satLogo,
      fullName: "Scholastic Assessment Test",
      flag: "🇺🇸",
      desc: "Le test standardisé américain requis pour l'admission dans les universités aux États-Unis et de nombreux programmes internationaux.", 
      features: ["Maths & Evidence-Based Reading", "Stratégies de timing", "Simulations complètes", "Vocabulaire avancé"],
      schools: "Harvard, MIT, Stanford, Columbia..."
    },
    { 
      name: "GMAT", 
      logo: gmatLogo,
      fullName: "Graduate Management Admission Test",
      flag: "🌐",
      desc: "Le test de référence mondial pour les MBA et programmes de Master dans les Business Schools internationales.", 
      features: ["Quantitative Reasoning", "Verbal Reasoning", "Integrated Reasoning", "Analytical Writing"],
      schools: "HEC, INSEAD, Wharton, London Business School..."
    },
    { 
      name: "SESAME", 
      logo: sesameLogo,
      fullName: "Concours Écoles de Commerce",
      flag: "🇫🇷",
      desc: "Concours commun pour intégrer les grandes écoles de commerce françaises post-bac.", 
      features: ["Tests psychotechniques", "Analyse de documents", "Anglais & LV2", "Entretien de personnalité"],
      schools: "ESSEC, ESCP, EM Lyon, EDHEC..."
    },
    { 
      name: "GRE", 
      logo: greLogo,
      fullName: "Graduate Record Examinations",
      flag: "🌐",
      desc: "Requis pour les programmes de Master et Doctorat dans les universités américaines et canadiennes.", 
      features: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing", "Stratégies d'examen"],
      schools: "Stanford, MIT, McGill, Oxford..."
    },
    { 
      name: "ACT", 
      logo: actLogo,
      fullName: "American College Testing",
      flag: "🇺🇸",
      desc: "Alternative au SAT, accepté par toutes les universités américaines. Préparez les 4 sections avec efficacité.", 
      features: ["English & Reading", "Maths & Science", "Writing optionnel", "Time management"],
      schools: "UCLA, NYU, University of Michigan..."
    },
    { 
      name: "TAGE MAGE", 
      logo: tageMageLogo,
      fullName: "Test d'Aptitude à la Gestion",
      flag: "🇫🇷",
      desc: "Le test incontournable pour les admissions en Grandes Écoles de Commerce et IAE en France.", 
      features: ["Compréhension & Expression", "Logique & Calcul", "Culture générale", "Anglais"],
      schools: "HEC, ESSEC, ESCP, IAE Paris..."
    }
  ];

  const concoursNationaux = [
    { 
      name: "Commerce", 
      fullName: "ENCG / ISCAE",
      icon: "commerce",
      desc: "Préparation au TAFEM et aux épreuves d'admission ISCAE.", 
      features: ["Tests psychotechniques", "Culture générale", "Entretien oral", "Logique"] 
    },
    { 
      name: "Médecine & Pharmacie", 
      fullName: "FMP / FMD",
      icon: "medicine",
      desc: "Préparation intensive pour les facultés de Médecine, Pharmacie et Dentaire au Maroc.", 
      features: ["Simulations réelles", "Techniques QCM", "Coaching stress", "Révisions SVT/Physique"] 
    },
    { 
      name: "Ingénierie", 
      fullName: "ENSA / ENSAM",
      icon: "engineering",
      desc: "Accédez aux écoles d'ingénieurs marocaines grâce à nos préparations ciblées.", 
      features: ["Annales corrigées", "Calcul mental rapide", "Maths & Physique", "Logique"] 
    }
  ];

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">
      
      {/* ═══════════ HERO ═══════════ */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 text-center flex items-center justify-center min-h-[320px]"
        style={{ backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.92), rgba(11, 38, 79, 0.78)), url('https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=1600&q=80')` }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">Préparation Concours</h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Nationaux et Internationaux — une préparation d'élite pour chaque concours, avec une méthodologie éprouvée et des résultats concrets.
          </p>
          <div className="flex justify-center gap-4 pt-4">
            <a href="#international" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-6 py-3 rounded transition-all uppercase tracking-wider flex items-center gap-2">
              <Globe size={14} /> Concours Internationaux
            </a>
            <a href="#national" className="border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-6 py-3 rounded transition-all uppercase tracking-wider flex items-center gap-2">
              <GraduationCap size={14} /> Concours Nationaux
            </a>
          </div>

          {/* Concours Logos Strip */}
          <div className="flex justify-center items-center gap-3 md:gap-4 flex-nowrap overflow-x-auto px-4 pt-6">
            {[
              { src: satLogo, name: "SAT" },
              { src: gmatLogo, name: "GMAT" },
              { src: sesameLogo, name: "SESAME" },
              { src: greLogo, name: "GRE" },
              { src: actLogo, name: "ACT" },
              { src: tageMageLogo, name: "TAGE MAGE" }
            ].map((logo, i) => (
              <div key={i} className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                <img src={logo.src} alt={logo.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ═══════════ STATS RIBBON ═══════════ */}
      <section className="bg-brand-blue text-white py-5 border-b border-brand-gold/30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "10+", label: "Concours Préparés" },
            { val: "95%", label: "Taux de Réussite" },
            { val: "300+", label: "Étudiants Formés" },
            { val: "6", label: "Tests Internationaux" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-black text-brand-gold">{s.val}</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 py-16 space-y-24">
        
        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 1: CONCOURS INTERNATIONAUX   ║
           ╚═══════════════════════════════════════╝ */}
        <section id="international">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Plane size={12} /> International
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Concours Internationaux</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Accédez aux meilleures universités du monde grâce à nos préparations aux tests standardisés mondiaux.
            </p>
          </div>

          {/* Grid: 2 columns, each card has flag + details */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {concoursInternationaux.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                {/* Card Top Accent */}
                <div className="h-1.5 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500" />
                <div className="p-6 md:p-8 space-y-4">
                  {/* Title Row */}
                  <div className="flex items-start gap-3">
                    {p.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1 shadow-sm shrink-0 overflow-hidden">
                        <img src={p.logo} alt={p.name} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-3xl mt-0.5">{p.flag}</span>
                    )}
                    <div>
                      <h3 className="text-lg font-black text-brand-blue uppercase tracking-wide">{p.name}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{p.fullName}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>

                  {/* Target Schools */}
                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                    <Star size={11} className="text-brand-gold shrink-0" />
                    <span className="font-medium">{p.schools}</span>
                  </div>

                  {/* Features Grid */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 bg-blue-50/50 p-2.5 rounded-lg border border-blue-100/60">
                        <CheckCircle2 size={12} className="text-blue-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ═══════ VISUAL DIVIDER ═══════ */}
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="w-3 h-3 bg-brand-gold rounded-full" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 2: CONCOURS NATIONAUX        ║
           ╚═══════════════════════════════════════╝ */}
        <section id="national">
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-emerald-50 border border-emerald-200 text-emerald-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              <Shield size={12} /> Maroc
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Concours Nationaux</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Préparez les concours d'accès aux grandes écoles marocaines avec notre méthodologie d'excellence.
            </p>
          </div>

          {/* Grid: single column, wider cards */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {concoursNationaux.map((p, i) => (
              <div key={i} className="bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 group">
                {/* Card Top Accent */}
                <div className="h-1.5 bg-gradient-to-r from-emerald-500 via-teal-500 to-cyan-500" />
                <div className="p-6 md:p-8 space-y-4">
                  {/* Title Row */}
                  <div className="flex items-start gap-3">
                    <div className="w-10 h-10 bg-emerald-100 rounded-xl flex items-center justify-center shrink-0">
                      {p.icon === 'commerce' && <Briefcase size={18} className="text-emerald-600" />}
                      {p.icon === 'medicine' && <Stethoscope size={18} className="text-emerald-600" />}
                      {p.icon === 'engineering' && <Cog size={18} className="text-emerald-600" />}
                      {p.icon === 'law' && <Scale size={18} className="text-emerald-600" />}
                    </div>
                    <div>
                      <h3 className="text-lg font-black text-brand-blue uppercase tracking-wide">{p.name}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{p.fullName}</p>
                    </div>
                  </div>

                  {/* Description */}
                  <p className="text-xs text-slate-600 leading-relaxed">{p.desc}</p>

                  {/* Features */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 pt-2">
                    {p.features.map((f, j) => (
                      <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 bg-emerald-50/50 p-2.5 rounded-lg border border-emerald-100/60">
                        <CheckCircle2 size={12} className="text-emerald-500 shrink-0" /> {f}
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 3: PASSERELLE FRANCE          ║
           ╚═══════════════════════════════════════╝ */}
        <section className="bg-gradient-to-br from-brand-blue via-brand-blue to-brand-blueDark p-8 md:p-12 rounded-3xl text-white relative overflow-hidden">
          {/* Decorative circles */}
          <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand-gold/10 rounded-full" />
          <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-white/5 rounded-full" />
          
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <span className="text-3xl">🇫🇷</span>
              <div>
                <span className="text-brand-gold text-[10px] font-bold tracking-widest uppercase">Passerelle France</span>
                <h2 className="text-xl md:text-2xl font-black uppercase">Aix-Marseille Université (AMU)</h2>
              </div>
            </div>
            <p className="text-sm text-slate-300 leading-relaxed mb-8 max-w-2xl">
              Accompagnement complet pour l'admission aux études de santé (PASS/LAS) en France. De la constitution du dossier Campus France jusqu'à l'inscription administrative.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-4">
              {["Dossier Campus France", "Lettre de motivation", "Stratégie d'admission", "Soutien administratif"].map((f, j) => (
                <div key={j} className="bg-white/10 backdrop-blur-sm p-4 rounded-xl border border-white/10 flex items-center gap-3">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0" />
                  <span className="text-xs font-bold">{f}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

      </main>

      {/* ═══ NOS SALLES & ÉTUDIANTS ═══ */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="relative rounded-2xl overflow-hidden shadow-lg group">
            <img src={concoursTeacher} alt="Enseignement interactif — préparation aux concours" className="w-full h-52 md:h-60 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-5">
              <p className="text-white text-sm font-black uppercase">Enseignement Interactif</p>
              <p className="text-slate-300 text-[11px]">Nos professeurs vous préparent avec méthode et passion</p>
            </div>
          </div>
        </div>
      </section>

      {/* ═══════════ CTA BOTTOM ═══════════ */}
      <section className="bg-brand-blue py-16 px-4 text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase">
            Prêt à réussir votre <span className="text-brand-gold">concours</span> ?
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Appelez-nous pour un bilan gratuit et un plan de préparation personnalisé adapté à votre objectif.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              Consultation Gratuite
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
