import React from 'react';
import { motion } from 'framer-motion';
import { BookOpen, GraduationCap, Award, CheckCircle, School, Languages, Trophy, Banknote, Plane, Globe, MapPin, ArrowRight } from 'lucide-react';
import missionImage from '../assets/mission.jpeg';
import { Helmet } from 'react-helmet-async';

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

      <Helmet>
            <title>À Propos de Attaleb</title>
            <meta name="description" content="Découvrez notre histoire, notre mission et notre équipe dédiée à l'orientation scolaire et universitaire pour les étudiants marocains." />
          </Helmet>
      
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
      À Propos de <span className="text-amber-400">Attaleb</span>
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
        Nous croyons fermement que tout étudiant mérite de recevoir des informations fiables et précises sur les choix qui s'offrent à lui. Afin qu'il puisse prendre des décisions éclairées et réussir dans ses études et sa carrière, nous avons créé la plateforme <span className="font-semibold text-blue-600">Attaleb</span>.
      </p>
      <p className="text-gray-600 leading-relaxed">
        Grâce à Attaleb, les étudiants marocains disposent enfin d'une plateforme en ligne qui leur permet d'obtenir des informations précises sur les différentes options pour leurs études supérieures au Maroc.
      </p>
    </div>
  </div>
  
  {/* Bloc d'expérience (reste en dessous) */}
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 space-y-4">
    {/* ... ton contenu expérience ... */}
  </div>
