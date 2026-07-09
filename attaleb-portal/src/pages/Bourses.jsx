import React from 'react';
import { Link } from 'react-router-dom';
import { Award, Globe, FileText, CheckCircle2, ArrowRight, Target, Clock, MapPin, Star, BookOpen, Users, Sparkles } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import fulbrightLogo from '../assets/Fulbright-bourse.png';
import cheveningLogo from '../assets/cheveningLogo.png';
import vanierLogo from '../assets/vanierLogo.jpg';
import usaLogo from '../assets/usaLogo.png';
import pearsonLogo from '../assets/pearsonLogo.png';

const bourses = [
  {
    id: 'fulbright',
    name: 'Fulbright',
    logo: fulbrightLogo,
    country: 'États-Unis',
    flag: '🇺🇸',
    color: 'from-blue-600 to-red-600',
    iconBg: 'bg-blue-50',
    iconColor: 'text-blue-600',
    tagline: 'Le programme de bourses le plus prestigieux au monde pour étudier aux USA.',
    desc: 'Le programme Fulbright, financé par le gouvernement américain, offre des bourses complètes pour les étudiants internationaux souhaitant poursuivre un Master ou un Doctorat aux États-Unis. C\'est la référence mondiale en matière de bourses d\'excellence.',
    eligibility: [
      'Licence ou Master obtenu avec mention',
      'Maîtrise de l\'anglais (TOEFL/IELTS)',
      'Projet d\'études clair et cohérent',
      'Engagement à retourner au Maroc après les études'
    ],
    coverage: [
      'Frais de scolarité complets',
      'Allocation mensuelle (~$2,000/mois)',
      'Billet d\'avion aller-retour',
      'Assurance santé incluse'
    ],
    deadline: 'Octobre - Décembre',
    duration: '1 à 2 ans',
    icon: <Award size={20} />
  },
  {
    id: 'chevening',
    name: 'Chevening',
    logo: cheveningLogo,
    country: 'Royaume-Uni',
    flag: '🇬🇧',
    color: 'from-red-600 to-amber-500',
    iconBg: 'bg-rose-50',
    iconColor: 'text-rose-600',
    tagline: 'La bourse d\'élite du gouvernement britannique pour les futurs leaders.',
    desc: 'Chevening est le programme mondial de bourses du gouvernement britannique destiné aux futurs leaders. Il finance un Master d\'un an dans n\'importe quelle université britannique, y compris Oxford, Cambridge et les Russell Group.',
    eligibility: [
      'Au moins 2 ans d\'expérience professionnelle',
      'Licence avec de bons résultats',
      'Anglais courant (IELTS 6.5+)',
      'Qualités de leadership démontrées'
    ],
    coverage: [
      'Frais de scolarité complets (MBA inclus)',
      'Allocation mensuelle (~£1,400/mois)',
      'Billets d\'avion aller-retour',
      'Frais de visa et assurance'
    ],
    deadline: 'Août - Novembre',
    duration: '1 an (Master)',
    icon: <Star size={20} />
  },
  {
    id: 'vanier',
    name: 'Vanier CGS',
    logo: vanierLogo,
    country: 'Canada',
    flag: '🇨🇦',
    color: 'from-red-600 to-red-800',
    iconBg: 'bg-red-50',
    iconColor: 'text-red-600',
    tagline: 'La bourse de doctorat la plus prestigieuse du Canada — 50 000$/an.',
    desc: 'Les Bourses d\'études supérieures du Canada Vanier (Vanier CGS) sont destinées aux étudiants exceptionnels poursuivant un doctorat au Canada. Avec 50 000$ CAD par an pendant 3 ans, c\'est l\'une des bourses les plus généreuses au monde.',
    eligibility: [
      'Master avec moyenne exceptionnelle',
      'Publications ou projets de recherche',
      'Lettres de recommandation académiques',
      'Admission dans un programme doctoral canadien'
    ],
    coverage: [
      '50 000$ CAD par an pendant 3 ans',
      'Frais de recherche supplémentaires',
      'Prestige académique international',
      'Réseau de chercheurs d\'élite'
    ],
    deadline: 'Juillet - Novembre',
    duration: '3 ans (Doctorat)',
    icon: <Sparkles size={20} />
  },
  {
    id: 'usa-scholarship',
    name: 'USA Scholarships',
    logo: usaLogo,
    country: 'États-Unis',
    flag: '🇺🇸',
    color: 'from-indigo-600 to-blue-800',
    iconBg: 'bg-indigo-50',
    iconColor: 'text-indigo-600',
    tagline: 'Bourses universitaires américaines — Merit-based, Need-based et Athletic.',
    desc: 'Les universités américaines offrent de nombreuses bourses : Merit-based (excellence académique), Need-based (aide financière), Athletic (sport de haut niveau) et Diversity (diversité internationale). Certaines couvrent jusqu\'à 100% des frais.',
    eligibility: [
      'Excellents résultats scolaires (GPA 3.5+)',
      'Scores SAT/ACT/TOEFL compétitifs',
      'Activités extrascolaires valorisées',
      'Lettres de recommandation solides'
    ],
    coverage: [
      'De 25% à 100% des tuition fees',
      'Aide au logement possible',
      'Bourses sportives (NCAA Div. I & II)',
      'Assistantships (RA/TA) en Master'
    ],
    deadline: 'Novembre - Février',
    duration: 'Variable (1 à 4 ans)',
    icon: <BookOpen size={20} />
  },
  {
    id: 'pearson-canada',
    name: 'Pearson International',
    logo: pearsonLogo,
    country: 'Canada',
    flag: '🇨🇦',
    color: 'from-emerald-600 to-teal-700',
    iconBg: 'bg-emerald-50',
    iconColor: 'text-emerald-600',
    tagline: 'Bourse complète de l\'Université de Toronto pour les étudiants internationaux exceptionnels.',
    desc: 'Le Pearson International Scholarship est la bourse la plus prestigieuse de l\'Université de Toronto. Elle couvre l\'intégralité des frais pour les étudiants internationaux exceptionnels admis en Licence. Seulement ~37 bourses par an.',
    eligibility: [
      'Dossier scolaire exceptionnel (Bac avec mention)',
      'Leadership et engagement communautaire',
      'Admission à l\'Université de Toronto',
      'Candidature séparée pour la bourse'
    ],
    coverage: [
      'Frais de scolarité complets (4 ans)',
      'Résidence et repas inclus',
      'Livres et fournitures (~$5,000/an)',
      'Allocation de recherche'
    ],
    deadline: 'Décembre - Janvier',
    duration: '4 ans (Licence)',
    icon: <Globe size={20} />
  }
];

