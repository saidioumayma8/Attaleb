import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { CheckCircle2, Zap, Globe, GraduationCap, ArrowRight, Star, Shield, Plane, Briefcase, Stethoscope, Cog, Scale, ClipboardCheck, Users, Brain } from 'lucide-react';
import concoursTeacher from '../assets/classroom-teacher.png';
import concoursLecture from '../assets/lecture-hall.png';
import satLogo from '../assets/SAT.jfif';
import gmatLogo from '../assets/GMAT.png';
import greLogo from '../assets/GRE.svg';
import sesameLogo from '../assets/SESAME.png';
import actLogo from '../assets/ACT.png';
import tageMageLogo from '../assets/TageMage.png';

const concoursDatabase = {
  'sat': {
    name: "SAT",
    fullName: "Scholastic Assessment Test",
    tagline: "Le test standardisé de référence pour intégrer les meilleures universités américaines et internationales.",
    bgImage: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?auto=format&fit=crop&w=1600&q=80",
    overview: "Le SAT évalue vos compétences en Mathématiques et en Reading/Writing. Notre préparation cible les techniques de résolution rapide et le vocabulaire spécifique requis pour atteindre un score supérieur à 1400/1600.",
    details: [
      { title: "Mathématiques", desc: "Algèbre, résolution de problèmes, analyse de données et fonctions avancées avec ou sans calculatrice." },
      { title: "Reading & Writing", desc: "Analyse critique de textes académiques, grammaire anglaise de haut niveau et structure logique des arguments." },
      { title: "Stratégies de timing", desc: "Méthodologie spécifique pour répondre avec rapidité et précision aux questions à choix multiples sous pression." }
    ],
    features: [
      "Simulations hebdomadaires sur la plateforme officielle Bluebook",
      "Entraînement intensif au vocabulaire académique anglais",
      "Fiches de synthèse et astuces mathématiques exclusives",
      "Bilan et diagnostic personnalisé après chaque test blanc"
    ],
    ctaText: "Atteignez votre score SAT cible avec notre méthode éprouvée.",
    schools: "Harvard, MIT, Stanford, Columbia, NYU, et les filières anglophones européennes.",
    flag: "🇺🇸",
    logo: satLogo
  },
  'gmat': {
    name: "GMAT",
    fullName: "Graduate Management Admission Test",
    tagline: "La clé d'accès aux plus prestigieux MBA et Masters in Management du monde.",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    overview: "Le GMAT mesure vos compétences en raisonnement quantitatif, verbal, et d'intégration de données. Notre accompagnement d'élite vous aide à maîtriser le format adaptatif par ordinateur pour viser un score de 650+ ou 700+.",
    details: [
      { title: "Quantitative Reasoning", desc: "Problèmes de logique mathématique et suffisance de données (Data Sufficiency) sans calculatrice." },
      { title: "Verbal Reasoning", desc: "Correction de phrases, raisonnement critique et compréhension de lecture complexe." },
      { title: "Data Insights", desc: "Évaluation de la capacité à analyser des données de sources multiples (tableaux, graphiques, textes)." }
    ],
    features: [
      "Entraînement sur logiciel simulant le test adaptatif officiel",
      "Banque de questions réelles classées par niveau de difficulté",
      "Méthodes spécifiques pour la section Data Insights",
      "Coaching individuel pour surmonter les blocages méthodologiques"
    ],
    ctaText: "Préparez le GMAT avec des experts du score d'élite.",
    schools: "HEC Paris, INSEAD, London Business School, Wharton...",
    flag: "🌐",
    logo: gmatLogo
  },
  'sesame': {
    name: "SESAME",
    fullName: "Concours Écoles de Commerce",
    tagline: "Le concours commun post-bac de référence pour intégrer 17 grandes écoles de commerce françaises.",
    bgImage: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80",
    overview: "Le Concours SESAME ouvre les portes des meilleurs programmes Bachelor et Grande École post-bac en France. Notre préparation vous permet d'assimiler les méthodes spécifiques aux épreuves écrites et orales.",
    details: [
      { title: "Épreuves Écrites", desc: "Maîtrise de l'épreuve d'Analyse Documentaire, des Enjeux Contemporains et des tests de logique." },
      { title: "Langues Vivantes", desc: "Épreuves d'Anglais et LV2 (Espagnol, Allemand, Arabe...) axées sur la grammaire, le lexique et la compréhension." },
      { title: "Épreuves Orales", desc: "Coaching intensif pour l'entretien individuel de motivation et de personnalité." }
    ],
    features: [
      "Entraînement intensif sur la plateforme officielle du concours",
      "Simulations d'entretiens oraux devant des jurys blancs",
      "Fiches d'actualité pour l'épreuve d'Enjeux Contemporains",
      "Méthode pas-à-pas pour l'analyse de dossiers documentaires"
    ],
    ctaText: "Optimisez vos chances de réussite avec nos oraux blancs.",
    schools: "ESSEC BBA, EM Lyon BBA, CESEM NEOMA, KEDGE, IPAG, PSB...",
    flag: "🇫🇷",
    logo: sesameLogo
  },
  'gre': {
    name: "GRE",
    fullName: "Graduate Record Examinations",
    tagline: "Le test requis pour les admissions en Master et Doctorat dans les universités anglo-saxonnes prestigieuses.",
    bgImage: "https://images.unsplash.com/photo-1501504905252-473c47e087f8?auto=format&fit=crop&w=1600&q=80",
    overview: "Le GRE est largement utilisé par les départements universitaires aux États-Unis et au Canada. Notre programme vous prépare aux exigences rigoureuses du test en rédaction analytique, raisonnement verbal et quantitatif.",
    details: [
      { title: "Quantitative Reasoning", desc: "Arithmétique, algèbre, géométrie et analyse de données de niveau universitaire." },
      { title: "Verbal Reasoning", desc: "Raisonnement sur textes complexes, complétion de textes et équivalences de phrases." },
      { title: "Analytical Writing", desc: "Rédaction d'essais argumentés évaluant l'analyse critique d'un problème ou d'un argument." }
    ],
    features: [
      "Simulations d'examens complets chronométrés",
      "Méthodologie pour structurer des essais d'écriture analytique",
      "Extension et renforcement du vocabulaire académique difficile",
      "Stratégies de gestion du temps adaptées au format du test"
    ],
    ctaText: "Préparez le GRE avec notre programme sur mesure.",
    schools: "MIT, Stanford, McGill, Oxford, Cambridge, ETH Zurich...",
    flag: "🌐",
    logo: greLogo
  },
  'act': {
    name: "ACT",
    fullName: "American College Testing",
    tagline: "L'alternative de choix au SAT pour votre admission dans l'enseignement supérieur américain.",
    bgImage: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?auto=format&fit=crop&w=1600&q=80",
    overview: "Le test ACT évalue vos compétences en anglais, mathématiques, lecture et sciences. Notre préparation vous aide à gérer le rythme extrêmement rapide de l'épreuve et à exceller dans la section Science.",
    details: [
      { title: "English & Reading", desc: "Grammaire, structure de phrases et vitesse de lecture critique de textes divers." },
      { title: "Mathematics & Science", desc: "Algèbre, géométrie, trigonométrie et analyse logique de graphiques scientifiques." },
      { title: "Écriture (Optionnel)", desc: "Rédaction d'un essai argumenté structuré évaluant vos compétences analytiques." }
    ],
    features: [
      "Techniques exclusives pour la section Science (lecture rapide de données)",
      "Entraînement intensif sur la rapidité d'exécution (time pressure)",
      "Diagnostics réguliers avec identification des lacunes par section",
      "Accès à des ressources d'entraînement officielles de l'ACT"
    ],
    ctaText: "Gagnez en rapidité et décrochez un score exceptionnel.",
    schools: "UCLA, NYU, University of Michigan, Yale, Princeton...",
    flag: "🇺🇸",
    logo: actLogo
  },
  'tage-mage': {
    name: "TAGE MAGE",
    fullName: "Test d'Aptitude à la Gestion",
    tagline: "Le test incontournable pour intégrer les Grandes Écoles de Commerce françaises en admission parallèle.",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    overview: "Le TAGE MAGE évalue les aptitudes verbales, de calcul et de raisonnement. Avec son système de pénalité pour les mauvaises réponses, notre méthode vous enseigne les techniques de scoring sécurisé.",
    details: [
      { title: "Aptitudes Mathématiques", desc: "Calcul mental rapide, résolution d'équations, logique numérique et arithmétique de base." },
      { title: "Aptitudes Verbales", desc: "Compréhension de textes, synonymes, antonymes et logique linguistique." },
      { title: "Raisonnement Logique", desc: "Problèmes de logique spatiale, séries de chiffres et lettres, et raisonnement critique." }
    ],
    features: [
      "Exercices d'entraînement chronométrés par sous-test",
      "Méthode d'élimination de réponses et gestion des points négatifs",
      "Calcul mental rapide sans brouillon (techniques de raccourcis)",
      "Accès à plus de 10 tests blancs complets récents"
    ],
    ctaText: "Multipliez vos chances de score supérieur à 350+.",
    schools: "HEC, ESSEC, ESCP, IAE Paris, EM Lyon, EDHEC...",
    flag: "🇫🇷",
    logo: tageMageLogo
  },
  'commerce': {
    name: "Commerce",
    fullName: "ENCG / ISCAE (TAFEM)",
    tagline: "Intégrez l'ISCAE ou le réseau des ENCG Maroc grâce à une préparation d'élite adaptée aux épreuves d'accès.",
    bgImage: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&w=1600&q=80",
    overview: "Le TAFEM (pour l'ENCG) et le concours de l'ISCAE exigent des connaissances solides en logique, actualité, anglais et français. Notre préparation intensive couvre toutes les épreuves de sélection écrites et orales.",
    details: [
      { title: "TAFEM (ENCG)", desc: "Logique mathématique, tests psychotechniques, culture générale, français et anglais commercial." },
      { title: "Concours ISCAE", desc: "Épreuves de mathématiques, d'anglais et d'actualité économique, suivies de l'entretien individuel." },
      { title: "Entretien Oral", desc: "Ateliers d'expression orale, de pitch de motivation et de prise de parole pour convaincre le jury." }
    ],
    features: [
      "Simulation de l'examen blanc TAFEM en conditions réelles",
      "Préparation approfondie à l'actualité économique et politique marocaine",
      "Techniques de résolution rapide pour les tests de logique",
      "Jury d'oral blanc composé de professionnels et d'enseignants experts"
    ],
    ctaText: "Rejoignez le programme de référence pour les grandes écoles marocaines.",
    schools: "ISCAE (Casablanca & Rabat), Réseau ENCG (12 écoles au Maroc)",
    icon: "commerce"
  },
  'medecine-pharmacie': {
    name: "Médecine & Pharmacie",
    fullName: "FMP / FMD / FMPM / FMPR",
    tagline: "Réussissez le concours commun d'accès aux facultés de Médecine, Pharmacie et Dentaire du Maroc.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=1600&q=80",
    overview: "Le concours de médecine évalue les candidats à travers des QCM de SVT, Physique-Chimie et Mathématiques. Notre préparation intensive vous offre des techniques de résolution rapide et des révisions complètes.",
    details: [
      { title: "Sciences de la Vie et de la Terre", desc: "Génétique, immunologie, information génétique, métabolisme de l'ATP et géologie." },
      { title: "Physique & Chimie", desc: "Ondes, radioactivité, mécanique, électricité, réactions acido-basiques et cinétique." },
      { title: "Mathématiques", desc: "Limites, suites, intégrales, nombres complexes, probabilités et géométrie spatiale." }
    ],
    features: [
      "Banques de QCM corrigés couvrant les 20 dernières années",
      "Stratégies d'élimination de réponses et gestion du temps (1h30)",
      "Simulations réelles du concours avec classement national de nos étudiants",
      "Fiches de formules clés et résumés ultra-synthétiques"
    ],
    ctaText: "Assurez votre place dans la faculté de votre choix.",
    schools: "Facultés de Médecine, Pharmacie et Médecine Dentaire du Maroc",
    icon: "medicine"
  },
  'ingenierie': {
    name: "Ingénierie",
    fullName: "ENSA / ENSAM (Accès Direct)",
    tagline: "Intégrez les meilleures écoles d'ingénieurs publiques post-bac au Maroc.",
    bgImage: "https://images.unsplash.com/photo-1581092921461-eab62e97a780?auto=format&fit=crop&w=1600&q=80",
    overview: "Les concours d'accès aux ENSA et ENSAM nécessitent une maîtrise parfaite du programme de Mathématiques et de Physique-Chimie du Baccalauréat, avec des exercices axés sur la vitesse et l'astuce. Nous vous offrons les clés méthodologiques de la réussite.",
    details: [
      { title: "Épreuve de Mathématiques", desc: "Suites numériques, limites, calcul intégral, équations différentielles et probabilités." },
      { title: "Épreuve de Physique-Chimie", desc: "Mécanique du point, circuits électriques (RC, RL, RLC), optique et chimie organique." },
      { title: "Astuces QCM", desc: "Techniques pour trouver le résultat correct sans rédiger la démonstration complète." }
    ],
    features: [
      "Séances intensives de résolution d'annales corrigées ENSA / ENSAM",
      "Méthodes exclusives de calcul mental et estimation rapide",
      "Diagnostic des forces et faiblesses avec correction individualisée",
      "Entraînement sous chronomètre strict"
    ],
    ctaText: "Préparez votre avenir d'ingénieur avec notre accompagnement.",
    schools: "Réseau ENSA (Écoles Nationales des Sciences Appliquées), Réseau ENSAM",
    icon: "engineering"
  }
};

