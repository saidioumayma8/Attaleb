import React, { useState, useEffect } from 'react';
import { useLocation, Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Clock, Share2, Award, ChevronRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Actualites() {
  const location = useLocation();
  const [selectedArticle, setSelectedArticle] = useState(null);

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
            Trop souvent réduit à un simple cabinet d'orientation et d'inscription à l'étranger,{' '}
            <strong>Attaleb</strong> se positionne comme un partenaire d'accompagnement global sur le long terme.
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
    }
  ];

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

      {/* HEADER */}
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

      {/* ARTICLE DETAIL MODE */}
      {selectedArticle ? (
        <div className="max-w-4xl mx-auto px-4 mt-8">
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

          <div className="bg-white rounded-3xl p-6 md:p-10 shadow-sm border border-slate-200/50">
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
              <div className="text-xs text-slate-400 font-bold">Partager cet article</div>
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
      ) : (
        /* LISTING MODE */
        <div className="max-w-7xl mx-auto px-4 mt-12">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 pb-4 border-b border-slate-200/60">
            <div>
              <span className="text-[11px] font-black tracking-widest text-brand-gold uppercase">Toutes nos parutions</span>
              <h2 className="text-xl md:text-2xl font-black text-brand-blue uppercase mt-1">Cabinet Attaleb actualités</h2>
            </div>
            <p className="text-xs text-slate-400 mt-2 md:mt-0 font-medium">
              Affichage de 1 publication
            </p>
          </div>

          {/* Featured Article Card */}
          <div className="bg-white rounded-3xl overflow-hidden shadow-sm border border-slate-200/50 group hover:shadow-md transition-shadow">
            <div className="grid grid-cols-1 lg:grid-cols-2">
              <div className="relative h-64 md:h-80 lg:h-full min-h-[300px] overflow-hidden bg-slate-100">
                <img
                  src={articles[0].img}
                  alt={articles[0].title}
                  className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
        </div>
      )}
    </div>
  );
}
