import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, Globe, FileText, Languages, Target, ArrowRight, Star, Mic, Headphones, PenTool, MessageSquare, Briefcase } from 'lucide-react';
import languesTeam from '../assets/langues-team.png';
import languesExam from '../assets/langues-exam.png';
import languesCoach from '../assets/langues-coach.png';
import ieltsLogo from '../assets/IELTS.png';
import toeflLogo from '../assets/TOEFL.jpg';
import tcfLogo from '../assets/TCF.png';
import deleLogo from '../assets/DELE.webp';
import delfLogo from '../assets/DELF.png';
import toeicLogo from '../assets/TOEIC.png';

const languesDatabase = {
  'ielts': {
    name: "IELTS (Anglais)",
    tagline: "Le test d'anglais le plus accepté au monde — UK, Canada, Australie, Europe et plus encore.",
    bgImage: "https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?auto=format&fit=crop&w=1600&q=80",
    overview: "L'IELTS Academic est le test de référence pour l'admission dans les universités anglophones et les programmes enseignés en anglais à travers le monde. Notre préparation intensive vous garantit d'atteindre le score requis.",
    details: [
      { title: "Listening & Reading", desc: "Techniques de skimming, scanning et prise de notes pour maximiser votre score aux sections compréhension." },
      { title: "Writing (Task 1 & 2)", desc: "Rédaction de rapports graphiques et d'essais argumentatifs avec feedback personnalisé." },
      { title: "Speaking", desc: "Simulations d'entretien avec des examinateurs certifiés pour gagner en fluidité et confiance." }
    ],
    features: [
      "Simulations hebdomadaires en conditions réelles",
      "Correction personnalisée des essays",
      "Pratique intensive du Speaking en face-à-face",
      "Vocabulaire académique et idiomes avancés"
    ],
    ctaText: "Atteignez votre score IELTS cible avec notre méthode éprouvée."
  },
  'toefl': {
    name: "TOEFL iBT (Anglais)",
    tagline: "Le test standard pour les universités américaines et canadiennes.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
    overview: "Le TOEFL iBT est le test privilégié par les institutions nord-américaines. Il évalue les 4 compétences linguistiques dans un format 100% informatisé. Notre programme vous prépare spécifiquement au format et au timing du test.",
    details: [
      { title: "Reading & Listening", desc: "Stratégies pour les textes académiques longs et les lectures audio avec prise de notes efficace." },
      { title: "Speaking (4 tâches)", desc: "Entraînement aux tâches intégrées et indépendantes avec enregistrement et feedback détaillé." },
      { title: "Writing (2 tâches)", desc: "Maîtrise de la tâche intégrée (lecture + audio + rédaction) et de l'essai indépendant." }
    ],
    features: [
      "Plateforme de test identique au TOEFL officiel",
      "Templates de réponses Speaking & Writing",
      "Score prédictif grâce aux tests diagnostics",
      "Préparation au format 100% informatisé"
    ],
    ctaText: "Préparez le TOEFL avec des outils identiques au test officiel."
  },
  'toeic': {
    name: "TOEIC (Anglais Professionnel)",
    tagline: "La certification d'anglais professionnel la plus demandée par les recruteurs et entreprises.",
    bgImage: "https://images.unsplash.com/photo-1521737711867-e3b97375f902?auto=format&fit=crop&w=1600&q=80",
    overview: "Le TOEIC (Test of English for International Communication) évalue l'anglais dans un contexte professionnel. Il est exigé par de nombreuses entreprises marocaines et internationales, ainsi que par certaines écoles de commerce.",
    details: [
      { title: "Listening Comprehension", desc: "Entraînement aux 4 parties : photos, questions-réponses, conversations et exposés." },
      { title: "Reading Comprehension", desc: "Maîtrise des 3 parties : phrases incomplètes, compréhension de textes et doubles passages." },
      { title: "Score 850+", desc: "Programme conçu pour atteindre le score Gold (850+) requis par les multinationales." }
    ],
    features: [
      "Simulations complètes de 2h en conditions réelles",
      "Techniques de gestion du temps (200 questions en 2h)",
      "Vocabulaire Business et Corporate English",
      "Stratégies pour les pièges classiques du TOEIC"
    ],
    ctaText: "Boostez votre CV avec un score TOEIC qui impressionne les recruteurs."
  },
  'tcf-tef': {
    name: "Préparation TCF / TEF",
    tagline: "Validez votre projet Campus France avec un score optimal aux tests de connaissance du français.",
    bgImage: "https://images.unsplash.com/photo-1513001900722-370f803f498d?auto=format&fit=crop&w=1600&q=80",
    overview: "Le TCF (Test de Connaissance du Français) est indispensable pour tout projet d'études en France. Nos sessions de préparation intensive vous permettent de maîtriser les structures du test et d'améliorer vos scores rapidement.",
    details: [
      { title: "TCF Tout Public", desc: "Idéale pour les dossiers DAP et hors DAP avec épreuves d'expression écrite." },
      { title: "TEF (Test d'Évaluation de Français)", desc: "Utilisé pour les procédures d'immigration et d'études dans certains pays francophones comme le Canada." },
      { title: "Méthodologie Strategique", desc: "Focus sur la gestion du temps et les techniques de réponse aux questions de compréhension orale et écrite." }
    ],
    features: [
      "Simulations hebdomadaires en conditions réelles",
      "Correction personnalisée des expressions écrites",
      "Laboratoire audio pour la compréhension orale",
      "Fiches de vocabulaire et grammaire ciblées"
    ],
    ctaText: "Préparez votre TCF avec nos experts pour garantir votre admission."
  },
  'delf-dalf': {
    name: "Diplômes DELF / DALF",
    tagline: "Obtenez un diplôme de langue française valable à vie et reconnu internationalement.",
    bgImage: "https://images.unsplash.com/photo-1543167664-40d6943fcf3e?auto=format&fit=crop&w=1600&q=80",
    overview: "Le DELF (B1/B2) et le DALF (C1/C2) sont des diplômes officiels délivrés par le ministère français de l'Éducation nationale. Contrairement au TCF, ils n'ont pas de date d'expiration et valorisent durablement votre CV.",
    details: [
      { title: "DELF B2", desc: "Niveau requis pour la plupart des universités en France pour intégrer une Licence ou un Master." },
      { title: "DALF C1", desc: "Niveau expert requis pour les filières d'élite, le droit et les sciences humaines." },
      { title: "Diplôme à vie", desc: "Une certification définitive de vos compétences linguistiques sans besoin de repasser le test." }
    ],
    features: [
      "Préparation aux 4 compétences (Oral, Écrit, Lecture, Écoute)",
      "Ateliers de conversation pour l'épreuve orale",
      "Supports pédagogiques officiels du CIEP",
      "Accompagnement administratif pour l'inscription"
    ],
    ctaText: "Investissez dans votre avenir avec un diplôme valable à vie."
  },
  'espagnol-dele': {
    name: "Espagnol (DELE)",
    tagline: "Certifiez votre niveau d'espagnol avec le diplôme officiel reconnu par les universités hispanophones.",
    bgImage: "https://images.unsplash.com/photo-1543783207-ec64e4d95325?auto=format&fit=crop&w=1600&q=80",
    overview: "Le DELE (Diplomas de Español como Lengua Extranjera) est le certificat officiel de l'Instituto Cervantes. Il est exigé par les universités espagnoles et latino-américaines pour l'admission en Licence et Master.",
    details: [
      { title: "Niveau B1", desc: "Niveau intermédiaire requis pour la plupart des universités espagnoles." },
      { title: "Niveau B2", desc: "Niveau avancé recommandé pour les filières sélectives et les masters." },
      { title: "Diplôme à vie", desc: "Comme le DELF, le DELE est valable à vie et reconnu dans le monde entier." }
    ],
    features: [
      "Cours avec professeurs hispanophones natifs",
      "Préparation aux 4 épreuves (Lire, Écrire, Écouter, Parler)",
      "Immersion culturelle et ateliers conversation",
      "Simulations d'examen en conditions réelles"
    ],
    ctaText: "Maîtrisez l'espagnol et accédez aux universités d'Espagne et d'Amérique Latine."
  }
};