function NationalIcon({ type, className }) {
  switch (type) {
    case 'commerce': return <Briefcase size={18} className={className} />;
    case 'medicine': return <Stethoscope size={18} className={className} />;
    case 'engineering': return <Cog size={18} className={className} />;
    default: return <GraduationCap size={18} className={className} />;
  }
}

function ConcoursLanding() {
  const concoursInternationaux = [
    { 
      slug: "sat",
      name: "SAT", 
      logo: satLogo,
      fullName: "Scholastic Assessment Test",
      flag: "🇺🇸",
      desc: "Le test standardisé américain requis pour l'admission dans les universités aux États-Unis et de nombreux programmes internationaux.", 
      features: ["Maths & Evidence-Based Reading", "Stratégies de timing", "Simulations complètes", "Vocabulaire avancé"],
      schools: "Harvard, MIT, Stanford, Columbia..."
    },
    { 
      slug: "gmat",
      name: "GMAT", 
      logo: gmatLogo,
      fullName: "Graduate Management Admission Test",
      flag: "🌐",
      desc: "Le test de référence mondial pour les MBA et programmes de Master dans les Business Schools internationales.", 
      features: ["Quantitative Reasoning", "Verbal Reasoning", "Integrated Reasoning", "Analytical Writing"],
      schools: "HEC, INSEAD, Wharton, London Business School..."
    },
    { 
      slug: "sesame",
      name: "SESAME", 
      logo: sesameLogo,
      fullName: "Concours Écoles de Commerce",
      flag: "🇫🇷",
      desc: "Concours commun pour intégrer les grandes écoles de commerce françaises post-bac.", 
      features: ["Tests psychotechniques", "Analyse de documents", "Anglais & LV2", "Entretien de personnalité"],
      schools: "ESSEC, ESCP, EM Lyon, EDHEC..."
    },
    { 
      slug: "gre",
      name: "GRE", 
      logo: greLogo,
      fullName: "Graduate Record Examinations",
      flag: "🌐",
      desc: "Requis pour les programmes de Master et Doctorat dans les universités américaines et canadiennes.", 
      features: ["Verbal Reasoning", "Quantitative Reasoning", "Analytical Writing", "Stratégies d'examen"],
      schools: "Stanford, MIT, McGill, Oxford..."
    },
    { 
      slug: "act",
      name: "ACT", 
      logo: actLogo,
      fullName: "American College Testing",
      flag: "🇺🇸",
      desc: "Alternative au SAT, accepté par toutes les universités américaines. Préparez les 4 sections avec efficacité.", 
      features: ["English & Reading", "Maths & Science", "Writing optionnel", "Time management"],
      schools: "UCLA, NYU, University of Michigan..."
    },
    { 
      slug: "tage-mage",
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
      slug: "commerce",
      name: "Commerce", 
      fullName: "ENCG / ISCAE",
      icon: "commerce",
      desc: "Préparation au TAFEM et aux épreuves d'admission ISCAE.", 
      features: ["Tests psychotechniques", "Culture générale", "Entretien oral", "Logique"] 
    },
    { 
      slug: "medecine-pharmacie",
      name: "Médecine & Pharmacie", 
      fullName: "FMP / FMD",
      icon: "medicine",
      desc: "Préparation intensive pour les facultés de Médecine, Pharmacie et Dentaire au Maroc.", 
      features: ["Simulations réelles", "Techniques QCM", "Coaching stress", "Révisions SVT/Physique"] 
    },
    { 
      slug: "ingenierie",
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
              { src: satLogo, name: "SAT", slug: "sat" },
              { src: gmatLogo, name: "GMAT", slug: "gmat" },
              { src: sesameLogo, name: "SESAME", slug: "sesame" },
              { src: greLogo, name: "GRE", slug: "gre" },
              { src: actLogo, name: "ACT", slug: "act" },
              { src: tageMageLogo, name: "TAGE MAGE", slug: "tage-mage" }
            ].map((logo, i) => (
              <Link key={i} to={`/concours/${logo.slug}`} className="w-12 h-12 md:w-14 md:h-14 rounded-xl bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center p-2 hover:bg-white hover:scale-110 transition-all duration-300 group">
                <img src={logo.src} alt={logo.name} className="w-full h-full object-contain group-hover:scale-105 transition-transform" />
              </Link>
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
            {concoursInternationaux.map((p) => (
              <Link 
                key={p.slug} 
                to={`/concours/${p.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
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

                <div className="px-6 md:px-8 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
                    Préparation d'élite
                  </span>
                  <span className="text-[11px] font-bold text-red-600 group-hover:text-red-700 group-hover:underline flex items-center gap-1">
                    Voir les détails <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
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
            {concoursNationaux.map((p) => (
              <Link 
                key={p.slug}
                to={`/concours/${p.slug}`}
                className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
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

                <div className="px-6 md:px-8 pb-6 pt-4 border-t border-slate-50 flex items-center justify-between">
                  <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200 uppercase tracking-wider">
                    Concours Maroc
                  </span>
                  <span className="text-[11px] font-bold text-red-600 group-hover:text-red-700 group-hover:underline flex items-center gap-1">
                    Voir les détails <ArrowRight size={12} />
                  </span>
                </div>
              </Link>
            ))}
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

function ConcoursDetail() {
  const { slug } = useParams();
  const data = concoursDatabase[slug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Programme en cours d'élaboration</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu de préparation pour ce concours arrive très prochainement.</p>
        <Link to="/concours" className="text-xs text-brand-gold font-bold hover:underline uppercase">
          ← Retour à la préparation concours
        </Link>
      </div>
    );
  }

  const isNational = !data.logo;

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      {/* 1. Header Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[300px]"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('${data.bgImage}')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <Link to="/concours" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour à la préparation concours
          </Link>
          
          <div className="flex justify-center gap-2 mb-2">
            {data.logo ? (
              <div className="w-16 h-16 rounded-2xl bg-white/95 p-2 border border-white/20 flex items-center justify-center shadow-lg">
                <img src={data.logo} alt={data.name} className="w-full h-full object-contain" />
              </div>
            ) : (
              <div className="w-16 h-16 rounded-2xl bg-emerald-100 flex items-center justify-center text-emerald-600 shadow-lg border border-emerald-200">
                <NationalIcon type={data.icon} className="w-8 h-8" />
              </div>
            )}
          </div>

          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            Préparation {data.name}
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {data.fullName ? `${data.fullName} — ` : ''}{data.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Overview Section */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <ClipboardCheck size={20} className="text-brand-gold" /> Présentation de la Préparation
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                {data.overview}
              </p>
            </div>
            
            {/* Split Details Section */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 pt-6 border-t border-slate-100">
              {data.details.map((item, i) => (
                <div key={i} className="space-y-2 p-4 bg-slate-50/50 rounded-xl border border-slate-100/50">
                  <h3 className="text-xs font-black text-brand-blue uppercase tracking-wide flex items-center gap-1.5">
                    <Zap size={12} className="text-brand-gold" /> {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Features Section */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2 mb-8">
              <Star size={20} className="text-brand-gold" /> Les Points Forts de notre Accompagnement
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.features.map((feature, i) => (
                <div key={i} className="bg-slate-50 p-4 rounded-2xl border border-slate-100 flex items-center gap-3 hover:bg-slate-100/50 transition-colors">
                  <CheckCircle2 size={16} className={isNational ? "text-emerald-500 shrink-0" : "text-blue-500 shrink-0"} />
                  <span className="text-xs font-bold text-slate-700">{feature}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Sidebar */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-6">
            <div className="space-y-2">
              <h3 className="font-black text-lg uppercase tracking-wide text-brand-gold">Informations Utiles</h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">Programmez dès aujourd'hui votre réussite.</p>
            </div>
            
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Globe size={18} className="text-brand-gold shrink-0" />
                <span className="text-[11px] font-bold">Options : En présentiel ou hybride</span>
              </div>
              <div className="flex items-center gap-3">
                <Users size={18} className="text-brand-gold shrink-0" />
                <span className="text-[11px] font-bold">Groupes restreints & Suivi sur-mesure</span>
              </div>
              {data.schools && (
                <div className="flex items-start gap-3">
                  <GraduationCap size={18} className="text-brand-gold shrink-0 mt-0.5" />
                  <span className="text-[11px] font-bold leading-normal">Écoles cibles : <br /><span className="text-slate-200 font-medium">{data.schools}</span></span>
                </div>
              )}
            </div>

            <Link to="/contact" className="block w-full bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all shadow-md">
              S'inscrire Maintenant
            </Link>
            
            <div className="text-[10px] text-center text-slate-400 font-medium pt-2 border-t border-white/10">
              Besoin de conseil d'orientation ? <br />
              <a href="tel:0645212800" className="text-white font-black text-xs hover:underline block mt-1">06 45 21 28 00</a>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}

export default function ConcoursPage() {
  const { slug } = useParams();
  if (slug) return <ConcoursDetail />;
  return <ConcoursLanding />;
}
