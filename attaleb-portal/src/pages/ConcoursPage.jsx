import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { BookOpen, Award, CheckCircle2, GraduationCap, Calendar, FileText, Zap } from 'lucide-react';

const concoursDatabase = {
  medecine: {
    name: "Concours Médecine (FMP/FMD)",
    tagline: "Préparez votre accès aux facultés de Médecine, Pharmacie et Médecine Dentaire avec une méthodologie d'élite.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=1600&q=80",
    overview: "Le concours d'accès aux facultés de médecine est l'un des plus sélectifs au Maroc. Une préparation rigoureuse et précoce est indispensable pour maîtriser les épreuves de SVT, Physique-Chimie et Mathématiques.",
    details: [
      { title: "Matières au Concours", desc: "Épreuves de Mathématiques, Physique, Chimie et SVT (Sciences de la Vie et de la Terre)." },
      { title: "Structure du Concours", desc: "Utilisation du système QCM (Questions à Choix Multiples) avec des contraintes de temps strictes." },
      { title: "Seuils de présélection", desc: "Calculés sur la base de 75% du National et 25% du Régional. Attaleb.ma vous aide à analyser vos chances." }
    ],
    features: [
      "Simulations de concours réels (Examens blancs)",
      "Astuces de résolution rapide (QCM Techniques)",
      "Révisions intensives des programmes du BAC",
      "Coaching mental et gestion du stress"
    ],
    ctaText: "Rejoignez notre programme de préparation intensive pour garantir votre place."
  },
  ingenierie: {
    name: "Concours Ingénierie (ENSA/ENSAM)",
    tagline: "Accédez aux grandes écoles d'ingénieurs (ENSA, ENSAM, ENAM) grâce à nos préparations ciblées.",
    bgImage: "https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&fit=crop&w=1600&q=80",
    overview: "Les écoles d'ingénieurs au Maroc offrent des formations d'excellence. Le concours d'entrée (TAFEMA pour l'ENSA) nécessite une maîtrise approfondie des mathématiques et de la physique.",
    details: [
      { title: "ENSA (Écoles Nationales des Sciences Appliquées)", desc: "Réseau de 11 écoles à travers le Maroc, accès via le concours national commun." },
      { title: "ENSAM (Écoles Nationales Supérieures d'Arts et Métiers)", desc: "Formation d'ingénieurs d'état pluridisciplinaires, forte dimension technologique." },
      { title: "Matières Clés", desc: "Focus intensif sur l'Analyse, l'Algèbre, la Mécanique et l'Électricité." }
    ],
    features: [
      "Traitement des annales des 10 dernières années",
      "Méthodes de calcul mental rapide",
      "Support de cours synthétisés et fiches techniques",
      "Encadrement par des professeurs agrégés"
    ],
    ctaText: "Maximisez vos scores aux épreuves de mathématiques avec nos experts."
  },
  commerce: {
    name: "Concours Commerce (ENCG/ISCAE)",
    tagline: "Préparez le TAFEM et les épreuves de l'ISCAE pour intégrer les meilleures écoles de management.",
    bgImage: "https://images.unsplash.com/photo-1454165833762-02c91834923e?auto=format&fit=crop&w=1600&q=80",
    overview: "L'intégration de l'ENCG ou de l'ISCAE demande des compétences variées : culture générale, logique, mathématiques financières et maîtrise des langues.",
    details: [
      { title: "TAFEM (Test d'Aptitude à la Formation En Management)", desc: "Passage obligé pour l'ENCG, évaluant la mémorisation, la logique et le calcul." },
      { title: "Concours ISCAE", desc: "Procédure spécifique incluant épreuves écrites et entretiens oraux de personnalité." },
      { title: "Logique & Mathématiques", desc: "Préparation intensive aux tests psychotechniques et de logique numérique." }
    ],
    features: [
      "Ateliers de Culture Générale et Actualité",
      "Préparation aux Épreuves de Langues (Français/Anglais)",
      "Tests de Logique et Aptitudes Numériques",
      "Simulations d'Entretiens de Motivation"
    ],
    ctaText: "Développez votre leadership et réussissez vos épreuves d'accès."
  },
  cpge: {
    name: "Classes Préparatoires (CPGE)",
    tagline: "Anticipez le rythme des classes prépa et assurez votre passage vers les Grandes Écoles Françaises et Marocaines.",
    bgImage: "https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80",
    overview: "Les prépas (MPSI, PCSI, ECT) sont réputées pour leur intensité. Attaleb.ma accompagne les étudiants pour acquérir les méthodes de travail et les bases solides nécessaires.",
    details: [
      { title: "MPSI / PCSI / TSI", desc: "Filières scientifiques menant aux concours des écoles d'ingénieurs (CNC, Mines-Ponts, Centrale)." },
      { title: "ECT / ECS", desc: "Filières économiques menant aux grandes écoles de commerce (HEC, ESSEC, ENCG)." },
      { title: "Soutien et Méthodologie", desc: "Apprentissage de la gestion du temps et des techniques de démonstration rigoureuses." }
    ],
    features: [
      "Cours de transition Terminale → Prépa",
      "Consolidation des acquis scientifiques",
      "Méthodologie de travail intensive",
      "Accompagnement personnalisé en Mathématiques et Physique"
    ],
    ctaText: "Préparez votre réussite en CPGE dès maintenant."
  },
  amu: {
    name: "Aix-Marseille Université (AMU)",
    tagline: "Préparez votre admission à l'une des plus grandes universités de France avec un dossier d'excellence.",
    bgImage: "https://images.unsplash.com/photo-1559135197-8a45ea74d533?auto=format&fit=crop&w=1600&q=80",
    overview: "Aix-Marseille Université (AMU) est une destination d'élite pour les étudiants marocains, particulièrement dans les domaines de la santé, des sciences et du droit. Nous vous accompagnons pour maximiser vos chances d'acceptation.",
    details: [
      { title: "Admission PASS / LAS", desc: "Comprendre le système d'accès aux études de santé (Médecine, Maïeutique, Odontologie, Pharmacie)." },
      { title: "Dossier Académique", desc: "Accompagnement pour la rédaction de lettres de motivation percutantes et la mise en valeur des relevés de notes." },
      { title: "Procédure Campus France", desc: "Suivi rigoureux du calendrier spécifique pour les candidatures AMU via la plateforme Études en France." }
    ],
    features: [
      "Ateliers de rédaction de projet professionnel",
      "Conseils stratégiques sur le choix des licences",
      "Préparation aux entretiens éventuels",
      "Support pour les démarches administratives"
    ],
    ctaText: "Anticipez votre départ pour Marseille avec nos conseillers experts."
  }
};