</section>

        {/* BOULE 3D + STEPS */}
        <section className="py-16 space-y-10 overflow-hidden">
          <div className="text-center max-w-2xl mx-auto space-y-3">
            <motion.h2
              className="text-3xl font-bold text-gray-950"
              initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}>
              Nos 4 Pôles d'Excellence
            </motion.h2>
            <motion.p className="text-gray-600"
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.2 }}>
              Quatre domaines clés réunis en une seule mission : votre réussite.
            </motion.p>
          </div>

          {/* ═══ 3D GLASS SPHERE ═══ */}
          <div className="flex justify-center py-12">
            <motion.div className="relative w-72 h-72 sm:w-80 sm:h-80 md:w-[400px] md:h-[400px]"
              initial={{ scale: 0, rotate: -180 }} whileInView={{ scale: 1, rotate: 0 }} viewport={{ once: true }}
              transition={{ type: "spring", stiffness: 80, damping: 14, duration: 1.5 }}>

              {/* Floating ground shadow */}
              <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-[60%] h-6 rounded-full bg-indigo-900/20 blur-2xl"></div>

              {/* Outer orbiting particles ring */}
              <motion.div className="absolute -inset-6 rounded-full"
                animate={{ rotate: 360 }} transition={{ duration: 30, repeat: Infinity, ease: "linear" }}>
                {[0, 60, 120, 180, 240, 300].map((deg, i) => (
                  <motion.div key={i} className="absolute w-2.5 h-2.5 rounded-full"
                    style={{
                      top: '50%', left: '50%',
                      transform: `rotate(${deg}deg) translateX(calc(50% + 6px)) translateY(-50%)`,
                      background: ['#8b5cf6', '#06b6d4', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4'][i],
                      boxShadow: `0 0 12px ${['#8b5cf6', '#06b6d4', '#10b981', '#f43f5e', '#8b5cf6', '#06b6d4'][i]}80`
                    }}
                    animate={{ scale: [1, 1.6, 1], opacity: [0.6, 1, 0.6] }}
                    transition={{ duration: 2, repeat: Infinity, delay: i * 0.3 }} />
                ))}
              </motion.div>

              {/* Ambient glow halo */}
              <div className="absolute -inset-3 rounded-full opacity-30 blur-xl"
                style={{ background: 'conic-gradient(from 45deg, #8b5cf6, #06b6d4, #10b981, #f43f5e, #8b5cf6)' }}></div>

              {/* Main 3D sphere */}
              <div className="absolute inset-0 rounded-full"
                style={{
                  background: 'conic-gradient(from 135deg, #6d28d9 0% 25%, #0891b2 25% 50%, #059669 50% 75%, #e11d48 75% 100%)',
                  boxShadow: 'inset -25px -25px 70px rgba(0,0,0,0.55), inset 15px 15px 40px rgba(255,255,255,0.08), 0 40px 80px rgba(109,40,217,0.25), 0 15px 30px rgba(0,0,0,0.2)'
                }}>
                {/* Specular highlight */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 28% 22%, rgba(255,255,255,0.45) 0%, rgba(255,255,255,0.15) 12%, transparent 40%)' }}></div>
                {/* Fresnel rim */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(circle at 72% 78%, rgba(255,255,255,0.06) 0%, transparent 25%)' }}></div>
                {/* Bottom depth */}
                <div className="absolute inset-0 rounded-full" style={{ background: 'radial-gradient(ellipse at 50% 95%, rgba(0,0,0,0.5) 0%, transparent 55%)' }}></div>
              </div>

              {/* Curved divider lines */}
              <div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
                <div className="w-[94%] h-[1px] bg-gradient-to-r from-transparent via-white/50 to-transparent absolute"></div>
                <div className="w-[1px] h-[94%] bg-gradient-to-b from-transparent via-white/50 to-transparent absolute"></div>
              </div>

              {/* Center ATTALEB badge with glass effect */}
              <motion.div className="absolute inset-0 flex items-center justify-center z-20"
                initial={{ scale: 0 }} whileInView={{ scale: 1 }} viewport={{ once: true }}
                transition={{ type: "spring", stiffness: 180, damping: 10, delay: 0.9 }}>
                <div className="w-20 h-20 sm:w-24 sm:h-24 md:w-28 md:h-28 rounded-full flex items-center justify-center"
                  style={{
                    background: 'radial-gradient(circle at 35% 30%, rgba(255,255,255,0.95) 30%, rgba(255,255,255,0.8) 60%, rgba(200,200,220,0.7) 100%)',
                    backdropFilter: 'blur(10px)',
                    boxShadow: 'inset -5px -5px 15px rgba(0,0,0,0.12), inset 3px 3px 8px rgba(255,255,255,0.9), 0 10px 30px rgba(0,0,0,0.25), 0 0 0 3px rgba(255,255,255,0.3)'
                  }}>
                  <span className="text-transparent bg-clip-text bg-gradient-to-br from-violet-700 via-blue-800 to-emerald-600 font-black text-sm md:text-base text-center leading-tight">ATTALEB<br/></span>
                </div>
              </motion.div>

              {/* ═══ QUADRANT LABELS ═══ */}
              {/* Top-Left: Bourses — Violet */}
              <motion.div className="absolute z-10 pointer-events-none" style={{ top: '6%', left: '2%' }}
                initial={{ opacity: 0, x: -50, y: -50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.0, type: "spring" }}>
                <motion.div className="bg-white/15 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/20 shadow-lg" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}>
                  <Banknote className="w-5 h-5 sm:w-6 sm:h-6 text-violet-300 mx-auto mb-0.5" />
                  <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight block text-center">Bourses d'Études</span>
                </motion.div>
              </motion.div>

              {/* Top-Right: Études — Cyan */}
              <motion.div className="absolute z-10 pointer-events-none" style={{ top: '6%', right: '2%' }}
                initial={{ opacity: 0, x: 50, y: -50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.2, type: "spring" }}>
                <motion.div className="bg-white/15 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/20 shadow-lg" animate={{ y: [0, -6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}>
                  <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-cyan-300 mx-auto mb-0.5" />
                  <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight block text-center">Études Supérieures à l'Étranger</span>
                </motion.div>
              </motion.div>

              {/* Bottom-Left: Préparation — Emerald */}
              <motion.div className="absolute z-10 pointer-events-none" style={{ bottom: '6%', left: '2%' }}
                initial={{ opacity: 0, x: -50, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.6, type: "spring" }}>
                <motion.div className="bg-white/15 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/20 shadow-lg" animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}>
                  <Trophy className="w-5 h-5 sm:w-6 sm:h-6 text-emerald-300 mx-auto mb-0.5" />
                  <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight block text-center">Préparations aux Concours</span>
                </motion.div>
              </motion.div>

              {/* Bottom-Right: Séjours — Rose */}
              <motion.div className="absolute z-10 pointer-events-none" style={{ bottom: '6%', right: '2%' }}
                initial={{ opacity: 0, x: 50, y: 50 }} whileInView={{ opacity: 1, x: 0, y: 0 }} viewport={{ once: true }} transition={{ delay: 1.4, type: "spring" }}>
                <motion.div className="bg-white/15 backdrop-blur-md rounded-2xl px-3 py-2 border border-white/20 shadow-lg" animate={{ y: [0, 6, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1.8 }}>
                  <Languages className="w-5 h-5 sm:w-6 sm:h-6 text-rose-300 mx-auto mb-0.5" />
                  <span className="text-white text-[8px] sm:text-[9px] md:text-[10px] font-black uppercase tracking-widest leading-tight block text-center">Soutien Scolaire</span>
                </motion.div>
              </motion.div>
            </motion.div>
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

        </section>



      </div>
    </div>
  );
}