import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar } from 'lucide-react';

export default function EmiratsDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1512453979798-5ea266f8880c?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER AUX <span className="text-brand-gold">ÉMIRATS ARABES UNIS</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Un pôle mondial d'innovation technologique et de commerce proposant des campus internationaux d'élite.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI LES EAU & FILIÈRES */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Award size={18} className="text-brand-gold" /> Pourquoi choisir les EAU ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Cursus 100% en Anglais</strong>
                  Un système moderne et des universités de premier plan dispensant leurs cours en anglais, idéal pour booster votre maîtrise linguistique.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Campus Internationaux</strong>
                  Opportunité unique d'intégrer des antennes d'institutions mondiales prestigieuses (Sorbonne Université, University of Wollongong, New York Film Academy).
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Carrière & Dynamisme</strong>
                  Une économie ultra-diversifiée offrant d'importantes perspectives d'emploi et de stages post-diplôme pour les profils qualifiés.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Hub Multiculturel</strong>
                  Une exposition internationale hors pair au cœur d'un carrefour culturel dynamique regroupant des étudiants du monde entier.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <GraduationCap size={18} className="text-brand-gold" /> Filières Majeures et Reconnues
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Ingénierie", desc: "Programmes d'excellence en génie civil, génie mécanique, chimie, électronique et informatique." },
                  { name: "Informatique & Technologies (TIC)", desc: "Pôle d'innovation centré sur la cybersécurité, l'intelligence artificielle, la science des données et le développement de logiciels." },
                  { name: "Affaires & Gestion", desc: "Formations très prisées axées sur la finance internationale, le marketing, la gestion de projet et les ressources humaines." },
                  { name: "Sciences de la Santé", desc: "Options de spécialisation avancées en médecine générale, pharmacie, odontologie et kinésithérapie." },
                  { name: "Architecture & Design", desc: "Inspiré par le paysage urbain local : architecture avant-gardiste, design d'intérieur, graphique et produit." },
                  { name: "Droit", desc: "Étude des structures et cadres juridiques émergents d'un pôle d'affaires international." }
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

          {/* SECTION 2 : SYSTEME D'ETUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> Organisation du Système Universitaire
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les Émirats Arabes Unis comptent **116 établissements d'enseignement supérieur**, dont près de 50% sont implantés à Dubaï. Les universités publiques et privées s'alignent sur le modèle international **LMD** :
            </p>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Licence (Bachelor's Degree) :</strong> Premier cycle fondamental axé sur l'acquisition de spécialisations opérationnelles.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Master (Mestrado) :</strong> Cursus de 1 à 2 ans à temps plein (et jusqu'à 5 ans à temps partiel) pour approfondir son expertise.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Doctorat (PhD) :</strong> Programmes de recherche de haut niveau au sein de laboratoires à la pointe de la technologie.</span>
              </li>
            </ul>
          </div>

          {/* SECTION 3 : PROCEDURE DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Démarche d'Inscription Étape par Étape
            </h2>
            <div className="space-y-3">
              {[
                { step: "Choix du programme", desc: "Sélectionnez votre domaine d'études et contrôlez les critères requis. Les cours étant majoritairement en anglais, un test de langue valide est indispensable." },
                { step: "Dépôt du dossier académique", desc: "Les admissions sont traitées directement par l'établissement visé. Vous devez soumettre les formulaires, copies de passeport, diplômes et relevés de notes traduits." },
                { step: "Vérification des critères spécifiques", desc: "Consultez scrupuleusement la documentation propre à chaque université. En cas de doute, prenez contact avec les départements d'admission concernés." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                  <strong className="text-brand-blue block font-extrabold">{i+1}. {item.step}</strong>
                  <p className="font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-medium">
              <strong>🇬🇧 Besoin de passer le TOEFL ou l'IELTS ?</strong> Attaleb.ma sécurise votre préparation linguistique et vous accompagne dans la réservation de vos créneaux d'examen officiels.
            </div>
          </div>

          {/* SECTION 4 : BUDGET ET FRAIS D'ÉTUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <DollarSign size={18} className="text-brand-gold" /> Budget Annuel & Coût de la Scolarité
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Bien que prestigieux, le coût global des études aux Émirats Arabes Unis reste compétitif si on le compare aux campus mères situés aux USA ou en Australie :
              </p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Premier Cycle (Licence / Bachelor)</strong>
                  Prévoir entre <span className="text-brand-blue font-bold">100 000 DH et 260 000 DH</span> par an.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1">Deuxième Cycle (Master / Postgrad)</strong>
                  Prévoir entre <span className="text-brand-blue font-bold">130 000 DH et 270 000 DH</span> par an.
                </div>
              </div>
            </div>

            {/* SECTION 5 : CRITÈRES VISA */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <Key size={18} className="text-brand-gold" /> Formalités de Visa Étudiant
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Dès confirmation de votre inscription, les démarches s'effectuent en ligne via l'Autorité Fédérale de l'Identité et de la Citoyenneté (ICA) ou la Direction Générale du Séjour (GDRFA).
              </p>
              
              <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 my-2 rounded-r-xl text-xs text-slate-700 font-medium">
                <strong> Sponsor Universitaire :</strong> Pour obtenir votre visa, vous devez disposer d'un garant aux Émirats. Si vous n'avez pas de proches sur place, **la majorité des universités émiraties se chargent de parrainer votre dossier de visa**.
              </div>

              <div className="space-y-2.5">
                {[
                  { title: "Passeport en cours de validité", desc: "Doit être valide pour l'intégralité de la période demandée." },
                  { title: "Preuve d'admission officielle", desc: "Lettre d'acceptation ferme émise par l'établissement d'accueil émirati." },
                  { title: "Garantie financière", desc: "Présentation des relevés de compte bancaire officiels de votre parrain ou garant." },
                  { title: "Validité du titre", desc: "Le visa d'étudiant est octroyé pour une durée d'un an renouvelable sur présentation d'un justificatif de poursuite d'études." }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>{req.title} :</strong> {req.desc}</span>
                  </div>
                ))}
              </div>
              <p className="text-[10px] text-slate-400 font-medium">* Pièces complémentaires requises : Formulaire officiel de demande, extrait d'acte de naissance et photos d'identité en couleur.</p>
            </div>
          </div>

          {/* SECTION BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Programmes de Bourses d'Élite (Exemple de l'Institut Masdar)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              L'Institut Masdar des Sciences et Technologies d'Abou Dabi attribue chaque année **10 bourses d'études complètes** spécifiques aux profils marocains en Master. L'évaluation académique repose sur les critères stricts suivants :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-0.5">Diplôme initial</strong>
                Titulaire d'un diplôme universitaire validé dans le secteur des sciences ou de l'ingénierie.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-0.5">Moyenne requise</strong>
                GPA minimal de **3.0 sur 4.0** (ce qui équivaut à une moyenne minimale de **15 sur 20**).
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-0.5">Score Examen GRE</strong>
                Résultat minimal de **155** dans la section d'analyse quantitative.
              </div>
              <div className="p-3 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-0.5">Seuils linguistiques</strong>
                Score minimal de **91 au TOEFL iBT** ou de **6.1 à l'examen de l'IELTS**.
              </div>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Tableau Top 10 permanent */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top 10 Universités aux EAU
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                "Khalifa University",
                "United Arab Emirates University",
                "American University of Sharjah",
                "University of Sharjah",
                "Zayed University",
                "Al Ain University",
                "Abu Dhabi University",
                "Ajman University",
                "Canadian University of Dubai",
                "American University in Dubai"
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

          {/* Rappel Plateforme Attaleb */}
          <div className="bg-gradient-to-br from-slate-50 to-slate-100 p-5 rounded-2xl border border-slate-200 text-center space-y-2">
            <span className="text-lg"></span>
            <p className="text-[11px] text-slate-600 font-medium leading-relaxed">
              <strong>Attaleb.ma</strong> sécurise votre avenir en vous offrant un panel diversifié d'universités émiraties partenaires afin de maximiser vos probabilités d'acceptation.
            </p>
          </div>

          {/* Card CTA de Contact */}
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