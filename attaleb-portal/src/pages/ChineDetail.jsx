import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar, ShieldCheck } from 'lucide-react';

function ChineDetail() {
  return (
    <div>
      <Helmet>
        <title>Étudier en Chine | Attaleb.net</title>
        <meta name="description" content="Découvrez pourquoi la Chine est une destination idéale pour les étudiants marocains. Explorez les opportunités éducatives et culturelles." />
      </Helmet>
    </div>
  );
}

export default function ChineDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1508672019048-805c876b67e2?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">CHINE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Intégrez l'une des plus grandes puissances scientifiques et technologiques mondiales au sein de campus ultra-modernes.
          </p>
        </div>
      </section>

      {/* 2. Contenu Principal */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Gauche - Contenu (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* POURQUOI LA CHINE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi choisir la Chine ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Excellence Scientifique</strong>
                Des universités d'élite reconnues au plus haut niveau mondial, notamment en ingénierie, technologies et sciences exactes.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Compétitivité Financière</strong>
                Des frais de scolarité et un coût de la vie quotidienne considérablement moins élevés que dans les autres grandes destinations mondiales.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Maîtrise du Mandarin</strong>
                L'opportunité unique d'apprendre la langue la plus parlée au monde, un atout d'une valeur inestimable pour votre future carrière.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Immersion Culturelle</strong>
                Un cadre d'études stimulant au croisement d'une histoire millénaire riche et d'une modernité futuriste impressionnante.
              </div>
            </div>
          </div>

          {/* FILIÈRES RECONNUES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Filières Majeures et Reconnues
            </h3>
            <div className="space-y-3">
              {[
                { name: "Ingénierie de Pointe", desc: "Programmes leaders mondiaux en aérospatiale, électronique, systèmes énergétiques, génie civil et mécanique." },
                { name: "Sciences Médicales", desc: "Cursus de médecine moderne très respectés, avec l'option unique d'étudier la Médecine Traditionnelle Chinoise." },
                { name: "Business, Commerce & Gestion", desc: "Idéal pour s'immerger au cœur d'un marché en pleine croissance économique (MBA, management international)." },
                { name: "Langue & Littérature Chinoise", desc: "Programmes linguistiques immersifs adaptés à tous les niveaux pour perfectionner votre mandarin." },
                { name: "Sciences Sociales", desc: "Sociologie, psychologie, anthropologie et philosophie offrant une perspective culturelle unique sur l'Asie." }
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

          {/* CONDITIONS D'ADMISSION & PRÉ-REQUIS */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> Conditions de Candidature Académique
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Pour postuler, vous devez cibler un niveau correspondant à votre diplôme actuel (Baccalauréat requis pour un Bachelor, Licence pour un Master). L'inscription peut se faire directement auprès de l'université ou centralisée via le portail médiateur officiel **CUCAS**.
            </p>

            {/* Cadre Tests Linguistiques */}
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-xl space-y-2 text-xs font-medium text-slate-700">
              <span className="text-brand-blue font-extrabold block uppercase tracking-wider text-[11px]"> Exigences Linguistiques :</span>
              <ul className="list-disc pl-4 space-y-1 text-slate-600">
                <li><strong>Cursus en Mandarin :</strong> Soumission obligatoire des scores officiels du test <strong>HSK</strong>.</li>
                <li><strong>Cursus en Anglais :</strong> Soumission des résultats du test <strong>IELTS ou TOEFL</strong>.</li>
                <li><span className="text-emerald-700"><strong>Exemption :</strong></span> Les candidats déjà titulaires d'un diplôme universitaire entièrement enseigné en anglais sont dispensés de fournir l'IELTS/TOEFL.</li>
              </ul>
            </div>

            {/* Dossier d'inscription universitaire */}
            <div className="space-y-2 text-xs text-slate-600 font-medium">
              <strong className="text-brand-blue block font-extrabold">Pièces requises pour le dossier universitaire :</strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <div>• Copie du passeport en cours de validité</div>
                <div>• Photo personnelle format passeport</div>
                <div>• Diplômes et relevés de notes obtenus</div>
                <div>• Certificat d'assurance médicale d'origine</div>
                <div>• Justificatifs de capacité financière (attestation bancaire)</div>
                <div>• Lettre de garantie pour l'admission</div>
              </div>
            </div>
          </div>

          {/* BUDGET ET LOGEMENT */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <DollarSign size={18} className="text-brand-gold" /> Budget & Scolarité Annuelle
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Premier Cycle (Bachelor)</strong>
                Compter entre <span className="text-brand-blue font-bold">23 000 DH et 30 000 DH / an</span> (environ 2500$ à 3000$).
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Deuxième Cycle (Master)</strong>
                Compter environ <span className="text-brand-blue font-bold">25 000 DH / an</span> (environ 2800$).
              </div>
            </div>
            <div className="bg-amber-50 border border-amber-200 text-amber-900 p-3.5 rounded-xl text-xs font-medium">
               <strong>Conseil Logement :</strong> Pour réduire drastiquement vos dépenses mensuelles, il est fortement recommandé de loger au sein des résidences universitaires des campus. Le bureau des étudiants internationaux de votre université d'accueil vous accompagnera dans cette démarche.
            </div>
          </div>

          {/* FORMALITÉS DE VISA ÉTUDIANT X1 */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <Key size={18} className="text-brand-gold" /> Procédure Obligatoire du Visa d'Études (Visa X1)
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              La demande s'initie obligatoirement en ligne via la plateforme de formulaire électronique <strong>COVA</strong>. Le dépôt de votre dossier papier s'effectue ensuite <strong>en personne</strong> pour l'enregistrement obligatoire de vos empreintes digitales au Service Consulaire de l'Ambassade de Chine à Rabat (Souissi).
            </p>

            {/* Alerte Sécurité Casier */}
            <div className="flex items-start gap-2.5 bg-red-50 border border-red-200 p-3.5 rounded-xl text-xs text-red-900 font-medium">
              <ShieldCheck size={16} className="text-red-700 shrink-0 mt-0.5" />
              <div>
                <strong>Exigence de non-criminalité :</strong> Vous devez impérativement fournir une attestation d'absence de casier judiciaire (extrait de casier judiciaire) <strong>notariée et certifiée officiellement</strong> par l'Ambassade de Chine.
              </div>
            </div>

            {/* Checklist Visa dans l'ordre strict */}
            <div className="space-y-2 pt-2">
              <strong className="text-xs font-bold text-slate-700 block">Ordre strict de présentation des documents requis :</strong>
              {[
                { title: "Confirmation COVA", desc: "Document officiel de confirmation de rendez-vous contenant votre numéro de référence." },
                { title: "Formulaire imprimé", desc: "Formulaire électronique COVA imprimé, daté, signé avec une photo d'identité réglementaire collée (fond blanc clair, 48mm * 33mm, tête nue)." },
                { title: "Passeport réglementaire", desc: "Valide au moins 6 mois après le jour de la demande, comportant au minimum 3 pages entièrement vierges, avec une photocopie au format A4 de la page d'identité." },
                { title: "Justificatif Académique", desc: "Lettre d'admission officielle originale (pour les nouveaux étudiants) ou Attestation de Retour à l'Université (pour les anciens étudiants)." },
                { title: "Formulaire JW-201 / JW-202", desc: "L'original et la photocopie du formulaire officiel de demande de visa pour étudiants étrangers délivré par les autorités chinoises compétentes." },
                { title: "Garantie Financière Bloquée", desc: "Dernier relevé de compte bancaire personnel cacheté affichant un solde créditeur minimal de 60 000 DH (ou une prise en charge légalisée accompagnée du relevé bancaire équivalent du garant)." },
                { title: "Billet d'avion", desc: "Billet d'avion aller-retour confirmé (le visa X1 ayant une validité initiale de 3 mois, un billet de la même validité est recommandé)." }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start gap-3 bg-slate-50 p-3 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium leading-relaxed">
                  <span className="w-5 h-5 bg-brand-blue/10 text-brand-blue font-black rounded-full flex items-center justify-center shrink-0 text-[10px]">
                    {idx + 1}°
                  </span>
                  <div>
                    <strong>{item.title} :</strong> {item.desc}
                  </div>
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* Colonne Droite - Sidebars & Tops (1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* TOP 10 UNIVERSITES */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-3 pb-2 border-b flex items-center gap-1.5">
               Top 10 des Universités de Chine
            </h3>
            <ol className="space-y-2 text-[11px] text-slate-700 font-bold">
              {[
                "Université Tsinghua",
                "Université de Pékin",
                "Université Fudan",
                "Université du Zhejiang",
                "Université Jiao Tong de Shanghai",
                "Université des Sciences et Technologies",
                "Université de Nankin",
                "Université de Tongji",
                "Université de Wuhan",
                "Institut de Technologie de Harbin"
              ].map((univ, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100/60">
                  <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{univ}</span>
                </li>
              ))}
            </ol>
            <p className="text-[9px] text-slate-400 font-medium text-right mt-2">* Selon le classement QS World Rankings</p>
          </div>

          {/* BOUTON BOURSES INFO */}
          <div className="bg-gradient-to-br from-amber-50 to-amber-100 p-5 rounded-2xl border border-amber-200 space-y-2">
            <span className="text-lg"></span>
            <strong className="text-xs font-black text-amber-950 block uppercase tracking-tight">Bourses du Gouvernement</strong>
            <p className="text-[11px] text-amber-900 font-medium leading-relaxed">
              Dans le cadre des accords de coopération culturelle Maroc-Chine, des bourses complètes (via le <strong>China Scholarship Council</strong>) sont proposées chaque année, principalement ciblées pour les profils postulant en <strong>Master et Doctorat</strong>.
            </p>
          </div>

          {/* Rappel Plateforme */}
          <div className="bg-slate-100 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-lg"></span>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              <strong>Attaleb.ma</strong> prend en charge l'intégralité de vos démarches d'admission : de l'orientation initiale à la préparation de votre dossier consulaire X1.
            </p>
          </div>

{/* Card de Contact - Version Jaune Lumineux Doux */}
<div className="lg:col-span-1 space-y-6">
          <div className="bg-white p-8 rounded-3xl shadow-sm border border-slate-100 space-y-4 sticky top-6 text-center">
            <h3 className="font-black text-lg uppercase tracking-wide text-brand-blue">Contactez-nous</h3>
            <a href="tel:0645212800" className="inline-flex items-center gap-2 text-sm font-black text-white bg-red-600 border-2 border-red-600 rounded-full px-8 py-3 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 transition-all duration-300 uppercase tracking-widest">
              06 45 21 28 00
            </a>
          </div>
        </div>

        </div>
      </main>
    </div>
  );
}