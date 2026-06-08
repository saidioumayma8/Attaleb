import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar } from 'lucide-react';

export default function PortugalDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1509840841025-9088ba78a826?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER AU <span className="text-brand-gold">PORTUGAL</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Une destination européenne d'avenir, réputée pour sa douceur de vivre, son accessibilité et son ouverture internationale.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI LE PORTUGAL & FILIÈRES */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Award size={18} className="text-brand-gold" /> Pourquoi choisir le Portugal ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Enseignement de Qualité</strong>
                  Un système d'enseignement supérieur performant avec des diplômes d'État reconnus dans tout l'espace européen.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Coût de la Vie Abordable</strong>
                  L'un des pays les plus économiques de l'Union Européenne, permettant de concilier budget maîtrisé et excellente qualité de vie.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Diversité & Accueil</strong>
                  Une nation multiculturelle, riche d'histoire et de traditions, offrant un environnement chaleureux et sécurisant aux étudiants.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Mobilité Européenne</strong>
                  Situé stratégiquement dans la zone Schengen, le Portugal constitue un point de départ idéal pour explorer et voyager en Europe.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <GraduationCap size={18} className="text-brand-gold" /> Filières les plus Reconnues
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Sciences de la Santé", desc: "Cursus hautement demandés et encadrés en médecine, médecine dentaire et pharmacie." },
                  { name: "Ingénierie", desc: "Formations technologiques pointues en mécanique, aérospatiale, électronique et énergies renouvelables." },
                  { name: "Technologies de l'Information (TIC)", desc: "Un secteur en plein essor au Portugal offrant de solides débouchés en génie informatique et systèmes d'information." },
                  { name: "Sciences Sociales & Humaines", desc: "Programmes académiques très populaires en psychologie, sociologie, histoire et langues étrangères." }
                ].map((f, i) => (
                  <div key={i} className="flex gap-3 items-start text-xs border-b border-slate-100 pb-3 last:border-none last:pb-0">
                    <span className="bg-brand-blue/5 text-brand-blue px-2 py-0.5 rounded font-black mt-0.5">0{i+1}</span>
                    <div>
                      <strong className="text-brand-blue font-extrabold">{f.name} :</strong>
                      <span className="text-slate-600 font-medium ml-1">{f.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION 2 : FORMATIONS PROFESSIONNELLES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> L'Atout des Formations Professionnelles
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Parallèlement aux cursus universitaires traditionnels, le Portugal propose des filières professionnelles courtes très valorisées sur le marché du travail :
            </p>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Compétences ciblées :</strong> Très appréciées des recruteurs dans les secteurs de l'hôtellerie, de la restauration, du bâtiment, de la mécanique, de l'agriculture et de l'informatique.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Accessibilité totale :</strong> Ces formations sont pleinement ouvertes aux étudiants internationaux et s'avèrent souvent bien plus économiques que les parcours classiques.</span>
              </li>
            </ul>
          </div>

          {/* SECTION 3 : CONDITIONS DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <Key size={18} className="text-brand-gold" /> Conditions d'Admission Academic & NARIC
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Chaque établissement fixe de manière autonome ses critères d'accès selon le niveau visé (Licenciatura, Mestrado ou Doutoramento) :
            </p>
            
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Reconnaissance des Diplômes (NARIC)</strong>
                Les étudiants du Maroc doivent faire vérifier la validité et l'équivalence de leurs diplômes d'origine auprès du Centre national d'informations sur la reconnaissance académique (NARIC Portugal).
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Dossier et Calendrier</strong>
                Le dossier général regroupe un CV détaillé, une lettre de motivation et des copies certifiées conformes des diplômes traduits. 
                <span className="text-amber-700 font-bold block mt-1"> Période limite d'inscription : Se situe généralement entre mars et avril. Prévoir plusieurs mois pour la réponse.</span>
              </div>
            </div>
            
            <div className="p-4 bg-emerald-50 border border-emerald-200 text-emerald-900 rounded-xl text-xs font-medium">
              <strong> Flexibilité Visa :</strong> Le Portugal figure parmi les pays de l'Union Européenne affichant les taux d'acceptation de visa d'études les plus souples et favorables pour les profils internationaux.
            </div>
          </div>

          {/* SECTION 4 : DOSSIER DE VISA ET FINANCES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <DollarSign size={18} className="text-brand-gold" /> Budget Études & Exigences Consulaires
              </h3>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Frais de Scolarité Établissements Publics</strong>
                  Compter entre <span className="text-brand-blue font-bold">800 € et 1 500 €</span> par année universitaire.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Frais de Scolarité Établissements Privés</strong>
                  S'élèvent en moyenne aux alentours de <span className="text-brand-blue font-bold">3 500 €</span> par an.
                </div>
              </div>

              <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 my-2 rounded-r-xl text-xs text-slate-700 font-medium">
                <strong>Estimation du coût de la vie :</strong> Le coût de subsistance mensuel global incluant le logement étudiant, l'alimentation et les transports reste très modéré, estimé à environ <span className="text-brand-blue font-bold">600 € / mois</span>.
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-brand-blue uppercase tracking-tight">Liste des pièces requises pour le Visa :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  { title: "Passeport conforme", desc: "Valable au moins 3 mois après l'expiration du visa avec 2 pages vierges et copies des visas Schengen." },
                  { title: "Fiche Anthropométrique", desc: "Obligatoire pour tous les demandeurs âgés de plus de 16 ans." },
                  { title: "Garantie de Financement", desc: "Attestation de bourse, ordre de virement permanent ou prise en charge légalisée accompagnée des relevés bancaires du garant." },
                  { title: "Assurance Médicale", desc: "Couverture internationale soins et rapatriement minimale de 30 000 € pour la durée du séjour." },
                  { title: "Preuve d'Hébergement", desc: "Contrat de bail, attestation de résidence universitaire ou réservation d'hôtel temporaire." },
                  { title: "Certificat d'Inscription", desc: "Lettre d'acceptation ou certificat émis par un établissement d'enseignement agréé au Portugal." }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 size={13} className="text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>{req.title} :</strong> {req.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-medium mt-1">* Prévoir également : CIN, 1 photo d'identité récente (3.5x4.5) sur fond clair et la réservation des billets d'avion aller/retour.</p>
            </div>
          </div>

          {/* SECTION BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Opportunités de Bourses d'Études
            </h2>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Partenariat FCT (Portugal) & CNRST (Maroc)</strong>
                Bourses spécifiques destinées aux étudiants chercheurs afin de stimuler les coopérations et les échanges scientifiques bilatéraux entre les deux pays.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Bourses de l'Institut Camões</strong>
                <ul className="list-disc pl-4 mt-1 space-y-1">
                  <li><strong>Langue & Culture :</strong> Financement de cours annuels pour perfectionner ses compétences linguistiques.</li>
                  <li><strong>Programme de Recherche :</strong> Destiné aux enseignants et chercheurs en Master ou Doctorat spécialisés en portugais.</li>
                  <li><strong>Programme Vieira :</strong> Allocations d'études ciblées sur la traduction et l'interprétation de conférence.</li>
                </ul>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Tableau Top 10 permanent */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top 10 Universités au Portugal
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                "Université de Porto",
                "Université Nouvelle de Lisbonne",
                "Université de Coimbra",
                "Université de Lisbonne",
                "Université Catholique Portugaise",
                "Université de Minho",
                "Université d'<span>Aveiro</span>",
                "Université Aberta",
                "Université de Beira Interior",
                "Université d'Évora"
              ].map((univ, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100/60">
                  <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate" dangerouslySetInnerHTML={{ __html: univ }}></span>
                </li>
              ))}
            </ol>
          </div>

          {/* Rappel Plateforme */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-lg"></span>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              <strong>Attaleb.ma</strong> met à votre disposition un large choix d'établissements partenaires pour optimiser et sécuriser vos chances d'admission au Portugal.
            </p>
          </div>

{/* Card de Contact - Version Jaune Lumineux Doux */}
<div className="bg-amber-100 p-6 rounded-2xl shadow-sm space-y-4 text-center border border-amber-200">
  <h4 className="font-black text-sm uppercase tracking-wide text-brand-blue">
    Besoin d'accompagnement ?
  </h4>
  <p className="text-[11px] text-slate-800 leading-relaxed font-black">
    {data.ctaText}
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