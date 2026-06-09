import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, Globe, FileText, Languages, Target, ArrowRight } from 'lucide-react';

const languesDatabase = {
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
  'ielts-toefl': {
    name: "IELTS & TOEFL (Anglais)",
    tagline: "Maîtrisez l'anglais académique pour intégrer les universités anglophones (USA, UK, Canada, Allemagne).",
    bgImage: "https://images.unsplash.com/photo-1489486501123-5c1af10d0be6?auto=format&fit=crop&w=1600&q=80",
    overview: "L'IELTS et le TOEFL sont les tests d'anglais les plus acceptés au monde. Que ce soit pour des études aux États-Unis ou des programmes en anglais en Allemagne, un score élevé est votre passeport vers l'international.",
    details: [
      { title: "IELTS (Academic)", desc: "Le test privilégié pour le Royaume-Uni, l'Australie, le Canada et l'Europe." },
      { title: "TOEFL iBT", desc: "Le test standard utilisé majoritairement par les institutions américaines." },
      { title: "Score Garanti", desc: "Nos programmes sont conçus pour vous faire atteindre les seuils requis par les meilleures institutions (Top 100 QS)." }
    ],
    features: [
      "Pratique intensive des épreuves de Speaking",
      "Rédaction de rapports académiques (Writing Task 1 & 2)",
      "Techniques de Reading pour textes complexes",
      "Vocabulaire académique et idiomes"
    ],
    ctaText: "Boostez votre score IELTS/TOEFL et ouvrez les portes du monde."
  },
  'allemand-goethe': {
    name: "Allemand (Goethe-Zertifikat)",
    tagline: "Apprenez l'allemand de A1 à B2 pour vos projets d'études ou d'insertion en Allemagne.",
    bgImage: "https://images.unsplash.com/photo-1527866959612-397447d92419?auto=format&fit=crop&w=1600&q=80",
    overview: "L'Allemagne demande une certification Goethe (B1 ou B2) pour les visas étudiants. Notre approche pédagogique privilégie l'immersion et la communication pour une progression rapide en langue allemande.",
    details: [
      { title: "Niveau B1 ZERTIFIKAT", desc: "Le minimum requis pour l'obtention du visa étudiant pour l'Allemagne." },
      { title: "Niveau B2", desc: "Niveau recommandé pour une intégration universitaire fluide et l'accès au Studienkolleg." },
      { title: "Certification Officielle", desc: "Préparation spécifique au format des épreuves du Goethe-Institut." }
    ],
    features: [
      "Cours interactifs en petits groupes",
      "Simulations d'examens officiels Goethe",
      "Focus sur la communication interculturelle",
      "Orientation sur le système d'études allemand"
    ],
    ctaText: "Commencez votre apprentissage de l'allemand avec une méthode éprouvée."
  }
};

// Overview cards data
const languesCards = [
  {
    slug: 'tcf-tef',
    icon: '🇫🇷',
    title: 'TCF / TEF',
    subtitle: 'Français Langue Étrangère',
    desc: 'Préparation intensive aux tests de français pour Campus France et immigration Canada.',
    levels: 'A1 → C2',
    color: 'from-blue-600 to-blue-800'
  },
  {
    slug: 'delf-dalf',
    icon: '🎓',
    title: 'DELF / DALF',
    subtitle: 'Diplômes Officiels à Vie',
    desc: 'Diplômes reconnus internationalement, valables à vie. B2 pour université, C1 pour filières d\'élite.',
    levels: 'B1 → C2',
    color: 'from-indigo-600 to-indigo-800'
  },
  {
    slug: 'ielts-toefl',
    icon: '🌍',
    title: 'IELTS & TOEFL',
    subtitle: 'Anglais Académique',
    desc: 'Tests d\'anglais acceptés worldwide : USA, UK, Canada, Allemagne et plus encore.',
    levels: 'Band 5.5 → 8.0',
    color: 'from-red-600 to-red-800'
  },
  {
    slug: 'allemand-goethe',
    icon: '🇩🇪',
    title: 'Allemand Goethe',
    subtitle: 'Goethe-Zertifikat',
    desc: 'Apprentissage de l\'allemand pour études et visa étudiant en Allemagne.',
    levels: 'A1 → B2',
    color: 'from-amber-600 to-amber-800'
  }
];

// ─── LANDING PAGE (no slug) ───
function LanguesLanding() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">
      {/* Hero Banner */}
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
            Préparez vos certifications linguistiques avec Attaleb — TCF, DELF, IELTS, TOEFL, Goethe — et ouvrez les portes des meilleures universités du monde.
          </p>
        </div>
      </section>

      {/* Key Figures */}
      <section className="bg-brand-blue text-white py-5 border-b border-brand-gold/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-black text-brand-gold">4</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Certifications</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">95%</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Taux de Réussite</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">500+</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Étudiants Formés</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">6</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Langues Enseignées</div>
          </div>
        </div>
      </section>

      {/* Certification Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Certifications</span>
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">NOS PROGRAMMES DE LANGUES</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
            Choisissez votre certification et découvrez notre programme de préparation sur mesure.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {languesCards.map((card) => (
            <Link
              key={card.slug}
              to={`/langues/${card.slug}`}
              className="group bg-white rounded-2xl shadow-sm border border-slate-100 overflow-hidden hover:shadow-lg hover:-translate-y-1 transition-all duration-300"
            >
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
                <div className="flex items-center justify-between pt-2">
                  <span className="text-[10px] font-bold text-brand-gold bg-amber-50 px-3 py-1 rounded-full border border-amber-200">
                    Niveaux : {card.levels}
                  </span>
                  <span className="text-[11px] font-bold text-brand-gold group-hover:underline flex items-center gap-1">
                    Voir le programme <ArrowRight size={12} />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Why Attaleb */}
      <section className="bg-white py-16 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">POURQUOI ATTALEB ?</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Target size={20} />, title: "Méthode Ciblée", desc: "Entraînement spécifique aux formats de chaque test avec des exercices types et des corrections détaillées." },
              { icon: <Globe size={20} />, title: "Intervenants Natifs", desc: "Professeurs anglophones, francophones et germanophones certifiés pour une immersion authentique." },
              { icon: <Award size={20} />, title: "Résultats Prouvés", desc: "95% de nos étudiants atteignent le score requis dès leur première tentative d'examen." },
              { icon: <BookOpen size={20} />, title: "Ressources Exclusives", desc: "Manuels, annales corrigées, laboratoires audio et plateformes en ligne inclus dans chaque programme." },
              { icon: <FileText size={20} />, title: "Examens Blancs", desc: "Simulations complètes en conditions réelles avec évaluation détaillée et plan d'amélioration." },
              { icon: <CheckCircle2 size={20} />, title: "Suivi Personnalisé", desc: "Groupes réduits et coaching individuel pour maximiser votre progression et votre confiance." }
            ].map((item, i) => (
              <div key={i} className="bg-slate-50 p-5 rounded-2xl border border-slate-100 space-y-3">
                <div className="w-10 h-10 bg-brand-blue text-brand-gold rounded-xl flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="font-black text-xs text-brand-blue uppercase tracking-wide">{item.title}</h3>
                <p className="text-[11px] text-slate-500 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

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

// ─── DETAIL PAGE (with slug) ───
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
      {/* 1. Header Banner */}
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

      {/* 2. Main Content */}
      <main className="max-w-6xl mx-auto px-4 mt-12 grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Target size={20} className="text-brand-gold" /> Objectifs de la Formation
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
              <p className="text-xs text-slate-300 leading-relaxed font-light">{data.ctaText}</p>
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
