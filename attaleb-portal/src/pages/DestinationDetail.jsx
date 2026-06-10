import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { Globe, Award, BookOpen, CheckCircle2, GraduationCap, Calendar, FileText } from 'lucide-react';

const detailsDatabase = {
  france: {
    name: "FRANCE",
    tagline: "La destination numéro 1 choisie par environ 38% des étudiants marocains à l'étranger.",
    bgImage: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Attaleb.ma sécurise vos chances de réussite de la préparation de votre TCF jusqu'au dépôt consulaire.",
    overview: {
      reasons: [
        { title: "Réputation internationale", text: "La France possède certaines des universités et grandes écoles les plus renommées au monde." },
        { title: "Maîtrise de la langue", text: "Le français étant la deuxième langue au Maroc, étudier en France permet d'exploiter et perfectionner ses acquis sans barrière linguistique." },
        { title: "Coût des études abordable", text: "Souvent plus accessible que dans d'autres pays européens ou aux États-Unis, en particulier au sein des établissements publics." },
        { title: "Bourses de mobilité", text: "L'ambassade de France au Maroc attribue chaque année environ 550 bourses aux bacheliers, ingénieurs et doctorants." },
        { title: "Expérience interculturelle", text: "Une ouverture d'esprit précieuse et une insertion facilitée au cœur de l'espace européen." }
      ],
      filiers: [
        { name: "Architecture", desc: "Prestige mondial avec un processus d'admission unique (le dossier n'est transmis au 2e vœu qu'après refus du 1er vœu)." },
        { name: "Ingénierie & Informatique", desc: "Des grandes écoles très respectées à l'échelle internationale pour leur excellence technique." },
        { name: "Sciences Humaines & Sociales", desc: "Programmes reconnus mondialement en Droit, Histoire, Sociologie, Philosophie et Arts." },
        { name: "Médecine & Santé", desc: "Long parcours historique de recherche. Accès via PASS/LAS ou intégration de programmes médicaux spécifiques sans concours PACES." }
      ],
      topUniversities: [
        "Paris Sciences et Lettres (PSL) Université",
        "Sorbonne Université (Paris)",
        "Institut Polytechnique de Paris",
        "Université Paris-Saclay",
        "Université Aix-Marseille",
        "Université de Bordeaux",
        "École Normale Supérieure de Lyon",
        "Université de Montpellier",
        "Université Grenoble Alpes",
        "IMT Atlantique (Brest)"
      ]
    },
    languages: {
      intro: "La construction d'un projet d'études clair est indispensable (motif principal des refus de visa). De plus, une certification de français est obligatoire pour tous les étudiants (y compris les profils Bac International BIOF).",
      tests: [
        { name: "TCF (Tout Public + EE)", price: "1 800 DH", validity: "Valable 2 ans (Simple test)", details: "Sessions disponibles de Septembre à Juillet dans plusieurs villes (Agadir, Casablanca, El Jadida, Essaouira, Fès, Kénitra, Marrakech, Meknès, Oujda, Rabat, Tanger, Tétouan)." },
        { name: "DELF (B2)", price: "500 à 1 000 DH", validity: "Valable à vie (Diplôme d'État)", details: "Idéal pour certifier définitivement votre niveau de compétence linguistique sans date d'expiration." },
        { name: "DALF (C1/C2)", price: "1 500 DH", validity: "Valable à vie (Diplôme d'État)", details: "Destiné aux niveaux avancés, fortement valorisé par les filières universitaires d'élite et de recherche." }
      ]
    },
    procedures: {
      custom: false,
      campusFrance: {
        title: "Plateforme Connectée (Campus France)",
        steps: [
          "Création du compte personnel sur la plateforme en ligne 'Études en France'.",
          "Choix de la formation parmi les catalogues d'études officiels.",
          "Préparation du dossier académique (CV, lettre de motivation, diplômes et relevés de notes).",
          "Soumission et paiement des frais de traitement de dossier à Campus France Maroc.",
          "Évaluation du dossier par les conseillers et réception de votre lettre d'admission officielle."
        ]
      },
      nonConnectees: {
        title: "Universités Non-Connectées (Représentent 40% des facultés)",
        steps: [
          "Recherche approfondie directement sur le portail de l'université choisie.",
          "Vérification rigoureuse des exigences spécifiques, critères de sélection et dates limites.",
          "Préparation et envoi d'un dossier personnalisé à chaque établissement de manière autonome.",
          "Soumission impérative avant la clôture des registres d'inscription de l'établissement."
        ]
      }
    },
    visa: {
      intro: "La demande de visa se fait en ligne sur France-Visas avec transmission numérique des pièces pour un traitement accéléré chez TLScontact.",
      requirements: [
        "Passeport en bon état (original + copie), délivré depuis moins de 10 ans, avec au moins 2 pages vierges et valide au moins 3 mois après l'expiration du visa.",
        "Deux photos d'identité récentes aux normes OACI.",
        "Lettre d'admission officielle d'un établissement d'enseignement supérieur en France.",
        "Justificatif financier obligatoire : Un garant direct au Maroc avec blocage bancaire de 85 000 DH, OU un garant indirect résidant dans l'Union Européenne capable de se substituer financièrement aux parents."
      ]
    }
  },
  allemagne: {
    name: "ALLEMAGNE",
    tagline: "L'Allemagne est une des destinations d'études les plus populaires chez les étudiants internationaux et les Marocains ne font pas exception (deuxième destination des Marocains après la France).",
    bgImage: "https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Attaleb.ma regroupe toutes les opportunités d'études et de blocages financiers pour sécuriser votre départ en Allemagne.",
    overview: {
      reasons: [
        { title: "Vie étudiante active", text: "Les universités allemandes offrent une vie étudiante dynamique en proposant des clubs de tout genre, des associations étudiantes captivantes et des événements culturels hors du commun." },
        { title: "Excellence académique", text: "Reconnues mondialement pour leur excellence académique et leurs recherches de pointe dans de nombreux domaines." },
        { title: "Frais de scolarité abordables", text: "Les étudiants internationaux bénéficient de plusieurs aides financières spécifiques ainsi que de bourses d’excellence, rendant le parcours très accessible." },
        { title: "Insertion professionnelle", text: "L'Allemagne étant un leader mondial (technologie, ingénierie...), les étudiants ont accès à des opportunités de stage et d’emploi de façon beaucoup plus simple." }
      ],
      filiers: [
        { name: "L'ingénierie", desc: "Filière d'élite regroupant l'automobile, l'aéronautique, la construction mécanique, l'énergie et la robotique." },
        { name: "La médecine", desc: "Leader mondial dans la recherche médicale : expertise reconnue en génétique, neurobiologie, oncologie et médecine régénérative." },
        { name: "L’intelligence artificielle", desc: "Pays à la pointe de la recherche en IA et en apprentissage automatique avec des centres de premier plan." },
        { name: "Les sciences de l'espace", desc: "Acteur majeur de la physique spatiale et de l'exploration planétaire, en collaboration étroite avec l'ESA et la NASA." }
      ],
      topUniversities: [
        "Technical University of Munich",
        "University of Heidelberg",
        "LMU Munich",
        "Freie Universität Berlin",
        "Humboldt University of Berlin",
        "Karlsruhe Institute of Technology",
        "Technical University of Berlin",
        "RWTH Aachen University",
        "University of Freiburg",
        "University of Tübingen"
      ]
    },
    languages: {
      intro: "Le système universitaire allemand général applique rigoureusement le schéma LMD (Licence en 3-4 ans, Master en 2 ans avec mémoire, et Doctorat axé recherche). Mais il propose aussi un cursus d'insertion professionnelle unique très recherché.",
      isGermanySystem: true,
      fachhochschule: {
        title: "La Particularité Allemande : La Fachhochschule",
        text: "Cette voie ressemble fortement aux IUT en France, dont les formations sont plus pratiques et adaptées au monde professionnel. L’enseignement est dispensé à des petits groupes d’étudiants et s'oriente directement vers les entreprises (gestion, économie, ingénierie, informatique, techniques créatrices, beaux-arts ou musique)."
      }
    },
    procedures: {
      custom: true,
      title: "Conditions d'accès selon votre niveau d'études",
      options: [
        { title: "Si vous venez d'obtenir votre Baccalauréat :", desc: "Vous devez obligatoirement vous inscrire au Studienkolleg. Cette année préparatoire sert à combler le manque de connaissances fondamentales. L'accès se fait sur examen d'entrée en allemand, et se valide par un examen final." },
        { title: "Si vous avez déjà validé une première année (Bac+1 ou plus) :", desc: "Vous devez impérativement passer l'examen officiel DSH (Deutsche Sprachprüfung für den Hochschulzugang) avant de pouvoir intégrer directement l'université allemande." }
      ]
    },
    visa: {
      intro: "Pour obtenir le visa d'études auprès de l'Ambassade de la République Fédérale d'Allemagne, les critères administratifs et financiers sont stricts.",
      requirements: [
        "Un diplôme de langue allemande au minimum de niveau B1 (l'Allemagne est le seul pays de l'Union Européenne à accepter un niveau B1 pour l'accès étudiant).",
        "Justifier de fonds financiers suffisants pour subvenir à ses besoins sur place et couvrir le retour, ce qui tourne autour de 100 000 DH (Compte bloqué).",
        "Un garant direct pour assurer le financement sur l'année OU un garant indirect résident en Union Européenne capable de se substituer financièrement."
      ]
    }
  }
};

