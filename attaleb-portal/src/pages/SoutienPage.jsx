import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, GraduationCap, ClipboardCheck, Users, Brain, ArrowRight, Target, Star } from 'lucide-react';

const soutienDatabase = {
  'lycee-marocain': {
    name: "Soutien Lycée (Bac Marocain)",
    tagline: "Assurez votre mention au Baccalauréat avec nos cours de soutien d'excellence en Mathématiques, PC et SVT.",
    bgImage: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1600&q=80",
    overview: "Le programme du Bac Marocain demande une grande rigueur. Nos cours de soutien se concentrent sur la compréhension profonde des concepts et la maîtrise des méthodes de résolution pour exceller aux examens nationaux.",
    details: [
      { title: "Matières Scientifiques", desc: "Focus sur les Mathématiques, la Physique-Chimie et les Sciences de la Vie et de la Terre (SVT) pour les filières BIOF et standard." },
      { title: "Préparation aux Examens", desc: "Entraînement intensif dès le début de l'année sur les annales des examens nationaux et régionaux." },
      { title: "Suivi Continu", desc: "Contrôles continus blancs et rapports de progression réguliers envoyés aux parents." }
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
    features: [
      "Intervenants maîtrisant parfaitement les programmes français",
      "Préparation approfondie aux épreuves de spécialité",
      "Ateliers d'écriture et de dissertation",
      "Accompagnement sur Parcoursup"
    ],
    ctaText: "Optimisez vos chances d'intégrer les CPGE ou les universités françaises."
  },
  'universitaire': {
    name: "Soutien Universitaire",
    tagline: "Réussissez vos modules complexes en Faculté, Grandes Écoles ou classes préparatoires.",
    bgImage: "https://images.unsplash.com/photo-1541339907198-e08756defeec?auto=format&fit=crop&w=1600&q=80",
    overview: "Le passage du lycée à l'enseignement supérieur est un défi majeur. Nos cours de soutien universitaire aident les étudiants en économie, gestion, sciences et ingénierie à valider leurs modules avec mention.",
    details: [
      { title: "Sciences de Gestion & Éco", desc: "Comptabilité, Microéconomie, Macroéconomie, Statistiques et Mathématiques Financières." },
      { title: "Filières Ingénierie", desc: "Analyse réelle, Algèbre linéaire, Thermodynamique, Électromagnétisme et Algorithmique." },
      { title: "Préparation aux Partiels", desc: "Sessions intensives avant les périodes d'examens pour réviser les points clés du semestre." }
    ],
    features: [
      "Traitement des anciens sujets d'examens (Partiels)",
      "Clarification des concepts abstraits",
      "Aide à la résolution de TD complexes",
      "Méthodologie de travail universitaire"
    ],
    ctaText: "Ne laissez pas un module bloquer votre progression universitaire."
  },
  'as-a-level': {
    name: "AS AND A LEVEL (British System)",
    tagline: "Excellence académique pour le curriculum britannique : maximisez vos scores A/A* pour les meilleures universités.",
    bgImage: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1600&q=80",
    overview: "Le système A-Level est la référence pour l'admission aux universités prestigieuses (Oxford, Cambridge, Russell Group). Nous offrons un soutien ciblé pour maîtriser les spécificités des examens Cambridge et Edexcel.",
    details: [
      { title: "Matières Clés", desc: "Soutien intensif en Mathematics, Physics, Chemistry, Biology et Economics." },
      { title: "Préparation Examens", desc: "Entraînement rigoureux sur les Past Papers et maîtrise du schéma de notation (Mark Schemes)." },
      { title: "Transition AS → A2", desc: "Accompagnement continu pour maintenir un niveau d'excellence entre la première et la deuxième année." }
    ],
    features: [
      "Tuteurs anglophones experts en curriculum IG/AL",
      "Focus sur les techniques d'examen spécifiques",
      "Ressources pédagogiques exclusives (Notes & Exemplars)",
      "Suivi des performances et feedback régulier"
    ],
    ctaText: "Sécurisez vos notes pour intégrer l'université de vos rêves."
  }
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
    slug: 'universitaire',
    icon: '🎓',
    title: 'Soutien Universitaire',
    subtitle: 'Faculté & Grandes Écoles',
    desc: 'Modules complexes en gestion, économie, sciences et ingénierie. Préparation aux partiels.',
    levels: 'Licence & Prépa',
    color: 'from-purple-600 to-purple-800'
  },
  {
    slug: 'as-a-level',
    icon: '🇬🇧',
    title: 'AS & A Level',
    subtitle: 'British Curriculum',
    desc: 'Cambridge & Edexcel — Math, Physics, Chemistry, Biology, Economics pour scores A/A*.',
    levels: 'IG → A2',
    color: 'from-red-600 to-red-800'
  }
];

