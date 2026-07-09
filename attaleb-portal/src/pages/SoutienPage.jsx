import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, GraduationCap, ClipboardCheck, Users, Brain, ArrowRight, Target, Star, LineChart, Dna, Beaker, Calculator } from 'lucide-react';
import soutienHero from '../assets/soutien-hero.png';
import soutienCta from '../assets/soutien-cta.png';
import officeTutoring from '../assets/office-tutoring.png';
import classroomTeacher from '../assets/classroom-teacher.png';
import { Helmet } from 'react-helmet-async';

const soutienDatabase = {
  'lycee-marocain': {
    name: "Soutien Lycée (Bac Marocain)",
    tagline: "Assurez votre mention au Baccalauréat avec nos cours de soutien d'excellence en Mathématiques, PC, Anglais et SVT.",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    overview: "Le programme du Bac Marocain demande une grande rigueur. Nos cours de soutien se concentrent sur la compréhension profonde des concepts et la maîtrise des méthodes de résolution pour exceller aux examens nationaux.",
    details: [
      { title: "Préparation aux Examens", desc: "Entraînement intensif dès le début de l'année sur les annales des examens nationaux et régionaux." },
      { title: "Suivi Continu", desc: "Contrôles continus blancs et rapports de progression réguliers envoyés aux parents." }
    ],
    subjects: [
      { name: "Mathématiques", icon: "function", desc: "Algèbre, analyse, géométrie et probabilités pour toutes les branches scientifiques." },
      { name: "Physique-Chimie", icon: "flask", desc: "Ondes, mécanique, électricité, réactions chimiques et cinétique." },
      { name: "Anglais", icon: "book-open", desc: "Communication écrite et orale, grammaire et vocabulaire." },
      { name: "Sciences de la Vie et de la Terre (SVT)", icon: "dna", desc: "Génétique, immunologie, géologie et biologie cellulaire." }
    ],
    features: [
      "Groupes réduits pour un encadrement optimal",
      "Résumé de cours et fiches de méthodes",
      "Séances d'exercices d'application progressifs",
      "Assistance aux devoirs et préparation aux contrôles"
    ],
    ctaText: "Rejoignez nos cours pour transformer vos résultats scolaires."
  },
  'mission-francaise': {
    name: "Soutien Mission (Mission Française)",
    tagline: "Accompagnement sur mesure pour les élèves des lycées français (AEFE/OSUI) de la 3ème à la Terminale.",
    bgImage: "https://images.unsplash.com/photo-1544377193-33dcf4d68fb5?auto=format&fit=crop&w=1600&q=80",
    overview: "Les élèves du système français font face à des exigences spécifiques (méthodologie, analyse critique). Nos enseignants experts du système français apportent le soutien nécessaire pour réussir le Brevet et le Baccalauréat français.",
    details: [
      { title: "Brevet & Bac Français", desc: "Préparation spécifique aux épreuves écrites et orales du système français (Spécialités Math, PC, SES, etc.)." },
      { title: "Méthodologie AEFE", desc: "Focus sur la rédaction, l'analyse de documents et la rigueur scientifique propre au système français." },
      { title: "Coaching Personnalisé", desc: "Aide à l'organisation du travail personnel et à la gestion de la charge de travail du lycée." }
    ],
    subjects: [
      { name: "Mathématiques", icon: "function", desc: "Enseignement de spécialité et tronc commun, préparation au Baccalauréat français." },
      { name: "Physique-Chimie", icon: "flask", desc: "Programmes AEFE de spécialité, travaux pratiques et méthodologie de rédaction." },
      { name: "Sciences de la Vie et de la Terre (SVT)", icon: "dna", desc: "Biologie, géologie et préparation à l'épreuve écrite du Bac." },
      { name: "SES (Sciences Économiques)", icon: "line-chart", desc: "Économie, sociologie et regards croisés pour la spécialité SES." },
      { name: "Français & Philosophie", icon: "book-open", desc: "Méthodologie de la dissertation, du commentaire de texte et préparation aux oraux." }
    ],
    features: [
      "Intervenants maîtrisant parfaitement les programmes français",
      "Préparation approfondie aux épreuves de spécialité",
      "Ateliers d'écriture et de dissertation",
      "Accompagnement sur Parcoursup"
    ],
    ctaText: "Optimisez vos chances d'intégrer les CPGE ou les universités françaises."
  },
  'as-a-level': {
    name: "AS AND A LEVEL (British System)",
    tagline: "Excellence académique pour le curriculum britannique : maximisez vos scores A/A* pour les meilleures universités.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
    overview: "Le système A-Level est la référence pour l'admission aux universités prestigieuses (Oxford, Cambridge, Russell Group). Nous offrons un soutien ciblé pour maîtriser les spécificités des examens Cambridge et Edexcel.",
    details: [
      { title: "Préparation Examens", desc: "Entraînement rigoureux sur les Past Papers et maîtrise du schéma de notation (Mark Schemes)." },
      { title: "Transition AS → A2", desc: "Accompagnement continu pour maintenir un niveau d'excellence entre la première et la deuxième année." }
    ],
    subjects: [
      { name: "Mathematics", icon: "function", desc: "Pure Mathematics, Statistics, and Mechanics (Cambridge & Edexcel)." },
      { name: "Physics", icon: "flask", desc: "Mechanics, fields, waves, nuclear physics and practical exam skills." },
      { name: "Chemistry", icon: "flask", desc: "Physical, organic, and inorganic chemistry, including transition metals." },
      { name: "Biology", icon: "dna", desc: "Biochemistry, cell biology, physiology, genetics, and ecology." },
      { name: "Economics", icon: "line-chart", desc: "Microeconomics and macroeconomics, analysis of market failures and policies." }
    ],
    features: [
      "Tuteurs anglophones experts en curriculum IG/AL",
      "Focus sur les techniques d'examen spécifiques",
      "Ressources pédagogiques exclusives (Notes & Exemplars)",
      "Suivi des performances et feedback régulier"
    ],
    ctaText: "Sécurisez vos notes pour intégrer l'université de vos rêves."
  },
  'ib': {
    name: "IB (International Baccalaureate)",
    tagline: "Accompagnement expert pour le diplôme IB : maîtrisez les HL/SL et obtenez votre score 40+.",
    bgImage: "https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?auto=format&fit=crop&w=1600&q=80",
    overview: "Le Baccalauréat International est l'un des programmes les plus exigeants au monde. Notre approche méthodique couvre les 6 groupes de matières, le TOK, l'Extended Essay et le CAS pour garantir un score d'excellence.",
    details: [
      { title: "Matières HL & SL", desc: "Soutien ciblé sur les Higher Level et Standard Level avec focus sur les critères d'évaluation IB." },
      { title: "Extended Essay & TOK", desc: "Accompagnement méthodologique pour la rédaction de l'EE et la maîtrise du Theory of Knowledge." },
      { title: "Préparation Examens", desc: "Past papers, mark schemes et stratégies pour maximiser votre score final (40+)." }
    ],
    subjects: [
      { name: "Mathematics AA/AI", icon: "function", desc: "Analysis & Approaches or Applications & Interpretation (HL/SL)." },
      { name: "Physics / Chemistry", icon: "flask", desc: "Sciences expérimentales avec Internal Assessments et Paper 2/3." },
      { name: "Biology", icon: "dna", desc: "Biologie IB avec focus sur les Data-Based Questions et l'IA." },
      { name: "Economics / Business", icon: "line-chart", desc: "Économie et gestion : diagrammes, études de cas et évaluations." },
      { name: "English / Français", icon: "book-open", desc: "Language A Literature/Language & Literature, IO et Written Tasks." }
    ],
    features: [
      "Tuteurs experts certifiés IB avec expérience internationale",
      "Méthodologie spécifique pour l'Extended Essay (4000 mots)",
      "Préparation intensive aux Internal Assessments (IA)",
      "Suivi personnalisé du CAS (Creativity, Activity, Service)"
    ],
    ctaText: "Visez le score 40+ avec notre accompagnement IB sur-mesure."
  },
};