export default function DestinationDetail() {
  const { countrySlug } = useParams();
  
  const data = detailsDatabase[countrySlug];

  if (!data) {
    return (
      <div className="w-full bg-slate-50 min-h-screen flex flex-col items-center justify-center p-4">
        <h2 className="text-xl font-black text-brand-blue uppercase mb-2">Détails en cours de configuration</h2>
        <p className="text-xs text-slate-500 mb-6">Le contenu pour cette destination est en train d'être déployé par notre équipe.</p>
        <Link to="/destinations" className="text-xs text-brand-gold font-bold hover:underline uppercase">
          ← Retourner aux destinations
        </Link>
      </div>
    );
  }

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('${data.bgImage}')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">{data.name}</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            {data.tagline}
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas de boutons d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche - Tout s'affiche à la suite (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : APERÇU & FILIÈRES */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Award size={16} className="text-brand-gold" /> Avantages Majeurs
              </h2>
              <div className="space-y-3">
                {data.overview.reasons.map((r, i) => (
                  <div key={i} className="text-xs">
                    <strong className="text-brand-blue block font-extrabold mb-0.5">• {r.title}</strong>
                    <p className="text-slate-600 leading-relaxed pl-3 font-medium">{r.text}</p>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <GraduationCap size={16} className="text-brand-gold" /> Les Filières Reconnues
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.overview.filiers.map((f, i) => (
                  <div key={i} className="bg-slate-50/60 p-4 rounded-xl border border-slate-100/80">
                    <h4 className="font-black text-xs text-brand-gold uppercase tracking-wide mb-1">{f.name}</h4>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{f.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2 : LANGUES / SYSTEME D'ETUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <BookOpen size={16} className="text-brand-gold" /> {data.isGermanySystem ? "Système d'études & Cursus" : "Projet & Certifications Linguistiques"}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{data.languages.intro}</p>
            </div>

            {/* Pour la France */}
            {!data.isGermanySystem && data.languages.tests && (
              <div className="space-y-4">
                {data.languages.tests.map((t, i) => (
                  <div key={i} className="border border-slate-100 rounded-xl p-4 bg-slate-50/40 space-y-2">
                    <div className="flex justify-between items-center border-b border-slate-100 pb-2">
                      <h3 className="font-black text-xs text-brand-blue uppercase">{t.name}</h3>
                      <span className="text-[11px] font-extrabold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded">{t.price}</span>
                    </div>
                    <p className="text-[11px] text-slate-500 font-bold italic">{t.validity}</p>
                    <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{t.details}</p>
                  </div>
                ))}
              </div>
            )}

            {/* Pour l'Allemagne */}
            {data.isGermanySystem && data.languages.fachhochschule && (
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 space-y-2">
                <h3 className="font-black text-xs text-brand-blue uppercase">{data.languages.fachhochschule.title}</h3>
                <p className="text-[11px] text-slate-600 leading-relaxed font-medium">{data.languages.fachhochschule.text}</p>
              </div>
            )}
          </div>

          {/* SECTION 3 : LES PROCEDURES D'ADMISSION / ENGLISH PROGRAMS */}
          <div className="space-y-6">
            {data.procedures.custom ? (
              <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                <h3 className="font-black text-sm text-brand-blue uppercase border-b pb-2 flex items-center gap-2">
                  <Calendar size={16} className="text-brand-gold" /> {data.procedures.title}
                </h3>
                <div className="space-y-4">
                  {data.procedures.options.map((opt, i) => (
                    <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs">
                      <strong className="text-brand-blue block mb-1">{opt.title}</strong>
                      <p className="text-slate-600 font-medium leading-relaxed">{opt.desc}</p>
                    </div>
                  ))}
                </div>
                <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-medium flex items-start gap-2 mt-2">
                  <span></span>
                  <span><strong>English Taught Programs :</strong> De plus en plus présent (Économie, Médecine). Pour suivre l'intégralité d'un cursus en anglais en Allemagne, l'étudiant doit obligatoirement fournir un certificat officiel <strong>IELTS ou TOEFL</strong>.</span>
                </div>
              </div>
            ) : (
              <>
                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                  <h3 className="font-black text-sm text-brand-blue uppercase border-b pb-2 flex items-center gap-2">
                    <span className="text-brand-gold"></span> {data.procedures.campusFrance.title}
                  </h3>
                  <ol className="space-y-3 pl-4 list-decimal text-xs text-slate-600 font-medium">
                    {data.procedures.campusFrance.steps.map((step, i) => (
                      <li key={i} className="leading-relaxed pl-1">{step}</li>
                    ))}
                  </ol>
                </div>

                <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
                  <h3 className="font-black text-sm text-brand-blue uppercase border-b pb-2 flex items-center gap-2">
                    <span className="text-brand-gold"></span> {data.procedures.nonConnectees.title}
                  </h3>
                  <ul className="space-y-3 text-xs text-slate-600 font-medium">
                    {data.procedures.nonConnectees.steps.map((step, i) => (
                      <li key={i} className="flex items-start gap-2 leading-relaxed">
                        <span className="text-brand-gold font-bold">•</span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </>
            )}
          </div>

          {/* SECTION 4 : VISA & FINANCEMENT */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <FileText size={16} className="text-brand-gold" /> Visa & Conditions Financières
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{data.visa.intro}</p>
            </div>

            <div className="space-y-3">
              <h4 className="font-black text-xs text-brand-blue uppercase tracking-wider">Justificatifs Clés requis :</h4>
              {data.visa.requirements.map((req, i) => (
                <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span>{req}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Colonne de droite - Reste visible sur le côté (1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Top 10 permanent */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top 10 des Universités
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {data.overview.topUniversities.map((uni, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100/60">
                  <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">{idx + 1}</span>
                  <span className="truncate">{uni}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Card de Contact */}
          {/* Card de Contact - Version Claire Minimaliste */}
          {/* Card de Contact - Version Bleu Clair Lumineux */}
{/* Card de Contact - Version Jaune Lumineux Doux */}
<div className="bg-amber-100 p-6 rounded-2xl shadow-sm space-y-4 text-center border border-amber-200">
  <h4 className="font-black text-sm uppercase tracking-wide text-brand-blue">
    Besoin d'accompagnement ?
  </h4>
  <p className="text-[11px] text-slate-800 leading-relaxed font-black">
    Contactez-nous pour commencer votre parcours
  </p>
  <div className="pt-2">
    <p className="text-[10px] text-slate-500 font-bold uppercase tracking-wider">
      Des questions ? Appelez-nous :
    </p>
    <a 
      href="tel:0645212800" 
      className="text-sm font-black text-white block mt-1.5 tracking-wide bg-brand-blue py-2.5 rounded-xl hover:bg-brand-blue/90 transition-all shadow-md"
    >
      06 45 21 28 00
    </a>
  </div>
</div>

        </div>
      </main>
    </div>
  );
}