// ═══════════════════════════════════════
export default function Bourses() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">

      <Helmet>
            <title>Bourses d'Études Internationales | Attaleb</title>
              <meta name="description" content="Découvrez les meilleures bourses d'études internationales pour les étudiants marocains. Accompagnement personnalisé par Attaleb." />
            </Helmet>

      {/* ─── HERO ─── */}
      <section className="relative bg-brand-blue overflow-hidden">
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-gold/5 rounded-full" />
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-20 text-center relative z-10">
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-gold text-[10px] font-black uppercase tracking-widest px-5 py-2 rounded-full mb-6">
            <Award size={14} />
            Bourses Internationales
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight">
            Étudiez à l'étranger <br /><span className="text-brand-gold">gratuitement</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-300 max-w-2xl mx-auto mt-4 font-medium leading-relaxed">
            Fulbright, Chevening, Vanier, Pearson — Attaleb vous accompagne dans la candidature aux bourses les plus prestigieuses du monde.
          </p>

          {/* Bourse Logos Strip */}
          <div className="flex flex-wrap justify-center items-center gap-5 md:gap-8 mt-8">
            {bourses.map((bourse) => (
              <a key={bourse.id} href={`#${bourse.id}`} className="flex flex-col items-center gap-2 group">
                <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-white/90 backdrop-blur-sm border border-white/40 flex items-center justify-center p-3 group-hover:bg-white group-hover:scale-110 transition-all duration-300">
                  <img src={bourse.logo} alt={bourse.name} className="w-full h-full object-contain" />
                </div>
                <span className="text-[9px] font-bold text-white/60 group-hover:text-brand-gold transition-colors uppercase tracking-wider text-center">{bourse.name}</span>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* ─── STATS ─── */}
      <section className="bg-white py-5 border-b border-slate-100">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          {[
            { val: "5", label: "Bourses Majeures" },
            { val: "100%", label: "Frais Couverts" },
            { val: "3", label: "Pays Cibles" },
            { val: "15+", label: "Boursiers Attaleb" }
          ].map((s, i) => (
            <div key={i}>
              <div className="text-xl font-black text-brand-gold">{s.val}</div>
              <div className="text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* ─── BOURSES LIST ─── */}
      <main className="max-w-6xl mx-auto px-4 py-16 space-y-10">

        {bourses.map((b, idx) => (
          <section key={b.id} id={b.id} className="scroll-mt-20">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-md transition-shadow duration-300">
              {/* Top gradient bar */}
              <div className={`h-1.5 bg-gradient-to-r ${b.color}`} />

              <div className="p-6 md:p-10">
                {/* Header */}
                <div className="flex flex-wrap items-start gap-4 mb-6">
                  <div className="w-14 h-14 rounded-2xl bg-white border border-slate-100 flex items-center justify-center shrink-0 p-1.5 shadow-sm overflow-hidden">
                    <img src={b.logo} alt={b.name} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 flex-wrap">
                      <span className="text-2xl">{b.flag}</span>
                      <h2 className="text-xl md:text-2xl font-black text-brand-blue uppercase tracking-wide">{b.name}</h2>
                      <span className="text-[10px] font-bold text-slate-400 bg-slate-50 px-3 py-1 rounded-full border border-slate-200 uppercase">
                        {b.country}
                      </span>
                    </div>
                    <p className="text-xs text-slate-500 mt-1 leading-relaxed">{b.tagline}</p>
                  </div>
                  {/* Number badge */}
                  <div className="w-10 h-10 rounded-full bg-brand-blue text-brand-gold flex items-center justify-center font-black text-sm shrink-0">
                    {idx + 1}
                  </div>
                </div>

                {/* Description */}
                <p className="text-xs md:text-sm text-slate-600 leading-relaxed mb-8">{b.desc}</p>

                {/* Grid: Eligibility + Coverage */}
                <div className="grid md:grid-cols-2 gap-6 mb-8">
                  {/* Eligibility */}
                  <div className="bg-slate-50 rounded-2xl p-5 border border-slate-100">
                    <h3 className="text-xs font-black text-brand-blue uppercase tracking-wide mb-4 flex items-center gap-2">
                      <Target size={14} className="text-brand-gold" /> Conditions d'Éligibilité
                    </h3>
                    <ul className="space-y-2.5">
                      {b.eligibility.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-600">
                          <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                          <span className="leading-relaxed">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Coverage */}
                  <div className="bg-amber-50 rounded-2xl p-5 border border-amber-100">
                    <h3 className="text-xs font-black text-brand-blue uppercase tracking-wide mb-4 flex items-center gap-2">
                      <Award size={14} className="text-brand-gold" /> Ce Qui Est Couvert
                    </h3>
                    <ul className="space-y-2.5">
                      {b.coverage.map((item, i) => (
                        <li key={i} className="flex items-start gap-2 text-xs text-slate-700">
                          <Star size={14} className="text-amber-500 shrink-0 mt-0.5" fill="currentColor" />
                          <span className="leading-relaxed font-medium">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>

                {/* Footer: Deadline + Duration + CTA */}
                <div className="flex flex-wrap items-center gap-3 pt-4 border-t border-slate-100">
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                    <Clock size={11} className="text-brand-gold" /> Deadline : {b.deadline}
                  </div>
                  <div className="flex items-center gap-1.5 text-[10px] font-bold text-slate-500 bg-slate-50 px-3 py-1.5 rounded-full border border-slate-200">
                    <FileText size={11} className="text-brand-gold" /> Durée : {b.duration}
                  </div>
                  <div className="ml-auto">
                    <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-black text-white bg-red-600 border-2 border-red-600 rounded-full px-4 py-2 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 transition-all duration-300 uppercase tracking-wider group">
                      Postuler avec Attaleb <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </section>
        ))}


      </main>

      {/* ─── CTA ─── */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">
            Candidature <span className="text-red-600">gratuite</span>
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