// Overview cards data
const soutienCards = [
  {
    slug: 'lycee-marocain',
    icon: '🇲🇦',
    title: 'Lycée Marocain',
    subtitle: 'Baccalauréat National',
    desc: 'Mathématiques, Physique-Chimie, SVT — préparation intensive aux examens nationaux et régionaux.',
    levels: '1ère & 2ème Bac',
    color: 'from-green-600 to-green-800'
  },
  {
    slug: 'mission-francaise',
    icon: '🇫🇷',
    title: 'Mission Française',
    subtitle: 'AEFE / OSUI',
    desc: 'Soutien pour les élèves du système français : Brevet, Bac français et préparation Parcoursup.',
    levels: '3ème → Terminale',
    color: 'from-blue-600 to-blue-800'
  },
  {
    slug: 'as-a-level',
    icon: '🇬🇧',
    title: 'AS & A Level',
    subtitle: 'British Curriculum',
    desc: 'Cambridge & Edexcel — Math, Physics, Chemistry, Biology, Economics pour scores A/A*.',
    levels: 'IG → A2',
    color: 'from-red-600 to-red-800'
  }  ,{
    slug: 'ib',
    icon: '🌍',
    title: 'IB (International Baccalaureate)',
    subtitle: 'Diplôme International',
    desc: 'Math AA/AI, Physics, Chemistry, Biology, Economics, English — score 40+ garanti.',
    levels: 'DP1 & DP2',
    color: 'from-amber-500 to-orange-600'
  }
];

