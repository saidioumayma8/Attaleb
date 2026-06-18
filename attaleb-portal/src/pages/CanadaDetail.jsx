import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, FileText, GraduationCap, Calendar, DollarSign } from 'lucide-react';

export default function CanadaDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1507608869274-d3177c8bb4c7?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER AU <span className="text-brand-gold">CANADA</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Une éducation de prestige mondial, un environnement multiculturel accueillant et des passerelles d'immigration uniques pour les diplômés marocains.
          </p>
        </div>
      </section>

      {/* 2. Main Content Grid */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Left Column (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1: POURQUOI LE CANADA */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Award size={18} className="text-brand-gold" /> Pourquoi choisir le Canada ?
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Le Canada représente un choix stratégique et judicieux pour les étudiants marocains, alliant l'excellence académique à des perspectives d'avenir concrètes.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600 pt-2">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Qualité de l'Éducation</strong>
                Des diplômes reconnus à l'échelle internationale et des universités figurant aux premiers rangs des classements mondiaux.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Possibilités de Travail</strong>
                Autorisation de travailler pendant les études et obtention d'un permis de travail post-diplôme (PTPD) allant jusqu'à 3 ans.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Voie vers l'Immigration</strong>
                Des programmes simplifiés de résidence permanente dédiés spécifiquement aux diplômés internationaux.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                <strong className="text-brand-blue block mb-1">Qualité de Vie Exceptionnelle</strong>
                Un pays multiculturel, sécuritaire, offrant un accès à des soins de santé de premier ordre et un cadre de vie enrichissant.
              </div>
            </div>
          </div>

          {/* SECTION 2: FILIÈRES PRISÉES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <GraduationCap size={18} className="text-brand-gold" /> Filières les Plus Reconnues
            </h2>
            <div className="space-y-3 pt-1">
              {[
                { name: "Sciences & Technologies", desc: "Informatique, technologies de l'information et de la communication, biotechnologie." },
                { name: "Administration des Affaires", desc: "Programmes de commerce hautement populaires et compétitifs à travers le pays." },
                { name: "Sciences Sociales & Humaines", desc: "Formations réputées en psychologie, sociologie, sciences politiques, histoire et géographie." },
                { name: "Arts & Design", desc: "Architecture, beaux-arts, design graphique et cinéma de réputation mondiale." },
                { name: "Soins de Santé", desc: "Médecine, dentisterie, pharmacie et soins infirmiers avec stages pratiques en cliniques d'excellence." }
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

          {/* SECTION 3: SYSTEME D'ETUDES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <BookOpen size={18} className="text-brand-gold" /> Structure du Système Universitaire
            </h2>
            <p className="text-xs text-slate-600 font-medium leading-relaxed">
              L'éducation supérieure est gérée de manière autonome par les 10 provinces canadiennes. Les établissements se divisent en deux grandes catégories :
            </p>
            <div className="space-y-3">
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Les Universités (Baccalauréat, Maîtrise, Ph.D.)</strong>
                Elles proposent des cycles longs. Le Baccalauréat canadien équivaut à la Licence (3 à 4 ans). Les maîtrises et doctorats sont axés sur la recherche spécialisée. Notez que la médecine y est ultra-sélective pour les profils internationaux.
              </div>
              <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                <strong className="text-brand-blue block mb-1 font-extrabold">Les Collèges & CEGEP (Formations Courtes Professionnelles)</strong>
                Cursus de 1 à 3 ans axés sur la pratique (affaires, santé, technologie, design, médias). Idéal pour acquérir des compétences techniques directement demandées sur le marché du travail.
              </div>
            </div>
          </div>

          {/* SECTION 4: CONDITIONS ET PROCEDURES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> Conditions d'Accès & Démarches
            </h2>
            <div className="space-y-4 text-xs text-slate-600 font-medium">
              <p>Il existe deux sessions principales d'admission : <strong>Septembre (Automne)</strong> et <strong>Janvier (Hiver)</strong>. Certains collèges ouvrent aussi en avril et juillet.</p>
              
              <ul className="list-none space-y-3 pl-1">
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">1</span>
                  <div><strong>Admission :</strong> Choisir le programme et soumettre les relevés de notes, diplôme du Bac (ou Licence/Master) et une lettre de recommandation.</div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">2</span>
                  <div><strong>Exigences linguistiques :</strong> Fournir une preuve de maîtrise du français (TCF, DELF/DALF) ou de l'anglais (IELTS, TOEFL), cruciale même au Québec francophone.</div>
                </li>
                <li className="flex gap-2.5 items-start">
                  <span className="w-5 h-5 bg-brand-blue/5 text-brand-blue rounded-full flex items-center justify-center text-[10px] font-black shrink-0 mt-0.5">3</span>
                  <div><strong>Visa & Départ :</strong> Une fois l'acceptation reçue, lancer immédiatement les demandes de CAQ (pour le Québec) et de permis d'études.</div>
                </li>
              </ul>
            </div>
          </div>

          {/* SECTION 5: DEMANDE DE VISA */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <FileText size={18} className="text-brand-gold" /> Exigences pour le Permis d'Études (Visa)
            </h2>
            <div className="space-y-3 text-xs text-slate-600 font-medium">
              <p>Le dossier consulaire requiert obligatoirement les éléments clés suivants :</p>
              <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Preuves d'acceptation & d'identité :</strong> Lettre d'admission officielle de l'établissement d'enseignement désigné (EED) et passeport valide.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Garantie Financière :</strong> Un garant direct capable d'assurer les frais de subsistance et de scolarité de la première année (montant estimé entre 150 000 et 200 000 DH) ou un garant indirect résidant au Canada.</span>
              </div>
              <div className="flex items-start gap-2.5 bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                <span><strong>Documents annexes :</strong> Une lettre d'explication claire (projet d'études), l'attestation de délivrance du CAQ (Québec) et un examen médical réglementaire.</span>
              </div>
            </div>
          </div>

          {/* SECTION 6: BOURSES */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <DollarSign size={18} className="text-brand-gold" /> Bourses & Financements Cooperatifs
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              Pour alléger le coût annuel, le site officiel <span className="text-brand-blue font-bold">educanada.ca</span> liste l'éventail des bourses accessibles.
            </p>
            <div className="p-4 bg-amber-50/60 rounded-xl border border-amber-100 text-xs text-slate-700 font-medium">
              <strong className="text-amber-900 block mb-1"> Opportunité Spéciale Québec (Bourses d'Exemption) :</strong>
              Chaque année, le Québec propose aux étudiants marocains des bourses d'exemption des droits de scolarité supplémentaires pour la session d'automne. Les dossiers se déposent généralement avant la fin mai. Consultez la section « Bourses de coopération » sur <span className="underline font-bold text-brand-blue">dfc.gov.ma</span> dès le mois de janvier.
            </div>
          </div>

        </div>

        {/* Right Column (1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Top 10 Universities List */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <div>
              <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-1 flex items-center gap-1.5">
                <span></span> Top 10 des Universités (Canada)
              </h3>
              <p className="text-[10px] text-slate-500 font-medium leading-normal">
                Les institutions d'excellence les plus reconnues au niveau national et international :
              </p>
            </div>
            
            <div className="space-y-2 border-t pt-3">
              {[
                "Université de Toronto",
                "Université McGill",
                "Université de la Colombie-Britannique",
                "Université d’Alberta",
                "Université McMaster",
                "Université de Montréal",
                "Université de Waterloo",
                "Université Western",
                "Université de Calgary",
                "Université Queen's"
              ].map((name, idx) => (
                <div key={idx} className="bg-slate-50 p-2.5 rounded-lg border border-slate-100/60 text-[11px] font-bold text-slate-700 flex items-center gap-2">
                  <span className="w-5 h-5 bg-brand-blue text-white rounded-full flex items-center justify-center text-[9px] font-black shrink-0">
                    {idx + 1}
                  </span>
                  <span className="truncate text-brand-blueDark">{name}</span>
                </div>
              ))}
            </div>
          </div>

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