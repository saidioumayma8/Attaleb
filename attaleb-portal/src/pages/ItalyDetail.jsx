import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, FileText, GraduationCap, Calendar, DollarSign } from 'lucide-react';

export default function ItalyDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1533105079780-92b9be482077?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">ITALIE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Un mélange unique d'histoire, d'excellence académique accessible et d'opportunités de bourses.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI L'ITALIE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi faire ses études en Italie ?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              L'Italie est une destination de rêve pour les étudiants marocains souhaitant vivre à l'étranger. Elle offre un cadre de vie fascinant combiné à un système d'enseignement supérieur d'excellence, mondialement respecté.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs font-medium text-slate-600 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Qualité Académique</strong>
                Une éducation de haut niveau, reconnue internationalement, portée par de grandes traditions universitaires.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Richesse Culturelle</strong>
                La chance d'étudier au cœur du patrimoine mondial, entouré par les monuments et musées les plus célèbres.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Opportunités Pro</strong>
                Une économie diversifiée et dynamique offrant de réels débouchés professionnels pour les profils qualifiés.
              </div>
            </div>
          </div>

          {/* SECTION 2 : FILIÈRES D'EXCELLENCE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Filières Reconnues & Pôles Majeurs
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les établissements italiens brillent particulièrement à l'échelle internationale dans des domaines spécialisés :
            </p>
            
            <div className="space-y-3 pt-1">
              {[
                { name: "Architecture & Design", desc: "Écoles extrêmement renommées (ex: Politecnico di Milano, Sapienza Université de Rome) et leader mondial de l'industrie créative." },
                { name: "Arts & Beaux-Arts", desc: "Des institutions légendaires mondialement connues à l'instar de l'Accademia di Belle Arti di Firenze et de Venise." },
                { name: "Ingénierie", desc: "Le Politecnico di Milano figure parmi les meilleures écoles d'ingénieurs au monde, suivi de près par l'Université de Bologne." },
                { name: "Sciences Humaines & Sociales", desc: "Des cursus denses et très réputés, portés par des universités historiques comme Bologne et Padoue." }
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

          {/* SECTION 3 : CONDITIONS DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Processus et Conditions de Candidature
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les conditions d'admission varient selon l'établissement choisi. Pour maximiser vos chances, il est crucial de respecter un ordre d'action rigoureux :
            </p>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-2 text-[11px] font-semibold text-slate-600">
              {[
                "Sélectionner la faculté et la formation cible",
                "Prendre contact directement avec l'université",
                "Vérifier les critères spécifiques d'admission",
                "Préparer minutieusement le dossier d'inscription",
                "Soumettre officiellement sa demande d'admission",
                "Surveiller et respecter les dates limites de dépôt",
                "Passer les tests de langue ou concours requis",
                "S'acquitter des frais d'études universitaires",
                "Introduire la demande finale de visa d'études"
              ].map((step, idx) => (
                <div key={idx} className="flex items-center gap-2.5 bg-slate-50 p-2.5 rounded-xl border border-slate-100">
                  <span className="w-5 h-5 bg-brand-gold/10 text-brand-gold rounded-full flex items-center justify-center text-[10px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="leading-tight">{step}</span>
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 4 : PROCEDURES VISA */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <FileText size={18} className="text-brand-gold" /> Dossier de Demande de Visa
              </h2>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Dès réception de votre acceptation officielle, la demande de visa s'effectue auprès du consulat. La liste standard des pièces justificatives comprend notamment :
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-600 font-medium">
              {[
                "Un passeport en cours de validité",
                "Deux photos d’identité (dont une obligatoirement authentifiée)",
                "Une copie claire de la Carte d’Identité Nationale (CIN)",
                "Un extrait ou certificat de naissance officiel",
                "Une attestation d'assurance maladie internationale",
                "Justificatif de prise en charge financière (Garant)",
                "Justificatif de disponibilité d’un logement dans la ville cible"
              ].map((req, i) => (
                <div key={i} className="flex items-start gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                  <span className="text-[11px] leading-snug">{req}</span>
                </div>
              ))}
            </div>

            <div className="p-3.5 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-bold">
              Rappel Important : Tous les documents du dossier de visa doivent obligatoirement être traduits en italien au préalable par un traducteur assermenté.
            </div>
          </div>

          {/* SECTION 5 : FRAIS & BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <br />
              <DollarSign size={18} className="text-brand-gold" /> Coût de la Scolarité & Financement
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Grâce aux politiques d'accessibilité menées par l'État, les coûts universitaires en Italie restent relativement uniformes et bas. En moyenne générale, les frais de scolarité s'élèvent à environ <strong>1 100 euros par an</strong>.
            </p>

            <div className="p-4 bg-brand-blue/5 border-l-4 border-brand-blue rounded-r-xl space-y-2">
              <strong className="text-brand-blue block text-xs font-extrabold">Dispositifs de Bourses d'Études :</strong>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Le gouvernement italien attribue chaque année des bourses d'études et de recherche spécifiques aux profils internationaux, y compris aux étudiants marocains. Ces aides financières, d'un montant moyen de <strong>700 à 800 euros</strong>, soutiennent l'apprentissage de la langue, les formations universitaires, post-universitaires ainsi que les hautes formations artistiques et musicales (AFAM).
              </p>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Universités Publiques vs Privées & Liste Top 10 */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div>
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-2 flex items-center gap-1.5">
                <span></span> Top 10 des Universités
              </h3>
              <p className="text-[10px] text-slate-500 font-medium leading-normal">
                L’Italie compte environ 60 universités publiques de haut niveau réparties sur l’ensemble du territoire, contre seulement 17 universités privées.
              </p>
            </div>
            
            <ol className="space-y-2 text-[11px] text-slate-700 font-bold border-t pt-3">
              {[
                "Politecnico di Milano",
                "Alma Mater Studiorum – Université de Bologna",
                "Sapienza Université de Rome",
                "Université de Padova",
                "Université de Milan",
                "Politecnico di Torino",
                "Université de Pisa",
                "Université de Naples – Federico II",
                "Université Vita-Salute San Raffaele",
                "Université de Trento"
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