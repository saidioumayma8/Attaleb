import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar } from 'lucide-react';

export default function RoyaumeUniDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER AU <span className="text-brand-gold">ROYAUME-UNI</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Une destination d'élite mondiale prisée pour son excellence académique et ses opportunités de financement.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI LE ROYAUME-UNI & FILIÈRES */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Award size={18} className="text-brand-gold" /> Pourquoi choisir le Royaume-Uni ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Prestige & Excellence</strong>
                  Les universités britanniques sont reconnues mondialement pour leur rigueur, leur diversité culturelle et leur réputation d'élite.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Financements & Bourses</strong>
                  Un large éventail de bourses nationales et universitaires est mis à disposition pour soutenir les excellents profils marocains.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Variété des Programmes</strong>
                  Des cursus extrêmement flexibles couvrant tous les domaines majeurs, des sciences de l'ingénieur jusqu'aux arts.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Réussite & Futur Brillant</strong>
                  Attaleb.ma s'engage activement à vous guider pour maximiser vos chances d'admission dans l'université de votre choix.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <GraduationCap size={18} className="text-brand-gold" /> Filières d'Excellence Clés
              </h3>
              <div className="space-y-3">
                {[
                  { name: "Sciences", desc: "Excellence reconnue en physique, chimie, biologie, informatique et mathématiques pure." },
                  { name: "Ingénierie", desc: "Programmes de haute qualité en ingénierie aéronautique, aérospatiale, mécanique et électronique." },
                  { name: "Médecine", desc: "Formations cliniques réputées à l'international appuyées par une recherche médicale de pointe." },
                  { name: "Droit", desc: "Diplômes prestigieux basés sur le droit britannique, mondialement reconnus par les institutions." },
                  { name: "Économie & Commerce", desc: "Programmes d'élite en finance, comptabilité, management et administration des affaires." },
                  { name: "Art & Design", desc: "Écoles de renommée mondiale, à l'image de Central Saint Martins et du Royal College of Art à Londres." },
                  { name: "Histoire & Culture", desc: "Enseignements riches en histoire de l'art, archéologie, littérature et arts du spectacle." }
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
              <BookOpen size={18} className="text-brand-gold" /> Organisation du Cursus Universitaire
            </h3>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Le système d'éducation britannique se distingue par sa souplesse, sa flexibilité et son découpage en 3 cycles d'études principaux :
            </p>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>1er cycle (Undergraduate) :</strong> Dure entre 3 et 4 ans et se conclut par l'obtention du Bachelor's Degree.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>2ème cycle (Postgraduate / Master) :</strong> Cursus de spécialisation intensive d'une durée d'une à deux années.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>3ème cycle (Doctorat / PhD) :</strong> Travaux de recherche avancés et rédaction de thèse d'une durée de 2 à 3 ans après le master.</span>
              </li>
            </ul>
          </div>

          {/* SECTION 3 : PROCEDURE DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Procédure de Candidature Étape par Étape
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Pour mener à bien votre projet d'admission, le parcours se divise en étapes indispensables :
            </p>
            <div className="space-y-3">
              {[
                { step: "Trouver son programme", desc: "Recherchez le cursus idéal parmi les établissements britanniques et contrôlez rigoureusement leurs exigences de sélection." },
                { step: "Demande d'admission", desc: "Soumettez votre candidature en ligne. Fournissez vos antécédents académiques, vos références et vos résultats de langue." },
                { step: "Obtention du Visa étudiant", desc: "Dès la réception de votre offre d'admission officielle, initiez vos formalités de visa auprès des autorités consulaires." },
                { step: "Frais de scolarité & Installation", desc: "Réglez vos frais universitaires (variables selon l'établissement), préparez vos justificatifs et planifiez votre arrivée." }
              ].map((item, i) => (
                <div key={i} className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-1">
                  <strong className="text-brand-blue block font-extrabold">{i+1}. {item.step}</strong>
                  <p className="font-medium leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-medium">
              <strong> Accompagnement Attaleb :</strong> L'équipe d'Attaleb.ma s'engage à orienter les étudiants marocains tout au long de ces procédures de choix et de dépôt de dossier.
            </div>
          </div>

          {/* SECTION 4 : ADMISSION & CONDITIONS DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <Key size={18} className="text-brand-gold" /> Conditions Générales d'Admission
              </h3>
              <div className="space-y-3 text-xs text-slate-600 font-medium">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1 font-extrabold">Diplôme Requis</strong>
                  Être obligatoirement titulaire au minimum du diplôme du <strong>Baccalauréat</strong>.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1 font-extrabold">Niveau de Langue Officiel</strong>
                  Justifier de votre maîtrise de l'anglais via le test officiel du <strong>IELTS</strong> avec un score minimal légal de <strong>5.5 sur 9</strong> (notez que de nombreuses universités exigent un score de 6.0 à 6.5 minimum).
                </div>
              </div>
            </div>

            {/* SECTION 5 : CRITÈRES VISA */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <DollarSign size={18} className="text-brand-gold" /> Exigences Financières & Dossier de Visa
              </h3>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                La demande de visa exige la présentation d'un dossier complet (Formulaire, Passeport valide, Justificatif d'hébergement, Invitation CAS officielle et attestation de test de tuberculose si demandée). La composante financière est essentielle :
              </p>
              
              <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 my-2 rounded-r-xl text-xs text-slate-700 font-medium space-y-2">
                <p><strong>Calcul de la pension mensuelle (sur 9 mois d'année scolaire) :</strong></p>
                <ul className="list-disc pl-4 space-y-1">
                  <li><strong>À Londres :</strong> 1 250 £ / mois</li>
                  <li><strong>Autres villes du Royaume-Uni :</strong> 1 000 £ / mois</li>
                  <li><strong>Total à bloquer :</strong> Équivaut à environ <strong>150 000 dirhams</strong> au total.</li>
                </ul>
              </div>

              <div className="space-y-2.5">
                {[
                  { title: "Règle des 28 jours", desc: "Ces fonds doivent obligatoirement rester disponibles de façon continue sur le compte bancaire pendant 28 jours consécutifs, matérialisés par des relevés 3 mois avant le rendez-vous du visa." },
                  { title: "Engagement du Garant", desc: "Fournir un engagement écrit et officiel du garant (parrain ou sponsor de votre voyage éducatif) assurant la prise en charge complète des besoins mensuels vitaux." },
                  { title: "Frais Supplémentaires", desc: "Le demandeur doit s'acquitter des frais réglementaires du visa ainsi que de la surcharge médicale complémentaire de santé (IHS)." },
                  { title: "Mineurs", desc: "Fournir un consentement parental officiel signé par les tuteurs légaux si l'étudiant a moins de 18 ans." }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                    <span><strong>{req.title} :</strong> {req.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* SECTION BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Bourses d'Études & Financement
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les étudiants marocains peuvent prétendre à des financements et bourses d'études de niveaux Bac, Licence ou Master pour suivre un cursus complet de manière abordable ou gratuite :
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs text-slate-600 font-medium">
              {[
                "1. S'informer sur les bourses disponibles en Angleterre",
                "2. Maîtriser les exigences requises de ces bourses",
                "3. Valider les conditions d'admissions spécifiques",
                "4. Constituer un dossier de candidature rigoureux"
              ].map((step, idx) => (
                <div key={idx} className="p-3 bg-slate-50 rounded-xl border border-slate-100/80">
                  {step}
                </div>
              ))}
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Tableau Top 10 permanent et scannable */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span></span> Top 10 Universités d'Élite
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                { name: "University of St Andrews", info: "Psychologie & Communication | 20% d'étudiants int." },
                { name: "University of Oxford", info: "Philosophie & Langues | 14.5% d'étudiants int." },
                { name: "University of Cambridge", info: "Ingénierie, Économie & Architecture | 21.8% int." },
                { name: "Imperial College London", info: "Mathématiques, Physique & Aéronautique | 36% int." },
                { name: "London School of Economics (LSE)", info: "Recherche en Sciences Sociales | 25% int." },
                { name: "Durham University", info: "Expertise Économie & Comptabilité | 30% int." },
                { name: "University College London (UCL)", info: "Ingénierie Biomédicale & Médecine | ~33% int." },
                { name: "University of Warwick", info: "Cybersécurité & Sciences de l'ingénieur | 26% int." },
                { name: "University of Bath", info: "Sciences Politiques & Biomédicales | 30% int." },
                { name: "Loughborough University", info: "Arts & Langues Modernes | 17% d'étudiants int." }
              ].map((univ, idx) => (
                <li key={idx} className="flex flex-col gap-1 bg-slate-50 p-2 rounded-lg border border-slate-100/60">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span className="truncate">{univ.name}</span>
                  </div>
                  <span className="text-[10px] text-slate-500 font-medium pl-7">{univ.info}</span>
                </li>
              ))}
            </ol>
          </div>

          {/* Liste des meilleures bourses */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-3 border-b pb-2">
               Top 6 Bourses Universitaires
            </h3>
            <ul className="space-y-2 text-[11px] text-slate-600 font-medium">
              {[
                "Chevening Scholarships",
                "University of Liverpool Scholarship",
                "Queen’s University Belfast",
                "Alliance Manchester Business School",
                "University of Bristol Scholarship",
                "The University of Leicester Scholarship"
              ].map((b, idx) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="w-1.5 h-1.5 rounded-full bg-brand-gold shrink-0"></span>
                  <span>{b}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Coordonnées Ambassade */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 text-xs space-y-2 text-slate-600 font-medium">
            <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide border-b pb-1">🇬🇧 Ambassade du Royaume-Uni</h4>
            <p><strong>Adresse :</strong> 28 Avenue S.A.R. Sidi Mohammed Soussi, 10105 Souissi, BP 45, Rabat, Maroc.</p>
            <p><strong>Téléphone :</strong> +212 (0) 537 63 33 33</p>
          </div>

          {/* Card CTA de Contact */}
          <div className="bg-brand-blue text-white p-6 rounded-2xl shadow-sm space-y-4 text-center">
            <h4 className="font-black text-sm uppercase tracking-wide text-brand-gold">Accompagnement Royaume-Uni</h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              Besoin d'aide pour votre dossier d'admission, le test d'anglais IELTS ou la gestion de vos critères de fonds bancaires ?
            </p>
            <div className="pt-2">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Prenez rendez-vous avec un consultant :</p>
              <a href="tel:0631550128" className="text-sm font-black text-white block mt-0.5 tracking-wide bg-white/10 py-2 rounded-xl border border-white/10 hover:bg-white/20 transition-all">
                06 31 55 01 28
              </a>
            </div>
          </div>

        </div>
      </main>
    </div>
  );
}