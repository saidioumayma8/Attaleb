import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, FileText, GraduationCap, Calendar, DollarSign } from 'lucide-react';

export default function USADetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1501594907352-04cda38ebc29?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER AUX <span className="text-brand-gold">ÉTATS-UNIS</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Une destination d'élite mondiale offrant une éducation de pointe et des opportunités de carrière uniques.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI LES ÉTATS-UNIS */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi faire ses études aux États-Unis ?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Destination phare par excellence, les États-Unis attirent chaque année de nombreux étudiants marocains grâce à un modèle académique performant axé sur le développement du potentiel individuel.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Haute Technologie & Recherche</strong>
                Accès aux laboratoires de pointe, aux dernières avancées technologiques et à une excellence académique mondiale.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Marché du Travail Dynamique</strong>
                Innombrables opportunités de stages professionnels, de projets au sein des campus et d'apprentissages en entreprise.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Bourses & Financements</strong>
                Multiples opportunités d'aides financières et bourses d'études accordées par les universités aux profils d'élite admis.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Croissance Personnelle</strong>
                Une expérience immersive pour booster son autonomie, son leadership et maîtriser parfaitement l'anglais.
              </div>
            </div>
          </div>

          {/* SECTION 2 : FILIÈRES PRISÉES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Filières d'Excellence les Plus Prisées
            </h2>
            <div className="space-y-3 pt-1">
              {[
                { name: "Programmes STEM", desc: "Sciences, Technologie, Ingénierie et Mathématiques. Idéal pour des carrières lucratives en informatique, biotechnologie et génie." },
                { name: "Business & Management", desc: "Solide socle de connaissances en administration des affaires, finance globale, comptabilité et stratégie." },
                { name: "Sciences Humaines & Sociales", desc: "Psychologie, sciences politiques, communication et journalisme, développant l'esprit critique et l'analyse." },
                { name: "Santé & Médecine", desc: "Cursus hautement respectés (médecine, soins infirmiers, pharmacie) reconnus pour leur nature pratique et leur impact." },
                { name: "Droit (Law Programs)", desc: "Formations exigeantes axées sur l'analyse juridique poussée, l'éthique et la plaidoirie." }
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

          {/* SECTION 3 : SYSTEME D'ETUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> Structure du Système Universitaire Américain
            </h2>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Associate Degree (A.A. / A.S.) — Niveau Bac+2</strong>
                Cursus de 2 ans dispensé par les *Community Colleges* ou certaines universités. Équivalent d'un DEUG, DUT ou BTS, il permet d'intégrer le marché de l'emploi ou de poursuivre en cycle Bachelor.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Bachelor's Degree — Niveau Licence (Bac+3 / Bac+4)</strong>
                Le diplôme universitaire fondamental qui s’obtient généralement en 3 ou 4 ans d’études. Il prépare idéalement à l'insertion ou aux cycles supérieurs.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Master's Degree — Niveau Master (Post-Graduate)</strong>
                Cycle supérieur de 2 ans d’études après le Bachelor. Deux orientations possibles selon le projet : Master professionnel ou Master de recherche.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Doctorate Degree (Ph.D.) — Niveau Doctorat</strong>
                Le titre académique le plus élevé, qui s'effectue généralement sur une période de 3 à 5 ans de recherche intensive après l'obtention du Master.
              </div>
            </div>
          </div>

          {/* SECTION 4 : PROCEDURES DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Processus global d'Admission
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Les exigences varient selon le niveau (*undergraduate, graduate* ou *doctorat*) et l'établissement. Les démarches s'organisent généralement de la manière suivante :
            </p>
            
            <ul className="list-none space-y-3 text-xs text-slate-600 font-medium pl-1">
              <li className="flex gap-2.5 items-start">
                <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">1</span>
                <div><strong>Sélection & Recherche :</strong> Choisir des universités proposant des programmes de qualité reconnus dans votre spécialité.</div>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">2</span>
                <div><strong>Vérification des exigences :</strong> Rassembler les pièces indispensables (Relevés de notes, lettre de motivation/essais, lettres de recommandation, proposition de recherche si applicable).</div>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">3</span>
                <div><strong>Tests Linguistiques & Standardisés :</strong> Valider le niveau d'anglais requis via les scores officiels de tests reconnus (TOEFL ou IELTS) et tests requis (SAT, GRE, GMAT).</div>
              </li>
              <li className="flex gap-2.5 items-start">
                <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">4</span>
                <div><strong>Soumission en ligne & Frais :</strong> Remplir le formulaire officiel d'admission sur la plateforme de l'université, joindre les pièces numériques et régler l'*Application Fee*.</div>
              </li>
            </ul>
          </div>

          {/* SECTION 5 : VISA ET SEVIS */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-2">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <FileText size={18} className="text-brand-gold" /> Les Différents Visas Étudiants & Formalités
              </h2>
              <p className="text-xs text-slate-600 font-medium leading-relaxed">
                Il existe 3 grands types de visas non-immigrants pour les parcours d'études :
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-3 text-[11px] pt-1">
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><span className="text-brand-blue font-extrabold block mb-0.5">Visa F-1</span> Pour les programmes d'études académiques et diplômants (Colleges, Universités).</div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><span className="text-brand-blue font-extrabold block mb-0.5">Visa M-1</span> Destiné aux formations purement techniques, professionnelles ou non-académiques.</div>
                <div className="p-3 bg-slate-50 rounded-xl border border-slate-100"><span className="text-brand-blue font-extrabold block mb-0.5">Visa J-1</span> Dédié aux étudiants en programmes officiels d'échanges culturels ou universitaires.</div>
              </div>
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-3">
              <h4 className="font-black text-xs text-brand-blue uppercase">Les étapes clés du visa :</h4>
              <div className="space-y-2.5 text-xs text-slate-600 font-medium">
                <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong>Formulaire I-20 (ou DS-2019) :</strong> Document de demande de visa officiel envoyé par l'école après acceptation réglementaire (agréée SEVP).</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong>Frais de traitement SEVIS :</strong> Redevance obligatoire à s'acquitter en ligne dès réception de l'I-20 (350 $ pour les visas F-1/M-1 et 220 $ pour le visa J-1).</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong>Formulaire DS-160 :</strong> Demande en ligne de visa non-immigrant regroupant l'historique personnel, le parcours scolaire et médical.</span>
                </div>
                <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                  <CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" />
                  <span><strong>Entretien Consulaire :</strong> Entrevue physique requise avec un agent des visas au Consulat/Ambassade des USA. Apporter impérativement : Passeport (valide +6 mois), confirmation DS-160, I-20 signé, reçu des frais, relevés de notes originaux et preuves solides de soutien financier (relevés bancaires ou affidavits de soutien d'au moins 3 500 € par année universitaire).</span>
                </div>
              </div>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Liste Top 10 permanent et scannable */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div>
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span>🏛️</span> Top 10 des Universités (USA)
              </h3>
              <p className="text-[10px] text-slate-500 font-medium leading-normal">
                Sélection d'institutions d'élite mondiales affichant des ratios d'étudiants internationaux élevés :
              </p>
            </div>
            
            <div className="space-y-2 border-t pt-3">
              {[
                { name: "Université de Harvard", total: "21 260", int: "4 526" },
                { name: "Université de Stanford", total: "15 861", int: "3 581" },
                { name: "MIT (Massachusetts)", total: "10 264", int: "2 726" },
                { name: "Université de Californie, Berkeley", total: "34 668", int: "3 140" },
                { name: "Université de Princeton", total: "7 508", int: "1 427" },
                { name: "Université de Columbia", total: "21 817", int: "5 280" },
                { name: "Caltech (California Inst. of Tech.)", total: "2 130", int: "532" },
                { name: "Université de Chicago", total: "13 070", int: "2 117" },
                { name: "Université de Yale", total: "11 491", int: "1 902" },
                { name: "Université de Cornell", total: "20 515", int: "3 387" }
              ].map((univ, idx) => (
                <div key={idx} className="bg-slate-50 p-2 rounded-lg border border-slate-100/60 text-[11px] font-bold text-slate-700 space-y-0.5">
                  <div className="flex items-center gap-2">
                    <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                      {idx + 1}
                    </span>
                    <span className="truncate text-brand-blueDark">{univ.name}</span>
                  </div>
                  <div className="flex justify-between pl-7 text-[9px] text-slate-400 font-medium">
                    <span>Total : {univ.total}</span>
                    <span className="text-brand-gold">Int. : {univ.int}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card CTA de Contact */}
          <div className="bg-brand-blue text-white p-6 rounded-2xl shadow-sm space-y-4 text-center">
            <h4 className="font-black text-sm uppercase tracking-wide text-brand-gold">Accompagnement USA</h4>
            <p className="text-[11px] text-slate-300 leading-relaxed font-medium">
              Attaleb.ma vous conseille et sécurise vos démarches d'admission et de visa. Mettez toutes les chances de votre côté pour intégrer le programme de vos rêves.
            </p>
            <div className="pt-2">
              <p className="text-[10px] text-slate-400 font-bold uppercase tracking-wider">Pour postuler, appelez-nous :</p>
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