export default function ConcoursPage() {
  const { slug } = useParams();
  const data = concoursDatabase[slug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Page en cours de déploiement</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu pour ce concours arrive très prochainement.</p>
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
                <Zap size={20} className="text-brand-gold" /> Présentation du Concours
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
                  <p className="text-[11px] text-slate-500 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white p-6 md:p-10 rounded-3xl shadow-sm border border-slate-100">
            <h2 className="text-xl font-black text-brand-blue uppercase tracking-tight flex items-center gap-2 mb-8">
              <CheckCircle2 size={20} className="text-brand-gold" /> Notre Programme de Préparation
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
                Inscriptions Ouvertes
              </h3>
              <p className="text-xs text-slate-300 leading-relaxed font-light">
                {data.ctaText}
              </p>
            </div>

            <div className="space-y-4 pt-4 border-t border-white/10">
              <div className="flex items-center gap-3">
                <Calendar size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Sessions hebdomadaires</span>
              </div>
              <div className="flex items-center gap-3">
                <BookOpen size={18} className="text-brand-gold" />
                <span className="text-[11px] font-bold">Supports digitaux inclus</span>
              </div>
            </div>

            <Link to="/contact" className="block w-full bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-center py-4 rounded-xl font-black text-xs uppercase tracking-widest transition-all">
              Réserver ma place
            </Link>
            
            <p className="text-[10px] text-center text-slate-400 font-medium">
              Ou contactez-nous directement au <br />
              <span className="text-white font-black text-xs">06 45 21 28 00</span>
            </p>
          </div>
        </div>

      </main>
    </div>
  );
}