// ─── SECTION 1: ENGLISH (IELTS first, then TOEFL, then TOEIC) ───
const englishCerts = [
  {
    slug: 'ielts',
    icon: 'globe',
    logo: ieltsLogo,
    title: 'IELTS Academic',
    subtitle: 'International English Testing',
    flag: '🇬🇧',
    desc: 'Le test d\'anglais le plus accepté au monde : UK, Canada, Australie, Europe et programmes en anglais.',
    levels: 'Band 5.5 → 8.0',
    validity: '2 ans',
    schools: "Oxford, Cambridge, McGill, Melbourne...",
    color: 'from-red-500 to-rose-600'
  },
  {
    slug: 'toefl',
    icon: 'globe',
    logo: toeflLogo,
    title: 'TOEFL iBT',
    subtitle: 'Test of English as a Foreign Language',
    flag: '🇺🇸',
    desc: 'Le test standard pour les universités américaines et canadiennes. Format 100% informatisé.',
    levels: '80 → 110+',
    validity: '2 ans',
    schools: "Harvard, MIT, UCLA, U. Toronto...",
    color: 'from-blue-600 to-indigo-700'
  },
  {
    slug: 'toeic',
    icon: 'briefcase',
    logo: toeicLogo,
    title: 'TOEIC',
    subtitle: 'Anglais Professionnel',
    flag: '💼',
    desc: 'La certification d\'anglais professionnel la plus demandée par les recruteurs et multinationales.',
    levels: 'Score 850+',
    validity: '2 ans',
    schools: "Entreprises, Business Schools, MBA...",
    color: 'from-amber-500 to-orange-600'
  }
];

