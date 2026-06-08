import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar } from 'lucide-react';

export default function RoumanieDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1565008447742-97f6f38c985c?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">ROUMANIE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Une référence européenne majeure pour les études médicales et scientifiques, alliant excellence et accessibilité financière.
          </p>
        </div>
      </section>

      {/* 2. Contenu Principal */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Gauche - Contenu (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* POURQUOI LA ROUMANIE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi choisir la Roumanie ?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Études Économiques</strong>
                Des frais de scolarité et un coût de la vie parmi les plus abordables et compétitifs de toute l'Union Européenne.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Flexibilité Linguistique</strong>
                De très nombreux cursus d'études dispensés intégralement en Français ou en Anglais, évitant la barrière de la langue.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Diplômes Reconnus</strong>
                Des diplômes d'État alignés sur les normes européennes, valides au Maroc, dans l'UE, aux USA et au Canada.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1"> Perspectives Post-Diplôme</strong>
                Un pays en plein développement économique offrant des opportunités de carrière dynamiques pour les jeunes diplômés.
              </div>
            </div>
          </div>

          {/* FOCUS SPÉCIAL : LA MÉDECINE */}
          <div className="bg-gradient-to-br from-brand-blue to-blue-950 text-white p-6 md:p-8 rounded-2xl shadow-md space-y-4">
            <h3 className="text-base font-black text-brand-gold uppercase flex items-center gap-2">
              🩺 Le Pôle Excellence : Études de Médecine
            </h3>
            <p className="text-xs text-slate-200 leading-relaxed font-medium">
              La Roumanie est mondialement réputée pour ses facultés de médecine, de pharmacie et d'odontologie. Elle offre une configuration pédagogique optimale pour les étudiants marocains :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 pt-2 text-xs text-slate-100">
              <div className="space-y-1">
                <strong className="text-brand-gold block font-extrabold">• Immersion Clinique Précoce</strong>
                <p className="text-slate-300">Pratique hospitalière intensive dès la première année d'études au sein de CHU (Centres Hospitaliers Universitaires) modernes.</p>
              </div>
              <div className="space-y-1">
                <strong className="text-brand-gold block font-extrabold">• Sections Francophones / Anglophones</strong>
                <p className="text-slate-300">Possibilité de suivre l'intégralité du cursus en médecine générale, dentaire ou pharmacie en français ou en anglais.</p>
              </div>
            </div>
            <div className="bg-white/10 p-3 rounded-xl border border-white/10 text-[11px] text-slate-200">
               <strong>Admission Santé :</strong> Nécessite une sélection sur dossier validée par l'université d'accueil et le Ministère Roumain de l'Éducation, complétée par des tests d'aptitude spécifiques.
            </div>
          </div>

          {/* AUTRES FILIÈRES RECONNUES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Autres Filières de Premier Plan
            </h3>
            <div className="space-y-3">
              {[
                { name: "Ingénierie & Informatique", desc: "Cursus technologiques très respectés en informatique de pointe, aérospatiale, mécanique et génie énergétique." },
                { name: "Sciences Naturelles", desc: "Programmes de recherche avancés dotés de laboratoires modernes en biologie, chimie fondamentale et physique." },
                { name: "Économie & Gestion", desc: "Formations de haute qualité en management et commerce international, majoritairement disponibles en anglais." },
                { name: "Art & Design", desc: "Écoles de création réputées proposant des spécialisations en design graphique, arts plastiques et stylisme de mode." }
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

          {/* CONDITIONS D'INSCRIPTION */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> Procédure d'Inscription Académique
            </h3>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              Le dossier d'inscription doit être soumis en double exemplaire. Une fois validé par l'université, il est transmis au Ministère roumain pour l'obtention de la **lettre officielle d'admission**.
            </p>
            <div className="bg-slate-50 p-4 rounded-xl border border-slate-100 space-y-2 text-xs text-slate-600 font-medium">
              <strong className="text-brand-blue block font-extrabold">Pièces requises pour l'université :</strong>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                <div>• Copie certifiée du Baccalauréat (ou Diplôme Uni)</div>
                <div>• Relevés de notes (Fiche matricule) traduits</div>
                <div>• Attestation de compétences linguistiques</div>
                <div>• Copie certifiée du Passeport & Acte de naissance</div>
                <div>• Certificat médical d'aptitude</div>
              </div>
            </div>
          </div>

          {/* FINANCES & DOSSIER DE VISA */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-3">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <DollarSign size={18} className="text-brand-gold" /> Budget Études & Financement
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Frais de Scolarité Moyens</strong>
                  Varient globalement entre <span className="text-brand-blue font-bold">2 000 € et 5 000 € / an</span> selon la spécialité et la faculté.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Modalités de Paiement</strong>
                  La 1ère année est payable **intégralement en une seule tranche** pour valider l'inscription. Tranches semestrielles possibles dès la 2e année.
                </div>
              </div>
            </div>

            {/* DOSSIER VISA EXIGENCES */}
            <div className="pt-6 border-t border-slate-100 space-y-3">
              <h4 className="text-xs font-black text-brand-blue uppercase tracking-tight">Dossier Consulaire Exigé pour le Visa d'Études :</h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5">
                {[
                  { title: "Passeport & Photos", desc: "Passeport valide minimum 6 mois après le séjour, copie des 5 premières pages et 2 photos d'identité." },
                  { title: "Lettre d'Acceptation", desc: "Document original délivré par le Ministère de l'Éducation de Roumanie." },
                  { title: "Preuve de Paiement", desc: "Justificatif du virement bancaire intégral de la première année d'études." },
                  { title: "Garantie Financière", desc: "Relevés bancaires des 3 derniers mois du garant + attestation de travail (poste et ancienneté)." },
                  { title: "Prise en Charge Légalisée", desc: "Déclaration officielle signée par les parents/garants couvrant tous les frais de subsistance." },
                  { title: "Assurance & Logement", desc: "Assurance médicale internationale de voyage valide pour la Roumanie." }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-2.5 rounded-xl border border-slate-100">
                    <CheckCircle2 size={13} className="text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>{req.title} :</strong> {req.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-medium mt-1">* Pour les candidats mineurs, un consentement parental écrit et signé devant notaire est strictement obligatoire.</p>
            </div>
          </div>

          {/* CRITÈRES DE BOURSE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Critères d'Éligibilité aux Bourses d'Études
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Pour solliciter l'attribution d'une bourse d'études en Roumanie, le profil de l'étudiant doit impérativement remplir les conditions institutionnelles suivantes :
            </p>
            <ul className="list-none space-y-2 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Prestige Académique :</strong> Justifier d'une moyenne générale d'études d'au moins **7/10** (équivalent au système roumain) ou mention globale **"Bien"**.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Conformité des pièces :</strong> Présenter des diplômes issus exclusivement d'établissements accrédités et reconnus officiellement au Maroc.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Règle du calendrier :</strong> Soumission rigoureuse des dossiers sur les plateformes dédiées avant la clôture des sessions d'autonomie universitaire.</span>
              </li>
            </ul>
          </div>

        </div>

        {/* Colonne Droite - Sidebars & Tops (1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* TOP 5 MEDECINE */}
          <div className="bg-brand-blue text-white p-5 rounded-2xl shadow-sm border border-slate-800">
            <h3 className="text-xs font-black text-brand-gold uppercase tracking-wider mb-3 pb-2 border-b border-white/10 flex items-center gap-1.5">
              Top 5 Universités de Médecine
            </h3>
            <ol className="space-y-2 text-[11px] font-bold text-slate-100">
              {[
                "Université Carol Davila (Bucarest)",
                "Université Victor Babes (Timișoara)",
                "Université Grigore T. Popa (Iași)",
                "UMFST (Târgu Mureș)",
                "Université Cluj-Napoca"
              ].map((univ, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-white/5 p-2 rounded-lg border border-white/5">
                  <span className="w-5 h-5 bg-brand-gold text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{univ}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* TOP 10 GENERAL */}
          <div className="bg-white p-5 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-3 pb-2 border-b flex items-center gap-1.5">
               Top 10 Universités Générales
            </h3>
            <ol className="space-y-1.5 text-[10px] text-slate-700 font-bold">
              {[
                "Université Babeș-Bolyai",
                "Université de Bucarest",
                "Université Alexandru Ioan Cuza",
                "Université Lucian Blaga (Sibiu)",
                "Université Ștefan cel Mare (Suceava)",
                "Université Technique de Cluj-Napoca",
                "Université Technique Gheorghe Asachi",
                "Université Transilvania (Brașov)",
                "Universitatea de Vest (Timișoara)",
                "Université POLITEHNICA de Bucarest"
              ].map((univ, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-1.5 rounded-md border border-slate-100">
                  <span className="w-4 h-4 bg-brand-blue text-white rounded-full flex items-center justify-center text-[8px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{univ}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Rappel Plateforme */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-lg"></span>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              <strong>Attaleb.ma</strong> vous accompagne pas à pas pour structurer votre dossier de préinscription et sécuriser l'obtention de la lettre d'admission du Ministère roumain.
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