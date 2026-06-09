import React from 'react';
import { BookOpen, GraduationCap, Award, CheckCircle } from 'lucide-react';
import missionImage from '../assets/mission.jpeg';
import campusImage from '../assets/campus.jpeg';

export default function Apropos() {
  const services = [
    "Conseil et coaching académique",
    "Assistance dans la sélection de formations (Maroc / Étranger)",
    "Obtention de l'inscription universitaire",
    "Recherche de bourses d'études",
    "Préparation aux tests d'entrée et de langues",
    "Aide à l'obtention du visa d'études"
  ];

  return (
    <div className="bg-gray-50 min-h-screen text-gray-800 font-sans">
      
{/* SECTION HERO / BANNIÈRE */}
<section 
  className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[300px] md:min-h-[400px]"
  style={{ 
    backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')`,
    backgroundPosition: "center 30%" // Permet de garder le centre de l'image visible
  }}
>
  <div className="max-w-3xl mx-auto px-4 relative z-10">
    <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
      À Propos de <span className="text-amber-400">Attaleb.net</span>
    </h1>
    <p className="text-sm md:text-base text-slate-200 mt-4 max-w-xl mx-auto font-medium leading-relaxed drop-shadow-sm">
      Votre partenaire de confiance pour une orientation scolaire et universitaire réussie.
    </p>
  </div>
</section>

      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-16 space-y-24">
        
{/* SECTION NOTRE MISSION + IMAGE ACADÉMIQUE */}
<section className="space-y-12">
  <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
    
    {/* 1. L'IMAGE (Elle apparaîtra en haut sur mobile grâce à cet ordre) */}
    <div className="w-full h-80 rounded-2xl overflow-hidden shadow-sm border border-gray-100 order-1 md:order-2">
      <img 
        src={missionImage} 
        alt="Étudiants consultant des informations d'orientation" 
        className="w-full h-full object-cover"
      />
    </div>

    {/* 2. LE TEXTE (Il apparaîtra en bas sur mobile) */}
    <div className="space-y-6 order-2 md:order-1">
      <div className="inline-flex items-center space-x-2 bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-semibold">
        <BookOpen className="w-4 h-4" />
        <span>Notre Mission</span>
      </div>
      <h2 className="text-3xl font-bold text-gray-950">
        Parce que chaque étudiant mérite des informations fiables
      </h2>
      <p className="text-lg text-gray-600 leading-relaxed">
        Nous croyons fermement que tout étudiant mérite de recevoir des informations fiables et précises sur les choix qui s'offrent à lui. Afin qu'il puisse prendre des décisions éclairées et réussir dans ses études et sa carrière, nous avons créé la plateforme <span className="font-semibold text-blue-600">attaleb.net</span>.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Grâce à Attaleb.net, les étudiants marocains disposent enfin d'une plateforme en ligne qui leur permet d'obtenir des informations précises sur les différentes options pour leurs études supérieures au Maroc.
      </p>
    </div>
  </div>
  
  {/* Bloc d'expérience (reste en dessous) */}
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
    {/* ... ton contenu expérience ... */}
  </div>
</section>

        {/* SECTION ÉTUDES A L'ÉTRANGER + IMAGE CAMPUS INTERNATIONAL */}
        <section className="space-y-8">
          <div className="bg-blue-950 text-white rounded-3xl p-8 sm:p-12 shadow-xl grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
            <div className="lg:col-span-2 space-y-4">
              <span className="text-amber-400 font-semibold tracking-wide uppercase text-sm">International</span>
              <h2 className="text-3xl font-bold">Accompagnement pour vos études à l'étranger</h2>
              <p className="text-blue-100 leading-relaxed">
                Notre programme est le leader marocain en termes d’accompagnement complet des étudiants qui souhaitent poursuivre leurs études à l’étranger, depuis le choix de l'université jusqu'à l'obtention du visa. 
              </p>
              <p className="text-blue-200 text-sm">
                Nous prenons en charge votre dossier dès l'inscription, garantissant ainsi que votre future carrière est gérée de manière professionnelle et complète.
              </p>
            </div>
            <div className="bg-blue-900/50 border border-blue-800 p-6 rounded-2xl space-y-4 text-center">
              <div className="text-4xl font-extrabold text-amber-400">300+</div>
              <p className="text-sm text-blue-100 font-medium">
                Universités et institutions de formation partenaires à travers le monde pour vous offrir une insertion optimale.
              </p>
            </div>
          </div>

          {/* Image de mise en avant pour illustrer le départ à l'étranger */}
          <div className="w-full h-64 sm:h-96 rounded-3xl overflow-hidden shadow-sm">
            <img 
              src={campusImage} 
              alt="Campus universitaire international" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* SECTION NOS SERVICES */}
        <section className="space-y-10">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <h2 className="text-3xl font-bold text-gray-950">Nos Services Professionnels</h2>
            <p className="text-gray-600">
              Une expertise de plus de 10 ans matérialisée par des solutions d'accompagnement sur-mesure.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div key={index} className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 flex items-start space-x-4 hover:shadow-md transition-shadow">
                <CheckCircle className="w-6 h-6 text-green-500 shrink-0 mt-0.5" />
                <span className="text-gray-700 font-medium">{service}</span>
              </div>
            ))}
          </div>
        </section>

        {/* CONCLUSION */}
        <section className="text-center max-w-3xl mx-auto pt-10 border-t border-gray-200 space-y-4">
          <GraduationCap className="w-12 h-12 text-blue-600 mx-auto" />
          <h3 className="text-2xl font-bold text-gray-950">Le succès commence par une bonne décision</h3>
          <p className="text-lg text-gray-600 italic">
            "Nous sommes convaincus que le succès académique et professionnel commence par la bonne prise de décision et c'est notre objectif de vous aider à atteindre la réussite."
          </p>
        </section>

      </div>
    </div>
  );
}