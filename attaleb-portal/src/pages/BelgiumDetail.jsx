import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, FileText, GraduationCap, Calendar } from 'lucide-react';


function BelgiumDetail() {
  return (
    <div>
      <Helmet>
        <title>Étudier en Belgique | Attaleb.net</title>
        <meta name="description" content="Découvrez pourquoi la Belgique est une destination idéale pour les étudiants marocains. Explorez les opportunités éducatives et culturelles   ." />
      </Helmet>
    </div>
  );
}

export default function BelgiumDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1549737221-cef5512d775f?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">BELGIQUE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Un enseignement supérieur d'excellence et une proximité linguistique unique pour les étudiants marocains.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI LA BELGIQUE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi faire ses études en Belgique ?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              L'enseignement supérieur belge est reconnu mondialement pour sa grande qualité. Très prisé par les étudiants internationaux, le pays offre des avantages académiques et un cadre de vie multiculturel idéal pour les profils marocains.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Frais de scolarité abordables</strong>
                Des coûts universitaires relativement accessibles par rapport à d'autres destinations comme le Royaume-Uni ou les États-Unis.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Diversité culturelle & Langues</strong>
                Un pays multilingue offrant une expérience humaine unique, avec une intégration immédiate grâce aux régions francophones.
              </div>
            </div>

            <h4 className="font-black text-xs text-brand-blue uppercase mt-4 pt-2">Un large spectre de formations :</h4>
            <div className="flex flex-wrap gap-1.5">
              {["Art", "Design", "Musique", "Cinéma", "Journalisme", "Commerce & Gestion", "Architecture", "Ingénierie", "Médecine", "Sciences"].map((filiere, idx) => (
                <span key={idx} className="bg-brand-blue/5 text-brand-blue text-[10px] font-bold px-2.5 py-1 rounded-md border border-brand-blue/10">
                  {filiere}
                </span>
              ))}
            </div>
          </div>

          {/* SECTION 2 : SYSTÈME ÉDUCATIF */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Système éducatif & Cycles d'études
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Tout comme au Maroc, le système supérieur s'articule autour de l'architecture européenne <strong>LMD</strong> (Bachelier, Master, Doctorat) :
            </p>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Bachelier (Licence) :</strong> Dure 3 ans pour acquérir les bases fondamentales de la filière.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Master :</strong> S'étend sur une période de 1 à 2 ans selon la spécialisation choisie.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Doctorat :</strong> Dure au minimum 3 ans après l'obtention du Master.</span>
              </li>
            </ul>

            <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 my-4 rounded-r-xl space-y-1">
              <h4 className="font-black text-xs text-brand-blue uppercase">La composante linguistique régionale</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Les cours sont dispensés selon la région : le <strong>français</strong> (Régions francophones), le <strong>néerlandais</strong> (Régions néerlandophones) et l'<strong>allemand</strong>. La communauté étudiante marocaine s'oriente majoritairement vers les régions francophones, mais toutes restent accessibles selon vos préférences.
              </p>
            </div>
          </div>

          {/* SECTION 3 : ADMISSION ET ÉQUIVALENCE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Conditions d’admissions et Équivalences
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les étudiants marocains doivent justifier d'un diplôme équivalent au baccalauréat belge et prouver leur maîtrise de la langue d'enseignement. Les dossiers doivent être révisés par une commission officielle.
            </p>

            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-3 font-medium">
              <strong className="text-brand-blue block font-extrabold">Modalités de dépôt de l'équivalence :</strong>
              <p>• <strong>Option 1 :</strong> Envoi postal complet en recommandé au service officiel.</p>
              <p>• <strong>Option 2 :</strong> Dépôt physique complet du dossier sur rendez-vous (en ligne, sur place ou par téléphone).</p>
              
              <div className="pt-2 border-t border-slate-200 text-[11px] space-y-1 text-slate-500">
                <p className="font-bold text-slate-700">MINISTÈRE DE LA COMMUNAUTÉ FRANÇAISE (DGEO)</p>
                <p>Service des équivalences : Rue A. Lavallée, 1 1080 BRUXELLES</p>
                <p>Rendez-vous & Visites : Rue Courtois, 4 à 1080 Bruxelles</p>
                <p>Tél : +32 (0)2 690.86.86 | Site : www.equivalences.cfwb.be</p>
              </div>
            </div>

            <div className="p-3 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-medium">
               <strong>Délai de traitement :</strong> Comptez généralement entre <strong>3 à 6 semaines</strong> selon la période de dépôt pour recevoir votre attestation d'équivalence.
            </div>
          </div>

          {/* SECTION 4 : VISA ÉTUDIANT */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <FileText size={18} className="text-brand-gold" /> Demande de Visa ASP Études
              </h2>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Le visa étudiant est obligatoire pour tout séjour supérieur à 3 mois. Il est recommandé de lancer la procédure bien à l'avance (délai de traitement de <strong>15 jours minimum</strong>). Les pièces doivent être fournies en <strong>3 exemplaires</strong>.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-600 font-medium">
              {[
                "Formulaires originaux de demande de visa + 3 photos couleur",
                "Attestation d’inscription ou d’admission de l'université",
                "Attestation de dépôt de la demande d’équivalence (CFWB)",
                "Document de l'établissement indiquant la date limite de rentrée",
                "Original du Baccalauréat (ou copie certifiée conforme)",
                "Diplômes et certificats obtenus après le secondaire",
                "Engagement de prise en charge (Garant) avec preuves de solvabilité",
                "Passeport national (valide au moins 1 an après le visa)",
                "Extrait de casier judiciaire légalisé (pour les plus de 21 ans)",
                "Certificat médical établi par un médecin agréé",
                "Photocopie de la CIN + 2 enveloppes timbrées"
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100/60">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{req}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 bg-slate-50 p-4 rounded-xl">
              <strong className="text-brand-blue block text-xs font-extrabold mb-1"> Garantie financière du garant :</strong>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                L'engagement de prise en charge nécessite un calcul précis basé sur les besoins de l'étudiant, impliquant généralement un montant financier qui tourne autour de <strong>100 000 DH</strong> ou des critères de revenus mensuels stricts pour le garant.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Tableau Top 10 permanent et scannable */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top 10 des Universités en Belgique
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                "Université de Liège",
                "Vrije Universiteit Brussel",
                "Université catholique de Louvain",
                "Katholieke Universiteit Leuven",
                "Université Saint-Louis de Bruxelles",
                "Transnationale Universiteit Limburg",
                "Université de Namur",
                "Universiteit Antwerpen",
                "Université libre de Bruxelles",
                "Université de Mons"
              ].map((univ, idx) => (
                <li key={idx} className="flex items-center gap-2 bg-slate-50 p-2 rounded-lg border border-slate-100/60">
                  <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate">{univ}</span>
                </li>
              ))}
            </ol>
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