// ─── SECTION 2: FRENCH ───
const frenchCerts = [
  {
    slug: 'tcf-tef',
    icon: 'file',
    logo: tcfLogo,
    title: 'TCF / TEF',
    subtitle: 'Test de Connaissance du Français',
    flag: '🇫🇷',
    desc: 'Préparation intensive aux tests de français pour Campus France et immigration Canada. Score B2+ garanti.',
    levels: 'A1 → C2',
    validity: '2 ans',
    schools: "Sorbonne, Sciences Po, HEC Paris...",
    color: 'from-blue-500 to-indigo-600'
  },
  {
    slug: 'delf-dalf',
    icon: 'award',
    logo: delfLogo,
    title: 'DELF / DALF',
    subtitle: 'Diplômes Officiels à Vie',
    flag: '🇫🇷',
    desc: 'Diplômes reconnus internationalement, valables à vie. B2 pour université, C1 pour filières d\'élite.',
    levels: 'B1 → C2',
    validity: 'À vie',
    schools: "Toutes universités françaises...",
    color: 'from-indigo-500 to-purple-600'
  }
];

// ─── SECTION 3: SPANISH ───
const spanishCerts = [
  {
    slug: 'espagnol-dele',
    icon: 'pen',
    logo: deleLogo,
    title: 'DELE',
    subtitle: 'Diplomas de Español como Lengua Extranjera',
    flag: '🇪🇸',
    desc: 'Certification officielle de l\'Instituto Cervantes pour les universités espagnoles et latino-américaines. Valable à vie.',
    levels: 'B1 → C1',
    validity: 'À vie',
    schools: "U. Complutense, U. Barcelona, UAM...",
    color: 'from-yellow-500 to-red-500'
  }
];

// Icon mapping
function CertIcon({ type, className }) {
  switch (type) {
    case 'file': return <FileText size={18} className={className} />;
    case 'award': return <Award size={18} className={className} />;
    case 'globe': return <Globe size={18} className={className} />;
    case 'briefcase': return <Briefcase size={18} className={className} />;
    case 'pen': return <PenTool size={18} className={className} />;
    default: return <Languages size={18} className={className} />;
  }
}

