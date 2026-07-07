import React from 'react';
import { Link } from 'react-router-dom';


import destinationsBg from '../assets/image.png';

export default function Destinations() {

  const allDestinations = [
    { 
      name: "FRANCE", 
      slug: "france", 
      desc: "La destination numéro 1 des étudiants marocains.",
      flag: "https://upload.wikimedia.org/wikipedia/en/c/c3/Flag_of_France.svg",
      capitalImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "ESPAGNE", 
      slug: "espagne",
      desc: "La porte d'entrée idéale des étudiants marocains en Europe.",
      flag: "https://upload.wikimedia.org/wikipedia/en/9/9a/Flag_of_Spain.svg",
      capitalImg: "https://cms-images.oliverstravels.com/app/uploads/2023/10/04080649/Barcelona.jpg"
    },
    { 
      name: "ALLEMAGNE", 
      slug: "allemagne",
      desc: "Le leader européen de l'ingénierie avec des frais de scolarité quasi nuls.",
      flag: "https://upload.wikimedia.org/wikipedia/en/b/ba/Flag_of_Germany.svg",
      capitalImg: "https://mandstravelmoney.com/media/obzfp5gn/adobestock_84153835.jpeg?width=1100&height=720&v=1db4ca2374567f0" 
    },
    { 
      name: "BELGIQUE", 
      slug: "belgique",
      desc: "Le parfait équilibre éducatif entre l'Orient et l'Occident.", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Belgium_%28civil%29.svg",
      capitalImg: "https://www.okvoyage.com/wp-content/uploads/2020/03/atomium-belgique-1024x676.jpg" 
    },
    { 
      name: "ITALIE", 
      slug: "italie",
      desc: "Des universités historiques et de grandes opportunités de bourses.", 
      flag: "https://upload.wikimedia.org/wikipedia/en/thumb/0/03/Flag_of_Italy.svg/250px-Flag_of_Italy.svg.png",
      capitalImg: "https://images.unsplash.com/photo-1552832230-c0197dd311b5?auto=format&fit=crop&w=600&q=80" 
    },
    { 
      name: "ÉTATS-UNIS", 
      slug: "usa",
      desc: "Le prestige international et les plus grands campus mondiaux.", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg",
      capitalImg: "https://www.tourmag.com/photo/art/grande/43579491-35914718.jpg?v=1584033559" 
    },
    { 
      name: "CANADA", 
      slug: "canada",
      desc: "Études, bourses d'intégration : Cap sur le rêve américain.",
      flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada.svg",
      capitalImg: "https://imgproxy.natucate.com/ORD7pMTP40pEDZwb4SvL0hpEJO0NjAv3zoQrDEtXi0o/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvZTFhY2RhNjMtYzY2Ny00MWUwLWIyZWMtZjlkODcyZGYyNTMwLzI5ODg3Y2FlOTMtMTc2MTU4NjI5NS9uYXR1Y2F0ZS1yZWlzZXppZWwta2FuYWRhLWhlcm8uanBlZw" 
    },
    { 
      name: "ROYAUME-UNI", 
      slug: "royaume-uni",
      desc: "Oxford, Cambridge et les universités les plus prestigieuses du monde.",
      flag: "https://upload.wikimedia.org/wikipedia/en/a/ae/Flag_of_the_United_Kingdom.svg", 
      capitalImg: "https://www.epaillote.com/project/resources/img/original/angleterre.jpg" 
    },
    { 
      name: "PORTUGAL", 
      slug: "portugal",
      desc: "Le pôle mondial de la haute gestion hôtelière et financière.", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a8/Flag_of_Portugal_%28official%29.svg/1280px-Flag_of_Portugal_%28official%29.svg.png",
      capitalImg: "https://www.weroad.fr/blog/wp-content/uploads/2023/10/Que-voir-au-Portugal.jpg" 
    },
    { 
      name: "EMIRATS ARABES UNIS", 
      slug: "emirats-arabes-unis",
      desc: "Le parfait équilibre de l'Orient et l'Occident.", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Flag_of_the_United_Arab_Emirates.svg/1280px-Flag_of_the_United_Arab_Emirates.svg.png",
      capitalImg: "https://www.akshartours.com/storage/itinerary/itinerary_header_pic/Jmcq39SViFtB56kQ.jpg" 
    },
    { 
      name: "ROUMANIE", 
      slug: "roumanie",
      desc: "Le leader européen de la formation médicale d'excellence.",
      flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg",
      capitalImg: "https://moreconsulting.eu/wp-content/uploads/2021/09/logoi-roumania-idrusi-etaireias-hero.jpg" 
    },
    { 
      name: "CHINE", 
      slug: "chine",
      desc: "Technologies de pointe et programmes d'études d'avenir.", 
      flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg",
      capitalImg: "https://columbus.at/uploads/media/2500x/07/147-China_Xian_Stadtmauer.jpg?v=1-0" 
    }
  ];

  return (
    <div className="w-full bg-white font-sans antialiased">
      
      {/* Top Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[260px]"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.88), rgba(11, 38, 79, 0.88)), url(${destinationsBg})` 
        }}
      >
        <div className="max-w-4xl mx-auto space-y-4 relative z-10">
          <span className="inline-block text-brand-gold text-[10px] md:text-xs font-black tracking-widest uppercase bg-brand-gold/10 px-3 py-1.5 rounded border border-brand-gold/20">
            Édition Nationale Horizons Internationaux
          </span>
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white leading-tight">
            NOS <span className="text-brand-gold">12 DESTINATIONS</span> D'ÉTUDES
          </h1>
          <p className="text-xs md:text-sm text-slate-300 font-light max-w-xl mx-auto leading-relaxed">
            Explorez les pays où nous vous garantissons un accompagnement sur mesure, du choix de la filière jusqu'à votre installation.
          </p>
        </div>
      </section>

      {/* Interactive Hover Grid Layout */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {allDestinations.map((country, idx) => (
            
            <Link 
              to={`/destinations/${country.slug}`}
              key={idx} 
              className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group"
            >
              {/* Image Section */}
              <div className="relative h-40 overflow-hidden w-full bg-slate-50">
                {/* Image 1: Capital City Landscape */}
                <img 
                  src={country.capitalImg} 
                  alt={country.name} 
                  className="absolute inset-0 w-full h-full object-cover dest-capital-mobile md:group-hover:opacity-100 md:group-hover:scale-105 transition-all duration-500 ease-in-out z-0" 
                />

                {/* Image 2: Country Flag */}
                <img 
                  src={country.flag} 
                  alt={`Drapeau ${country.name}`} 
                  className="absolute inset-0 w-full h-full object-cover object-center dest-flag-mobile md:group-hover:opacity-0 transition-all duration-500 ease-in-out z-0"
                />
              </div>

              {/* Card Text Content */}
              <div className="p-5 flex flex-col justify-between flex-1 bg-white border-t border-slate-100 text-left">
                <div>
                  <h3 className="text-base font-black text-brand-blue uppercase tracking-wide">
                    {country.name}
                  </h3>
                  <p className="text-xs text-slate-600 mt-2 font-light leading-relaxed line-clamp-2">
                    {country.desc}
                  </p>
                </div>
              </div>

            </Link>
          ))}
        </div>
      </section>
    </div>
  );
}