// ─── LANDING PAGE (no slug) ───
function SoutienLanding() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen antialiased">
      {/* Hero Banner */}
      <section
        className="relative bg-cover bg-center bg-no-repeat py-24 px-4 text-center flex items-center justify-center min-h-[320px]"
        style={{
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.92), rgba(11, 38, 79, 0.78)), url('https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&w=1600&q=80')`
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <div className="flex justify-center gap-2 mb-2">
            <BookOpen size={28} className="text-brand-gold" />
          </div>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            Soutien Scolaire
          </h1>
          <p className="text-xs md:text-base text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">
            Cours de soutien personnalisés pour tous les niveaux — du lycée marocain au système britannique, en passant par la mission française et l'université.
          </p>
        </div>
      </section>

      {/* Key Figures */}
      <section className="bg-brand-blue text-white py-5 border-b border-brand-gold/30">
        <div className="max-w-5xl mx-auto px-4 grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
          <div>
            <div className="text-xl font-black text-brand-gold">4</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Programmes</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">200+</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Élèves Accompagnés</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">95%</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Taux de Réussite</div>
          </div>
          <div>
            <div className="text-xl font-black text-brand-gold">30+</div>
            <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Enseignants Experts</div>
          </div>
        </div>
      </section>

      {/* Programme Cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Programmes</span>
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">NOS FORMULES DE SOUTIEN</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-lg mx-auto leading-relaxed">
            Choisissez le programme adapté à votre cursus et découvrez notre approche pédagogique.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {soutienCards.map((card) => (
            <Link
              key={card.slug}
              to={`/soutien/${card.slug}`}
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
                    {card.levels}
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

      {/* Notre Méthode */}
      <section className="bg-white py-16 px-4 border-t border-slate-100">
        <div className="max-w-5xl mx-auto">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase">NOTRE MÉTHODE</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: <Target size={20} />, title: "Diagnostic Initial", desc: "Évaluation complète du niveau de l'élève pour identifier les lacunes et définir un plan d'action personnalisé." },
              { icon: <Users size={20} />, title: "Groupes Réduits", desc: "Maximum 6 élèves par groupe pour garantir un encadrement de qualité et une attention individuelle." },
              { icon: <Brain size={20} />, title: "Pédagogie Active", desc: "Exercices progressifs, cas pratiques et mises en situation pour ancrer les connaissances en profondeur." },
              { icon: <ClipboardCheck size={20} />, title: "Suivi Régulier", desc: "Rapports de progression hebdomadaires envoyés aux parents avec notes et commentaires des enseignants." },
              { icon: <Star size={20} />, title: "Enseignants Experts", desc: "Professeurs diplômés et expérimentés, spécialisés par matière et par système éducatif." },
              { icon: <GraduationCap size={20} />, title: "Résultats Prouvés", desc: "95% de nos élèves améliorent leur moyenne de 3 à 5 points dès le premier trimestre." }
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
            Inscrivez-vous dès <span className="text-brand-gold">maintenant</span>
          </h2>
          <p className="text-xs text-slate-300 leading-relaxed">
            Places limitées — réservez votre place pour la prochaine session de soutien scolaire.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 pt-4">
            <Link to="/contact" className="bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              S'inscrire au Soutien
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
          <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-6">
            <div className="space-y-2">
              <h3 className="font-black text-lg uppercase tracking-wide text-brand-gold">
                Inscriptions Annuelles
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">{data.ctaText}</p>
            </div>
            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Supports de cours exclusifs</span>
              </div>
              <div className="flex items-center gap-3">
                <GraduationCap size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Professeurs expérimentés</span>
              </div>
            </div>
            <Link to="/contact" className="block w-full bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              S'inscrire au soutien
            </Link>
            <p className="text-[10px] text-center text-slate-400 font-medium">
              Besoin de conseils ? <br />
              <span className="text-white font-black text-xs">06 45 21 28 00</span>
            </p>
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