// ═══════════════════════════════════════
//  LANDING PAGE
// ═══════════════════════════════════════
function LanguesLanding() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">
      
      {/* Hero */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 text-center flex items-center justify-center min-h-[320px]"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.92), rgba(11, 38, 79, 0.78)), url('https://images.unsplash.com/photo-1546410531-bb4caa6b424d?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="flex justify-center gap-2 mb-2">
            <Languages size={28} className="text-brand-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            Concours de Langues
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Préparez vos certifications linguistiques avec Attaleb — IELTS, TOEFL, TOEIC, TCF, DELF, DELE — et ouvrez les portes des meilleures universités du monde.
          </p>
          <div className="flex flex-wrap justify-center gap-3 pt-4">
            <a href="#anglais" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-5 py-2.5 rounded transition-all uppercase tracking-wider flex items-center gap-2">
              🇬🇧 English
            </a>
            <a href="#francais" className="border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-5 py-2.5 rounded transition-all uppercase tracking-wider flex items-center gap-2">
              🇫🇷 Français
            </a>
            <a href="#espagnol" className="border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-5 py-2.5 rounded transition-all uppercase tracking-wider flex items-center gap-2">
              🇪🇸 Español
            </a>
          </div>

          {/* Certification Logos Strip */}
          <div className="flex flex-wrap justify-center items-center gap-4 md:gap-6 pt-6">
            {[
              { src: ieltsLogo, name: 'IELTS' },
              { src: toeflLogo, name: 'TOEFL' },
              { src: toeicLogo, name: 'TOEIC' },
              { src: tcfLogo, name: 'TCF' },
              { src: delfLogo, name: 'DELF' },
              { src: deleLogo, name: 'DELE' },
            ].map((logo, i) => (
              <div key={i} className="w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center p-2 hover:bg-white/20 hover:scale-110 transition-all duration-300 group">
                <img src={logo.src} alt={logo.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-brand-blue text-white py-5 border-b border-brand-gold/30">
        <div className="max-w-6xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "6", label: "Certifications" },
            { val: "95%", label: "Taux de Réussite" },
            { val: "500+", label: "Étudiants Formés" },
            { val: "3", label: "Langues Enseignées" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-black text-brand-gold">{s.val}</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Photo Banner */}
      <section className="max-w-5xl mx-auto px-4 py-10">
        <div className="relative">
          <div className="rounded-2xl overflow-hidden shadow-lg">
            <img
              src={languesTeam}
              alt="L'équipe pédagogique Attaleb — professeurs de langues"
              className="w-full h-56 md:h-72 object-cover"
            />
          </div>
          {/* Overlay caption */}
          <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-5">
            <p className="text-white text-sm font-black uppercase tracking-wide">Notre Équipe de Professeurs Experts</p>
            <p className="text-slate-300 text-[11px] font-medium">Professeurs natifs certifiés — Anglais, Français, Allemand, Espagnol</p>
          </div>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 pb-16 space-y-24">

        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 1: ENGLISH                    ║
           ╚═══════════════════════════════════════╝ */}
        <section id="anglais">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-red-50 border border-red-200 text-red-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              🇬🇧 English
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Certifications en Anglais</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
              IELTS, TOEFL pour les études et TOEIC pour le monde professionnel.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {englishCerts.map((card) => (
              <Link
                key={card.slug}
                to={`/langues/${card.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />
                <div className="p-6 space-y-4">
                  <div className="flex items-start gap-3">
                    {card.logo ? (
                      <div className="w-12 h-12 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1 shadow-sm shrink-0 overflow-hidden">
                        <img src={card.logo} alt={card.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-2xl">{card.flag}</span>
                    )}
                    <div>
                      <h3 className="font-black text-base text-brand-blue uppercase tracking-wide">{card.title}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                    <Star size={11} className="text-brand-gold shrink-0" />
                    <span className="font-medium">{card.schools}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {card.levels}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        {card.validity}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-gold group-hover:underline flex items-center gap-1">
                      Détails <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="w-3 h-3 bg-brand-gold rounded-full" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 2: FRANÇAIS                   ║
           ╚═══════════════════════════════════════╝ */}
        <section id="francais">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-blue-50 border border-blue-200 text-blue-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              🇫🇷 Français
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Certifications en Français</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
              Indispensables pour étudier en France et au Canada — TCF, TEF, DELF et DALF.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {frenchCerts.map((card) => (
              <Link
                key={card.slug}
                to={`/langues/${card.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
              >
                <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    {card.logo ? (
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
                        <img src={card.logo} alt={card.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-3xl">{card.flag}</span>
                    )}
                    <div>
                      <h3 className="font-black text-lg text-brand-blue uppercase tracking-wide">{card.title}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                    <Star size={11} className="text-brand-gold shrink-0" />
                    <span className="font-medium">{card.schools}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {card.levels}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        Validité : {card.validity}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-gold group-hover:underline flex items-center gap-1">
                      Détails <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* Divider */}
        <div className="flex items-center gap-4 max-w-md mx-auto">
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
          <div className="w-3 h-3 bg-brand-gold rounded-full" />
          <div className="flex-1 h-px bg-gradient-to-r from-transparent via-slate-300 to-transparent" />
        </div>

        {/* ╔═══════════════════════════════════════╗
           ║   SECTION 3: ESPAÑOL                    ║
           ╚═══════════════════════════════════════╝ */}
        <section id="espagnol">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-amber-50 border border-amber-200 text-amber-700 text-[10px] font-black uppercase tracking-widest px-4 py-1.5 rounded-full mb-4">
              🇪🇸 Español
            </div>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">Certificación en Español</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
              DELE — le diplôme officiel d'espagnol reconnu dans le monde entier.
            </p>
          </div>

          <div className="max-w-md mx-auto">
            {spanishCerts.map((card) => (
              <Link
                key={card.slug}
                to={`/langues/${card.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 block"
              >
                <div className={`h-1.5 bg-gradient-to-r ${card.color}`} />
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-start gap-3">
                    {card.logo ? (
                      <div className="w-14 h-14 rounded-xl bg-white border border-slate-100 flex items-center justify-center p-1.5 shadow-sm shrink-0 overflow-hidden">
                        <img src={card.logo} alt={card.title} className="w-full h-full object-contain" />
                      </div>
                    ) : (
                      <span className="text-3xl">{card.flag}</span>
                    )}
                    <div>
                      <h3 className="font-black text-lg text-brand-blue uppercase tracking-wide">{card.title}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>

                  <div className="flex items-center gap-2 text-[10px] text-slate-500 bg-slate-50 px-3 py-2 rounded-lg border border-slate-100">
                    <Star size={11} className="text-brand-gold shrink-0" />
                    <span className="font-medium">{card.schools}</span>
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <div className="flex gap-2">
                      <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                        {card.levels}
                      </span>
                      <span className="text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1 rounded-full border border-slate-200">
                        Validité : {card.validity}
                      </span>
                    </div>
                    <span className="text-[11px] font-bold text-brand-gold group-hover:underline flex items-center gap-1">
                      Détails <ArrowRight size={12} />
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        {/* ═══ COMPARISON TABLE ═══ */}
        <section className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-8 border-b border-slate-100">
            <h2 className="text-xl font-black text-brand-blue uppercase text-center">Comparatif des Certifications</h2>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs">
              <thead>
                <tr className="bg-slate-50 text-brand-blue">
                  <th className="p-3 text-left font-black uppercase tracking-wide">Test</th>
                  <th className="p-3 text-center font-black uppercase tracking-wide">Langue</th>
                  <th className="p-3 text-center font-black uppercase tracking-wide">Validité</th>
                  <th className="p-3 text-center font-black uppercase tracking-wide">Score Min.</th>
                  <th className="p-3 text-center font-black uppercase tracking-wide">Pourquoi ?</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100">
                {[
                  { test: "IELTS", lang: "🇬🇧 Anglais", validity: "2 ans", score: "6.5+", why: "UK, Canada, Europe" },
                  { test: "TOEFL iBT", lang: "🇺🇸 Anglais", validity: "2 ans", score: "90+", why: "USA, Canada" },
                  { test: "TOEIC", lang: "💼 Anglais Pro", validity: "2 ans", score: "850+", why: "Recrutement, MBA" },
                  { test: "TCF", lang: "🇫🇷 Français", validity: "2 ans", score: "B2", why: "Campus France" },
                  { test: "TEF", lang: "🇫🇷 Français", validity: "2 ans", score: "B2", why: "Immigration Canada" },
                  { test: "DELF B2", lang: "🇫🇷 Français", validity: "À vie", score: "B2", why: "Universités France" },
                  { test: "DALF C1", lang: "🇫🇷 Français", validity: "À vie", score: "C1", why: "Filières d'élite" },
                  { test: "DELE B2", lang: "🇪🇸 Espagnol", validity: "À vie", score: "B2", why: "Universités Espagne" }
                ].map((row, i) => (
                  <tr key={i} className="hover:bg-slate-50 transition-colors">
                    <td className="p-3 font-bold text-brand-blue">{row.test}</td>
                    <td className="p-3 text-center">{row.lang}</td>
                    <td className="p-3 text-center text-slate-600">{row.validity}</td>
                    <td className="p-3 text-center">
                      <span className="bg-amber-50 text-brand-gold font-black px-2 py-0.5 rounded-full border border-amber-200">{row.score}</span>
                    </td>
                    <td className="p-3 text-center text-slate-600">{row.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* ═══ EXAM ENVIRONMENT PHOTO ═══ */}
        <div className="grid grid-cols-1 md:grid-cols-5 gap-6 items-center">
          <div className="md:col-span-3">
            <div className="rounded-2xl overflow-hidden shadow-lg">
              <img
                src={languesExam}
                alt="Salle d'examen — préparation aux concours de langues"
                className="w-full h-48 md:h-60 object-cover"
              />
            </div>
          </div>
          <div className="md:col-span-2 space-y-4">
            <h3 className="text-lg font-black text-brand-blue uppercase">Conditions Réelles d'Examen</h3>
            <p className="text-xs text-slate-600 leading-relaxed">
              Nos examens blancs se déroulent dans les mêmes conditions que l'épreuve officielle — timing strict, salle surveillée et format identique. C'est la clé de la réussite.
            </p>
            <div className="flex gap-3">
              <div className="bg-blue-50 px-4 py-2 rounded-xl border border-blue-100 text-center">
                <div className="text-lg font-black text-brand-blue">6</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Langues</div>
              </div>
              <div className="bg-amber-50 px-4 py-2 rounded-xl border border-amber-100 text-center">
                <div className="text-lg font-black text-brand-blue">100%</div>
                <div className="text-[9px] text-slate-500 uppercase tracking-widest font-bold">Conditions Réelles</div>
              </div>
            </div>
          </div>
        </div>

        {/* ═══ POURQUOI ATTALEB ═══ */}
        <section>
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">POURQUOI ATTALEB ?</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 mb-10">
            {/* Coach photo */}
            <div className="md:col-span-2">
              <div className="rounded-2xl overflow-hidden shadow-lg h-full">
                <img
                  src={languesCoach}
                  alt="Accompagnement personnalisé — coach Attaleb"
                  className="w-full h-full object-cover min-h-[220px]"
                />
              </div>
            </div>
            {/* Text */}
            <div className="md:col-span-3 flex flex-col justify-center space-y-4">
              <h3 className="text-xl font-black text-brand-blue uppercase">Un Accompagnement Humain et Personnalisé</h3>
              <p className="text-xs text-slate-600 leading-relaxed">
                Chez Attaleb, chaque étudiant bénéficie d'un suivi individuel avec un coach dédié qui l'accompagne du diagnostic initial jusqu'au jour de l'examen. Nos conseillers sont disponibles pour répondre à toutes vos questions.
              </p>
            </div>
          </div>

        </section>

      </main>

      {/* CTA */}
      <section className="py-16 px-4 bg-brand-blue text-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black uppercase">
            Prêt à passer votre <span className="text-brand-gold">certification</span> ?
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Contactez-nous pour un test de niveau gratuit et un plan de préparation personnalisé.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              S'inscrire Maintenant
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

// ═══════════════════════════════════════
//  DETAIL PAGE
// ═══════════════════════════════════════
function LanguesDetail() {
  const { slug } = useParams();
  const data = languesDatabase[slug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Certification en préparation</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu pour cette langue arrive très prochainement.</p>
        <Link to="/langues" className="text-xs text-brand-gold font-bold hover:underline uppercase">
          ← Retour aux langues
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[300px]"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('${data.bgImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <Link to="/langues" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux langues
          </Link>
          <div className="flex justify-center gap-2 mb-2">
            <Languages size={24} className="text-brand-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            {data.name}
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {data.tagline}
          </p>
        </div>
      </section>

      <main className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Target size={20} className="text-brand-gold" /> Objectifs de la Formation
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">{data.overview}</p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-6 border-t border-slate-50">
              {data.details.map((item, i) => (
                <div key={i} className="space-y-2">
                  <h3 className="text-xs font-black text-brand-blue uppercase tracking-wide">{item.title}</h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2 mb-8">
              <Award size={20} className="text-brand-gold" /> Pourquoi Choisir Attaleb.ma ?
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3">
                  <div className="w-2 h-2 bg-brand-gold rounded-full shrink-0" />
                  <span className="text-xs font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-6">
            <div className="space-y-2">
              <h3 className="font-black text-lg uppercase tracking-wide text-brand-gold">Sessions Prochaines</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Contactez-nous pour commencer votre parcours</p>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Options en présentiel ou hybride</span>
              </div>
              <div className="flex items-center gap-3">
                <FileText size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Examens blancs inclus</span>
              </div>
            </div>
            <Link to="/contact" className="block w-full bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              S'inscrire Maintenant
            </Link>
            <p className="text-[10px] text-center text-slate-400 font-medium">
              Besoin de plus d'infos ? Appelez-nous : <br />
              <span className="text-white font-black text-xs">06 45 21 28 00</span>
            </p>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── MAIN EXPORT ───
export default function LanguesPage() {
  const { slug } = useParams();
  if (slug) return <LanguesDetail />;
  return <LanguesLanding />;
}
