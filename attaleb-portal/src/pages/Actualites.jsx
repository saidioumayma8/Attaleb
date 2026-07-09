import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, BookOpen, Share2, Award, ChevronRight } from 'lucide-react';

export default function Actualites() {
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(null);

  // Article Database
  const articles = [
    {
      id: "telquel",
      category: "Presse",
      date: "02 Juil 2026",
      readTime: "5 min de lecture",
      source: "TelQuel (Sponsor)",
      title: "Attaleb : un accompagnement 360° pour construire les parcours académiques de demain",
      subtitle: "Le cabinet d'orientation et de soutien scolaire Attaleb redéfinit l'accompagnement des étudiants marocains en alliant dimension humaine et innovation digitale.",
      img: "https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1200&q=80",
      desc: "Découvrez notre vision de l'orientation et de l'accompagnement étudiant à l'ère digitale, parue dans le média national TelQuel.",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed font-light text-sm md:text-base">
          <p className="font-semibold text-slate-800 text-base md:text-lg leading-relaxed">
            Trop souvent réduit à un simple cabinet d'orientation et d'inscription à l'étranger, 
            <strong> Attaleb</strong> se positionne comme un partenaire d'accompagnement global sur le long terme. 
            Sous l'impulsion de son fondateur, <strong>Amine Harifi</strong>, l'entreprise marocaine a structuré son offre 
            autour de quatre piliers majeurs pour répondre précisément aux besoins des lycéens et futurs bacheliers.
          </p>

          <blockquote className="border-l-4 border-brand-gold bg-slate-50 p-5 italic text-slate-600 rounded-r-2xl my-6">
            "Notre mission dépasse la simple démarche administrative. Nous aidons chaque jeune à transformer une simple recherche d'informations en un véritable projet académique et professionnel concret, en alliant excellence académique, ouverture internationale et esprit d'entreprise."
            <span className="block mt-2 text-xs font-bold text-brand-blue not-italic">— Amine Harifi, Fondateur d'Attaleb</span>
          </blockquote>

          <h3 className="text-lg md:text-xl font-black text-brand-blue uppercase pt-4 border-b border-slate-100 pb-2 flex items-center gap-2">
            <Award className="text-brand-gold" size={20} />
            Les Quatre Piliers d'une Réussite Sécurisée
          </h3>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
            <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="text-brand-gold font-black text-sm uppercase tracking-wider mb-2">01. Soutien Scolaire</div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Consolidation et renforcement des acquis pour les lycéens et futurs bacheliers. À travers des centres physiques modernes et des outils numériques de pointe, nous aidons les étudiants à maximiser leur moyenne générale et leur score au baccalauréat.
              </p>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="text-brand-gold font-black text-sm uppercase tracking-wider mb-2">02. Préparation aux Concours</div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Un entraînement rigoureux pour surmonter les examens d'admission des plus grandes universités internationales (examens SAT, GMAT, GRE, SESAME, etc.) ainsi que les concours d'accès aux grandes écoles marocaines.
              </p>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="text-brand-gold font-black text-sm uppercase tracking-wider mb-2">03. Orientation & Inscription</div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Une analyse personnalisée de chaque profil pour cibler les meilleures options universitaires. Nous assurons la constitution complète des dossiers académiques de candidature pour des parcours au Maroc et à l'étranger.
              </p>
            </div>
            <div className="bg-slate-50/60 p-5 rounded-2xl border border-slate-100 hover:bg-white hover:shadow-md transition-all duration-300">
              <div className="text-brand-gold font-black text-sm uppercase tracking-wider mb-2">04. Bourses d'Études</div>
              <p className="text-xs text-slate-600 leading-relaxed font-light">
                Accompagnement stratégique pour identifier et postuler aux bourses d'excellence et aux aides de financement proposées par nos universités partenaires à l'échelle internationale.
              </p>
            </div>
          </div>

          <h3 className="text-lg md:text-xl font-black text-brand-blue uppercase pt-6 border-b border-slate-100 pb-2">
            La Révolution Digitale : L'Application Mobile Attaleb
          </h3>
          
          <p className="text-sm">
            Pour moderniser l'orientation scolaire, Attaleb a lancé son application mobile propriétaire. Cette solution 
            digitale innovante permet aux étudiants de :
          </p>

          <ul className="space-y-3 pl-2 text-xs md:text-sm text-slate-600">
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-black">✓</span>
              <span><strong>Explorer</strong> des centaines d'universités accréditées dans plus de 12 pays (France, Espagne, Canada, Allemagne, Royaume-Uni, etc.).</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-black">✓</span>
              <span><strong>Comparer</strong> précisément les programmes, les frais de scolarité et les exigences linguistiques.</span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-brand-gold font-black">✓</span>
              <span><strong>Constituer et gérer</strong> leurs dossiers de candidature directement depuis leur smartphone, de manière intuitive et sécurisée.</span>
            </li>
          </ul>

          <p className="text-sm pt-2">
            En combinant l'intelligence technologique de sa plateforme et le coaching humain hautement qualifié de ses conseillers, 
            Attaleb trace une nouvelle voie dans l'accompagnement étudiant. C'est l'assurance d'un projet d'études maîtrisé de bout en bout.
          </p>
        </div>
      )
    },
    {
      id: "canada-bourses-2026",
      category: "Bourses",
      date: "05 Juil 2026",
      readTime: "4 min de lecture",
      source: "Attaleb News",
      title: "Nouvelles bourses d'études au Canada pour l'année 2026-2027",
      subtitle: "Les opportunités d'excellence académique s'ouvrent pour les étudiants internationaux dans nos universités partenaires.",
      img: "https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1200&q=80",
      desc: "Découvrez les conditions d'éligibilité et les critères de sélection pour les nouvelles bourses d'excellence offertes par les universités partenaires canadiennes.",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed font-light text-sm md:text-base">
          <p>
            Le gouvernement canadien et les universités partenaires d'Attaleb viennent d'annoncer les nouvelles grilles 
            de bourses d'études pour la rentrée 2026-2027. Ces bourses visent à attirer les meilleurs profils marocains, 
            en particulier dans les disciplines technologiques, médicales et scientifiques.
          </p>
          <p>
            Pour postuler, l'étudiant doit justifier d'un excellent parcours académique au lycée ou à l'université, et 
            présenter un dossier structuré démontrant ses motivations. Nos conseillers Attaleb se chargent de cibler 
            les bourses adaptées et d'optimiser les lettres de recommandation.
          </p>
        </div>
      )
    },
    {
      id: "prepas-concours-2026",
      category: "Concours",
      date: "28 Juin 2026",
      readTime: "3 min de lecture",
      source: "Attaleb News",
      title: "Ouverture des inscriptions aux préparations médecine & ingénierie",
      subtitle: "Boostez vos chances de réussite aux examens d'admission des facultés nationales et internationales.",
      img: "https://images.unsplash.com/photo-1434030216411-0b793f4b4173?auto=format&fit=crop&w=1200&q=80",
      desc: "Les sessions intensives de préparation aux concours d'accès aux facultés de médecine (FMP) et aux écoles d'ingénieurs commencent bientôt. Inscrivez-vous dès maintenant.",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed font-light text-sm md:text-base">
          <p>
            La concurrence pour intégrer les facultés de médecine et de pharmacie, ainsi que les grandes écoles d'ingénieurs, 
            est de plus en plus rude. Attaleb lance son programme annuel de préparation intensive.
          </p>
          <p>
            Au programme : révisions ciblées des matières scientifiques, examens blancs dans les conditions réelles, 
            méthodologie de gestion du temps, et correction détaillée par des professeurs experts.
          </p>
        </div>
      )
    },
    {
      id: "ielts-toefl-2026",
      category: "Langues",
      date: "15 Juin 2026",
      readTime: "5 min de lecture",
      source: "Attaleb News",
      title: "Session spéciale préparation IELTS & TOEFL pour étudiants",
      subtitle: "Validez votre niveau d'anglais et accédez aux meilleures universités anglophones mondiales.",
      img: "https://images.unsplash.com/photo-1544717305-2782549b5136?auto=format&fit=crop&w=1200&q=80",
      desc: "Boostez votre score aux certifications d'anglais requises pour l'admission dans les universités internationales avec nos formateurs certifiés.",
      content: (
        <div className="space-y-6 text-slate-700 leading-relaxed font-light text-sm md:text-base">
          <p>
            Que ce soit pour étudier au Royaume-Uni, au Canada, aux États-Unis ou dans des programmes anglophones en Europe, 
            un score minimal au test IELTS ou TOEFL est quasi systématiquement exigé.
          </p>
          <p>
            Attaleb organise une session intensive de formation centrée sur les 4 compétences clés testées : l'écoute, 
            la lecture, l'écriture et l'expression orale. Inscrivez-vous pour maximiser vos scores.
          </p>
        </div>
      )
    }
  ];

  // Sync selected article on url query param changes (?article=id)
  useEffect(() => {
    const params = new URLSearchParams(location.search);
    const articleId = params.get('article');
    if (articleId) {
      const match = articles.find(a => a.id === articleId);
      if (match) {
        setSelectedArticle(match);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        return;
      }
    }
    setSelectedArticle(null);
  }, [location.search]);

  return (
    <div className="bg-slate-50 min-h-screen text-slate-800 font-sans pb-16">

      <Helmet>
            <title>Actualités | Attaleb</title>
            <meta name="description" content="Retrouvez l'actualité de notre cabinet, nos communiqués officiels et nos parutions médiatiques." />
          </Helmet>
      {/* HEADER SECTION */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-16 text-center flex items-center justify-center min-h-[250px] md:min-h-[300px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(15, 44, 89, 0.9), rgba(12, 35, 71, 0.8)), url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?auto=format&fit=crop&w=1600&q=80')`,
          backgroundPosition: "center"
        }}
      >
        <div className="max-w-4xl mx-auto px-4 relative z-10">
          <span className="text-brand-gold text-xs font-black tracking-widest uppercase mb-2 block">Cabinet Attaleb</span>
          <h1 className="text-2xl md:text-4xl lg:text-5xl font-black tracking-tight uppercase text-white">
            {selectedArticle ? selectedArticle.category : "Actualités & Presse"}
          </h1>
          <p className="text-xs md:text-sm text-slate-200 mt-3 max-w-xl mx-auto font-light leading-relaxed">
            {selectedArticle 
              ? selectedArticle.title 
              : "Retrouvez l'actualité de notre cabinet, nos communiqués officiels et nos parutions médiatiques."}
          </p>
        </div>
      </section>

      {/* ARTICLE DETAILS MODE */}
      {selectedArticle ? (
        <div className="max-w-7xl mx-auto px-4 mt-8">
          {/* Breadcrumbs & Back button */}
          <div className="flex items-center justify-between mb-6">
            <Link 
              to="/actualites" 
              className="inline-flex items-center gap-2 text-xs font-black text-brand-blue hover:text-brand-gold transition-colors uppercase tracking-wider"
            >
              <ArrowLeft size={16} /> Retour aux actualités
            </Link>
            <div className="flex gap-2">
              <span className="bg-brand-blue text-white text-[9px] font-black tracking-wider uppercase px-3 py-1 rounded-full">
                {selectedArticle.category}
              </span>
              <span className="bg-brand-gold/10 text-brand-goldHover text-[9px] font-black tracking-wider uppercase px-3 py-1 rounded-full">
                {selectedArticle.source}
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-start">
            {/* Main Article Content */}
            <div className="lg:col-span-2 bg-white rounded-3xl p-6 md:p-8 shadow-sm border border-slate-200/50">
              
              <div className="flex items-center gap-4 text-xs text-slate-400 font-bold mb-4 uppercase">
                <span className="flex items-center gap-1"><Calendar size={14} /> {selectedArticle.date}</span>
                <span className="flex items-center gap-1"><Clock size={14} /> {selectedArticle.readTime}</span>
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-black text-brand-blue leading-snug uppercase mb-4">
                {selectedArticle.title}
              </h2>
              
              <p className="text-sm md:text-base text-slate-500 font-medium leading-relaxed italic mb-8 border-l-2 border-slate-200 pl-4">
                {selectedArticle.subtitle}
              </p>

              <div className="relative h-64 md:h-[400px] w-full rounded-2xl overflow-hidden mb-8 shadow-inner">
                <img 
                  src={selectedArticle.img} 
                  alt={selectedArticle.title} 
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="article-body">
                {selectedArticle.content}
              </div>

              <div className="mt-12 pt-6 border-t border-slate-100 flex items-center justify-between">
                <div className="text-xs text-slate-400 font-bold">
                  Partager cet article
                </div>
                <div className="flex gap-2">
                  <button 
                    onClick={() => {
                      navigator.clipboard.writeText(window.location.href);
                      alert("Lien copié dans le presse-papiers !");
                    }} 
                    className="p-2 bg-slate-100 hover:bg-brand-gold hover:text-white rounded-full text-slate-500 transition-colors"
                    title="Copier le lien"
                  >
                    <Share2 size={16} />
                  </button>
                </div>
              </div>
            </div>

            {/* Sidebar (Other Articles) */}
            <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200/50 space-y-6">
              <h3 className="text-sm font-black text-brand-blue uppercase tracking-widest border-b border-slate-100 pb-3 flex items-center gap-2">
                <BookOpen size={16} className="text-brand-gold" />
                Autres publications
              </h3>
              
              <div className="space-y-4">
                {articles.filter(a => a.id !== selectedArticle.id).map((art) => (
                  <Link 
                    key={art.id} 
                    to={`/actualites?article=${art.id}`}
                    className="flex gap-3 group border-b border-slate-100 pb-4 last:border-0 last:pb-0 block"
                  >
                    <div className="w-16 h-16 rounded-xl overflow-hidden shrink-0 bg-slate-100">
                      <img 
                        src={art.img} 
                        alt={art.title} 
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                    </div>
                    <div>
                      <span className="text-[9px] font-black text-brand-gold uppercase tracking-wider block mb-1">
                        {art.category}
                      </span>
                      <h4 className="text-xs font-bold text-slate-700 group-hover:text-brand-blue transition-colors line-clamp-2 leading-snug">
                        {art.title}
                      </h4>
                      <span className="text-[9px] text-slate-400 block mt-1">
                        {art.date}
                      </span>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      ) : (
        /* ARTICLES LISTING MODE */
        <div className="max-w-7xl mx-auto px-4 mt-12">
          {/* Section Info Header */}
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200/60">
            <div>
              <span className="text-[11px] font-black tracking-widest text-brand-gold uppercase">Toutes nos parutions</span>
              <h2 className="text-xl md:text-2xl font-black text-brand-blue uppercase mt-1">Cabinet Attaleb actualités</h2>
            </div>
            <p className="text-xs text-slate-400 mt-2 md:mt-0 font-medium">
              Affichage de {articles.length} publications
            </p>
          </div>

          {/* Featured Article Card (TelQuel) */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/50 mb-10 group hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 md:h-80 lg:h-full min-h-[300px] overflow-hidden bg-slate-100">
                <img 
                  src={articles[0].img} 
                  alt={articles[0].title} 
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-102 transition-transform duration-500"
                />
                <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-black tracking-widest uppercase px-4 py-1.5 rounded-full shadow-md">
                  À la Une • {articles[0].category}
                </div>
              </div>
              <div className="p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <div className="flex items-center gap-3 text-xs text-slate-400 font-bold mb-3 uppercase">
                    <span>{articles[0].date}</span>
                    <span>•</span>
                    <span>{articles[0].readTime}</span>
                    <span>•</span>
                    <span className="text-brand-gold">{articles[0].source}</span>
                  </div>
                  <h3 className="text-xl md:text-2xl font-black text-brand-blue uppercase tracking-wide mb-4 leading-snug group-hover:text-brand-gold transition-colors duration-300">
                    {articles[0].title}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-500 font-light leading-relaxed mb-6">
                    {articles[0].desc}
                  </p>
                </div>
                <div>
                  <Link 
                    to={`/actualites?article=${articles[0].id}`} 
                    className="inline-flex items-center gap-2 text-xs font-black text-white bg-brand-blue hover:bg-brand-gold border-2 border-brand-blue hover:border-brand-gold rounded-full px-6 py-3 transition-all duration-300 uppercase tracking-widest"
                  >
                    Lire l'article complet
                    <ChevronRight size={14} />
                  </Link>
                </div>
              </div>
            </div>
          </div>

          {/* Remaining Articles Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {articles.slice(1).map((news) => (
              <div key={news.id} className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200/50 flex flex-col justify-between hover:shadow-md transition-all duration-300 group">
                <div className="relative h-48 overflow-hidden bg-slate-100">
                  <img 
                    src={news.img} 
                    alt={news.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500 ease-in-out"
                  />
                  <div className="absolute top-4 left-4 bg-brand-gold text-white text-[10px] font-black tracking-widest uppercase px-3 py-1 rounded-full shadow-sm">
                    {news.category}
                  </div>
                </div>

                <div className="p-6 flex flex-col flex-1">
                  <div className="flex items-center justify-between text-[10px] text-slate-400 font-bold mb-3 uppercase tracking-wider">
                    <span>{news.date}</span>
                    <span>{news.readTime}</span>
                  </div>
                  <h3 className="text-sm md:text-base font-black text-brand-blue uppercase tracking-wide mb-3 leading-snug group-hover:text-brand-gold transition-colors duration-300 line-clamp-2">
                    {news.title}
                  </h3>
                  <p className="text-xs text-slate-600 font-light leading-relaxed mb-4 flex-1 line-clamp-3">
                    {news.desc}
                  </p>
                  <Link 
                    to={`/actualites?article=${news.id}`} 
                    className="inline-flex items-center gap-1.5 text-[11px] font-black text-brand-gold hover:text-brand-blue uppercase tracking-widest group/link transition-colors"
                  >
                    Lire la suite 
                    <ChevronRight size={12} className="group-hover/link:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