// ─── LANDING PAGE (no slug) ───
function SoutienLanding() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">

      <Helmet>
            <title>Soutien Scolaire | Guide complet pour étudiants marocains | Attaleb</title>
            <meta name="description" content="Découvrez notre programme de soutien scolaire personnalisé pour les étudiants marocains, adapté à tous les niveaux et systèmes éducatifs." />
          </Helmet>
      {/* ─── HERO: Split Layout ─── */}
      <section className="relative bg-brand-blue overflow-hidden">
        {/* Decorative circles */}
        <div className="absolute -top-20 -left-20 w-64 h-64 bg-brand-gold/5 rounded-full" />
        <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-brand-gold/5 rounded-full" />

        <div className="max-w-6xl mx-auto px-4 py-12 md:py-16 grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12 items-center">
          {/* Left: Text */}
          <div className="space-y-6 text-center lg:text-left order-2 lg:order-1">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm text-brand-gold text-[10px] font-black uppercase tracking-widest px-4 py-2 rounded-full">
              <BookOpen size={14} />
              Soutien Scolaire d'Excellence
            </div>
            <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight">
              Réussissez vos <br />
              <span className="text-brand-gold">examens</span> avec <br />Attaleb
            </h1>
            <p className="text-xs md:text-sm text-slate-300 max-w-lg font-medium leading-relaxed">
              Cours de soutien personnalisés pour tous les niveaux — du lycée marocain au système britannique, en passant par la mission française.
            </p>

            {/* Mini stats row */}
            <div className="flex gap-6 justify-center lg:justify-start pt-4">
              {[
                { val: "200+", label: "Élèves" },
                { val: "95%", label: "Réussite" },
                { val: "30+", label: "Professeurs" }
              ].map((s, i) => (
                <div key={i} className="text-center">
                  <div className="text-lg font-black text-brand-gold">{s.val}</div>
                  <div className="text-[9px] text-slate-400 uppercase tracking-widest">{s.label}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Image */}
          <div className="relative order-1 lg:order-2 flex justify-center">
            {/* Glow behind image */}
            <div className="absolute inset-0 bg-brand-gold/10 rounded-3xl blur-3xl scale-90" />
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl border-2 border-white/10 ring-1 ring-brand-gold/20">
                <img
                  src={soutienHero}
                  alt="Salle de classe Attaleb — cours de soutien en action"
                  className="w-full max-w-lg h-64 md:h-80 lg:h-96 object-cover"
                />
              </div>
              {/* Floating badge top-right */}
              <div className="absolute -top-4 -right-4 bg-brand-gold text-brand-blue rounded-xl px-3 py-2 shadow-lg rotate-3">
                <div className="text-xs font-black flex items-center gap-1">
                  <Star size={12} fill="currentColor" /> Mention
                </div>
              </div>
              {/* Floating badge bottom-left */}
              <div className="absolute -bottom-3 -left-3 bg-white text-brand-blue rounded-xl px-3 py-2 shadow-lg -rotate-2">
                <div className="text-[10px] font-black flex items-center gap-1.5">
                  <GraduationCap size={14} className="text-brand-gold" /> 3 Cursus
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section id="formules" className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Programmes</span>
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">NOS FORMULES DE SOUTIEN</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
            Choisissez le programme adapté à votre cursus et découvrez notre approche pédagogique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {soutienCards.map((card) => (
            <Link
              key={card.slug}
              to={`/soutien/${card.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className={`h-2 bg-gradient-to-r ${card.color}`} />
                <div className="p-6 md:p-8 space-y-4">
                  <div className="flex items-center gap-3">
                    <span className="text-3xl">{card.icon}</span>
                    <div>
                      <h3 className="font-black text-base text-brand-blue uppercase tracking-wide">{card.title}</h3>
                      <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">{card.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">{card.desc}</p>
                </div>
              </div>
              <div className="px-6 md:px-8 pb-6 pt-4 border-t border-slate-50 flex items-center justify-end">
                <span className="inline-flex items-center gap-2 text-[11px] font-black text-white bg-red-600 border-2 border-red-600 rounded-full px-4 py-2 group-hover:bg-white group-hover:text-red-600 group-hover:border-red-600 group-hover:shadow-lg group-hover:shadow-red-200 transition-all duration-300 uppercase tracking-wider">
                  Voir les détails <ArrowRight size={12} />
                </span>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* NOS ESPACES — Image Gallery */}
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center mb-8">
          <p className="text-brand-gold text-[10px] font-black uppercase tracking-widest">Nos Espaces</p>
          <h2 className="text-xl md:text-2xl font-black text-brand-blue uppercase">Découvrez Notre Environnement d'Apprentissage</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <img src={officeTutoring} alt="Coaching individuel Attaleb" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-4">
              <p className="text-white text-xs font-black uppercase">Coaching Individuel</p>
              <p className="text-slate-300 text-[10px]">Postes de travail équipés et personnalisés</p>
            </div>
          </div>
          <div className="relative rounded-2xl overflow-hidden shadow-md group">
            <img src={classroomTeacher} alt="Cours en classe Attaleb" className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-500" />
            <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-brand-blue/90 to-transparent p-4">
              <p className="text-white text-xs font-black uppercase">Cours en Classe</p>
              <p className="text-slate-300 text-[10px]">Enseignants experts et interactifs</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 px-4 bg-white text-center">
        <div className="max-w-2xl mx-auto space-y-4">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">
            Inscrivez-vous dès <span className="text-red-600">maintenant</span>
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

// ─── DETAIL PAGE (with slug) ───
function SoutienDetail() {
  const { slug } = useParams();
  const data = soutienDatabase[slug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Programme en cours d'élaboration</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu pour ce niveau de soutien arrive très prochainement.</p>
        <Link to="/soutien" className="text-xs text-brand-gold font-bold hover:underline uppercase">
          ← Retour au soutien scolaire
        </Link>
      </div>
    );
  }

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
          <Link to="/soutien" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour au soutien scolaire
          </Link>
          <div className="flex justify-center gap-2 mb-2">
            <Brain size={24} className="text-brand-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            {data.name}
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          {/* Pedagogic Overview */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <ClipboardCheck size={20} className="text-brand-gold" /> Accompagnement Pédagogique
              </h2>
              <p className="text-xs md:text-sm text-slate-600 leading-relaxed font-normal">
                {data.overview}
              </p>
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

          {/* Subjects Taught Section */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <BookOpen size={20} className="text-brand-gold" /> Matières Enseignées
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {data.subjects.map((subj, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-2xl border border-slate-100 flex items-start gap-3 hover:bg-slate-100/50 transition-colors">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center shrink-0">
                    {subj.icon === 'function' && <Calculator size={16} />}
                    {subj.icon === 'flask' && <Beaker size={16} />}
                    {subj.icon === 'dna' && <Dna size={16} />}
                    {subj.icon === 'line-chart' && <LineChart size={16} />}
                    {subj.icon === 'book-open' && <BookOpen size={16} />}
                  </div>
                  <div className="space-y-0.5 text-left">
                    <h4 className="text-xs font-black text-brand-blue uppercase">{subj.name}</h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-medium">{subj.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Features / Method */}
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2 mb-8">
              <Users size={20} className="text-brand-gold" /> Notre Méthode de Réussite
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
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 sticky top-6 text-center">
            <h3 className="font-black text-lg uppercase tracking-wide text-brand-blue">Contactez-nous</h3>
            <a href="tel:0645212800" className="inline-flex items-center gap-2 text-sm font-black text-white bg-red-600 border-2 border-red-600 rounded-full px-8 py-3 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 transition-all duration-300 uppercase tracking-widest">
              06 45 21 28 00
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}

// ─── MAIN EXPORT ───
export default function SoutienPage() {
  const { slug } = useParams();
  if (slug) return <SoutienDetail />;
  return <SoutienLanding />;
}
