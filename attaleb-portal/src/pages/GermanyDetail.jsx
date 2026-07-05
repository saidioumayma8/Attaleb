import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Award, BookOpen, Key, DollarSign, GraduationCap, Calendar } from 'lucide-react';


function GermanyDetail() {
  return (
    <div>
      <Helmet>
        <title>Étudier en Allemagne | Attaleb.net</title>
        <meta name="description" content="Découvrez pourquoi l'Allemagne est une destination d'études internationales privilégiée pour les étudiants marocains." />
      </Helmet>
    </div>
  );
}

export default function GermanyDetail() {
  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1467269204594-9661b134dd2b?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <Link to="/destinations" className="text-xs text-brand-gold hover:underline inline-block mb-2 uppercase tracking-wider font-bold">
            ← Retour aux destinations
          </Link>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            ÉTUDIER EN <span className="text-brand-gold">ALLEMAGNE</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed drop-shadow-sm">
            Deuxième destination mondiale des étudiants marocains après la France.
          </p>
        </div>
      </section>

      {/* 2. Contenu en défilement unique (Pas d'onglets) */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne Principale de gauche (2/3 de l'espace) */}
        <div className="lg:col-span-2 space-y-8">
          
          {/* SECTION 1 : POURQUOI L'ALLEMAGNE & FILIÈRES */}
          <div className="space-y-6">
            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
                <Award size={18} className="text-brand-gold" /> Pourquoi choisir l'Allemagne ?
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-medium text-slate-600">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Excellence & Recherche</strong>
                  Reconnue mondialement pour sa recherche de pointe et ses diplômes hautement respectés à l'international.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Scolarité Abordable</strong>
                  Des frais de scolarité quasi gratuits ou très bas dans le public, complétés par de nombreuses aides et bourses.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Insertion Professionnelle</strong>
                  Leader mondial de l'industrie, offrant des accès simples aux stages et des débouchés rapides pour les profils qualifiés.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100">
                  <strong className="text-brand-blue block mb-1"> Vie Étudiante Active</strong>
                  Campus extrêmement dynamiques proposant une multitude d'associations, de clubs variés et d'événements culturels.
                </div>
              </div>
            </div>

            <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <GraduationCap size={18} className="text-brand-gold" /> Filières d'Excellence Clés
              </h3>
              <div className="space-y-3">
                {[
                  { name: "L'Ingénierie", desc: "Automobile, aéronautique, construction mécanique, robotique et énergies renouvelables." },
                  { name: "La Médecine", desc: "Leader mondial en recherche médicale : pôles majeurs en génétique, neurobiologie et oncologie." },
                  { name: "L'Intelligence Artificielle (IA)", desc: "Recherches hyper poussées en apprentissage automatique soutenu par des centres nationaux d'élite." },
                  { name: "Les Sciences de l'Espace", desc: "Acteur mondial de l'astronomie grâce à de fortes contributions aux projets de l'ESA et de la NASA." }
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
              Le système général allemand suit l'architecture européenne <strong>LMD</strong> (Licence, Master, Doctorat) :
            </p>
            <ul className="list-none space-y-2.5 text-xs text-slate-600 font-medium">
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Bachelor (Licence) :</strong> 3 à 4 années d'études pour acquérir les compétences de base fondamentales.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Master Degree :</strong> Spécialisation poussée sur 2 ans se clôturant par la rédaction d'un mémoire de recherche.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-brand-gold font-bold">•</span>
                <span><strong>Le Doctorat (Ph.D.) :</strong> Niveau Bac+8, exclusivement axé sur l'enseignement universitaire supérieur et la recherche pure.</span>
              </li>
            </ul>

            <div className="bg-brand-blue/5 border-l-4 border-brand-blue p-4 my-4 rounded-r-xl space-y-1">
              <h4 className="font-black text-xs text-brand-blue uppercase">La Spécificité Allemande : La Fachhochschule</h4>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">
                Équivalente aux IUT en France, cette voie est extrêmement populaire. L'apprentissage y est dispensé en petits groupes et s'articule entièrement autour de la <strong>pratique professionnelle immédiate</strong> (Gestion, Informatique, Sciences de l'ingénieur, Arts appliqués).
              </p>
            </div>
          </div>

          {/* SECTION 3 : ENGLISH PROGRAMS */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
            <h2 className="text-base font-black text-brand-blue uppercase tracking-tight flex items-center gap-2">
              <Calendar size={18} className="text-brand-gold" /> "English-Taught Programs" (Cursus en Anglais)
            </h2>
            <p className="text-xs text-slate-600 leading-relaxed font-medium">
              De plus en plus d'universités allemandes ouvrent des cursus entièrement dispensés en langue anglaise (souvent labellisés « International Programs »).
            </p>
            <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 space-y-2">
              <strong className="text-brand-blue block font-extrabold">Filières disponibles :</strong>
              <p className="font-medium">Très fréquents en <strong>Économie</strong> et <strong>Sciences Sociales</strong>. Ils se développent également rapidement pour la Médecine, les Sciences Naturelles et l'Agriculture.</p>
            </div>
            <div className="p-4 bg-amber-50 border border-amber-200 text-amber-900 rounded-xl text-xs font-medium">
              <strong> Obligation linguistique :</strong> Pour être éligible à ces programmes en anglais, l'étudiant doit obligatoirement valider et fournir un certificat international officiel de type <strong>IELTS</strong> ou <strong>TOEFL</strong>.
            </div>
          </div>

          {/* SECTION 4 : ADMISSION & CONDITIONS DE CANDIDATURE */}
          <div className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-6">
            <div className="space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <Key size={18} className="text-brand-gold" /> Conditions de Candidature (Selon votre niveau)
              </h3>
              
              <div className="space-y-3">
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                  <strong className="text-brand-blue block mb-1 font-extrabold">Option A : Vous viens d'obtenir votre Baccalauréat</strong>
                  L'inscription au <strong>Studienkolleg</strong> est obligatoire. Cette année préparatoire comble l'écart de connaissances. L'accès requiert un examen d'entrée en allemand, et se valide par un examen de fin d'année.
                </div>
                <div className="p-4 bg-slate-50 rounded-xl border border-slate-100 text-xs text-slate-600 font-medium">
                  <strong className="text-brand-blue block mb-1 font-extrabold">Option B : Vous avez validé une année universitaire (Bac+1 ou plus)</strong>
                  Vous pouvez intégrer directement l'université, sous réserve de réussir l'examen de langue officiel <strong>DSH</strong> (Deutsche Sprachprüfung für den Hochschulzugang).
                </div>
              </div>
            </div>

            {/* SECTION 5 : CRITÈRES VISA */}
            <div className="pt-6 border-t border-slate-100 space-y-4">
              <h3 className="text-base font-black text-brand-blue uppercase flex items-center gap-2">
                <br />
                <DollarSign size={18} className="text-brand-gold" /> Critères de Dossier Visa d'Études
              </h3>
              <div className="space-y-2.5">
                {[
                  { title: "Niveau B1 Minimum", desc: "L'Allemagne est l'unique pays de l'Union Européenne à accepter un niveau de langue B1 pour délivrer un visa étudiant." },
                  { title: "Garantie Financière (~100 000 DH)", desc: "Preuve de fonds suffisants via un compte bloqué pour couvrir les frais de séjour et de transport de retour." },
                  { title: "Prise en charge", desc: "Un garant direct (parents) ou un garant indirect résidant dans l'UE pouvant se substituer financièrement." }
                ].map((req, i) => (
                  <div key={i} className="flex items-start gap-2.5 text-xs text-slate-600 font-medium leading-relaxed bg-slate-50/50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" />
                    <span><strong>{req.title} :</strong> {req.desc}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

        </div>

        {/* 3. Colonne latérale droite (Fixe lors du défilement - 1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          
          {/* Tableau Top 10 permanent et scannable */}
          <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-100">
            <h3 className="text-xs font-black text-brand-blue uppercase tracking-wider mb-4 border-b pb-2 flex items-center gap-1.5">
              <span>🏛️</span> Top 10 Universités d'Élite
            </h3>
            <ol className="space-y-2.5 text-[11px] text-slate-700 font-bold">
              {[
                "Technical University of Munich (TUM)",
                "University of Heidelberg",
                "LMU Munich",
                "Freie Universität Berlin",
                "Humboldt University of Berlin",
                "Karlsruhe Institute of Technology (KIT)",
                "Technical University of Berlin",
                "RWTH Aachen University",
                "University of Freiburg",
                "University of Tübingen"
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