import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, GraduationCap, ClipboardCheck, Users, Brain } from 'lucide-react';

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

export default function SoutienPage() {
  const { slug } = useParams();
  const data = soutienDatabase[slug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Programme en cours d'élaboration</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu pour ce niveau de soutien arrive très prochainement.</p>
        <Link to="/" className="text-xs text-brand-gold font-bold hover:underline uppercase">
          ← Retour à l'accueil
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
          <Link to="/" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour à l'accueil
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
        
        {/* Left Column: Details */}
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
                  <h3 className="text-xs font-black text-brand-blue uppercase tracking-wide">
                    {item.title}
                  </h3>
                  <p className="text-[11px] text-slate-500 leading-relaxed font-medium">
                    {item.desc}
                  </p>
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

        {/* Right Column: CTA */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-brand-blue text-white p-8 rounded-3xl shadow-xl space-y-6 sticky top-6">
            <div className="space-y-2">
              <h3 className="font-black text-lg uppercase tracking-wide text-brand-gold">
                Inscriptions Annuelles
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {data.ctaText}
              </p>
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
