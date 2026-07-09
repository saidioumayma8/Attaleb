import React from 'react';
import { Link } from 'react-router-dom';
import { Award, BookOpen, CheckCircle2, GraduationCap, Calendar, FileText } from 'lucide-react';

export default function SpainDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">

      <Helmet>
            <title>Étudier en Espagne | Guide complet pour étudiants marocains | Attaleb</title>
            <meta name="description" content="Tout savoir sur les études en Espagne : universités, système LMD, équivalences et visa étudiant pour les étudiants marocains. Accompagnement Attaleb." />
          </Helmet>
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://cms-images.oliverstravels.com/app/uploads/2023/10/04080649/Barcelona.jpg')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">ESPAGNE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            La destination numéro 3 choisie par les étudiants marocains en Europe.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI L'ESPAGNE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={16} className="text-brand-gold" /> Pourquoi l'Espagne ?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              De plus en plus d'étudiants marocains sont attirés par l'Espagne. Le pays offre de nombreuses filières d'excellence dans le domaine de la santé (médecine, pharmacie), l’architecture ainsi que dans les domaines des sciences sociales et des arts vivants.
            </p>
            <div className="bg-slate-50 border-l-4 border-brand-gold p-4 my-2 rounded-r-xl">
              <p className="text-xs font-semibold text-brand-blue">
                L’Espagne possède un nombre considérable d'étudiants universitaires (1,5 million) issus de plusieurs nationalités dont le Maroc qui représente une large communauté.
              </p>
            </div>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              <strong>Diversité culturelle :</strong> L'Espagne est un pays riche en histoire et en culture, les étudiants marocains peuvent profiter de cette richesse culturelle en explorant les villes, les musées et les monuments.
            </p>
          </div>

          {/* SECTION 2 : SYSTÈME D'ÉTUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <GraduationCap size={16} className="text-brand-gold" /> Système LMD (Grado / Posgrado)
            </h2>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>La licence (Grado) :</strong> dure de 3 à 4 ans (Arts, Médecine, Droit, Ingénierie, Architecture).</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le master (Posgrado) :</strong> dure 1 à 2 ans.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le doctorat (Doctorado) :</strong> dure 3 à 4 ans après l'obtention d'un master.</span>
              </li>
            </ul>
            
            <h4 className="font-black text-xs text-brand-blue uppercase mt-6 pt-2 border-t border-slate-100">
              Enseignement supérieur non universitaire (2 ans) :
            </h4>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-2 mt-2">
              <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/60 text-[11px] font-bold text-slate-600">• Filières artistiques de Grado superior</li>
              <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/60 text-[11px] font-bold text-slate-600">• Formation professionnelle de Grado superior</li>
              <li className="bg-slate-50 p-2.5 rounded-xl border border-slate-100/60 text-[11px] font-bold text-slate-600">• Formation de Técnico deportivo superior</li>
            </ul>
          </div>

          {/* SECTION 3 : CONDITIONS D'ADMISSION */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={16} className="text-brand-gold" /> Conditions d’admissions et inscription
            </h2>
            <div className="space-y-4">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                <strong className="text-brand-blue block font-extrabold">1. Équivalence du Baccalauréat :</strong>
                <p className="font-medium">À demander auprès du bureau d'éducation : 131, avenue Allal ben Abdallah à Rabat. Tél : (0537) 76 75 58/59.</p>
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-2">
                <strong className="text-brand-blue block font-extrabold">2. Évaluation linguistique (Deux options) :</strong>
                <p className="font-medium">• <strong>Selectividad :</strong> Examen d'accès organisé au Maroc par l'UNED en juin et septembre (Tanger, Nador, Tétouan, El Jadida, Marrakech, Fès, Casablanca, Rabat).</p>
                <p className="font-medium">• <strong>Test DELE :</strong> Diplôme officiel délivré par l'Instituto Cervantes au nom du ministère de l'Éducation de l'Espagne.</p>
              </div>
            </div>
          </div>

          {/* SECTION 4 : VISA & BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <FileText size={16} className="text-brand-gold" /> Demande et procédure de visa
              </h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2.5 text-xs text-slate-600 font-medium">
              {[
                "Formulaire original + copie",
                "Passeport valide (min. 6 mois)",
                "Attestation d'inscription + paiement",
                "Certificat médical officiel",
                "Diplôme traduit en espagnol",
                "Garant direct (blocage ~100 000 DH) ou garant UE"
              ].map((req, i) => (
                <div key={i} className="flex items-center gap-2 bg-slate-50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-emerald-500 shrink-0" />
                  <span>{req}</span>
                </div>
              ))}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider">Bourses et financement</h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Chaque année, les étudiants marocains ont l'opportunité de poursuivre leurs études en Espagne avec le soutien du gouvernement espagnol sous forme de bourses. Contactez le service culturel de l'ambassade d'Espagne au Maroc pour plus d'informations.
              </p>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Liste des meilleures Universités */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top Universités (QS)
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                "L’Université Autònoma de Barcelone",
                "Université de Barcelone",
                "Université Autónoma de Madrid",
                "Complutense Université de Madrid",
                "Université Pompeu Fabra",
                "Université de Navarra",
                "Université Carlos III de Madrid",
                "Université Politècnica de Catalunya",
                "IE University",
                "L’Université Politècnica de València"
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