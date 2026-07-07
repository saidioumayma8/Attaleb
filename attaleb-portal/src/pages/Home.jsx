import React, { useState } from 'react';
import { 
  Globe, GraduationCap, BookOpen, CheckCircle2, 
  ArrowRight, Search, Send, MapPin, Award, Mail, Phone
} from 'lucide-react'; 
import franceFlag from '../assets/france-flag-8x5.gif';
import spainFlag from '../assets/spainflag.png';
import romaniaFlag from '../assets/Flag_of_Romania.svg.png';
import canadaFlag from '../assets/Flag-Canada.webp';
import germanyFlag from '../assets/germany-flag-png-large.png';
// --- NOUVELLE IMAGE IMPORTÉE ICI ---
import newHeroBg from '../assets/campus-students-hero.jfif';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import { motion } from 'framer-motion';

// Partner logos (proper Vite imports)
import qmulLogo from '../assets/qmul.webp';
import uwlLogo from '../assets/UWL-Logo.png';
import hofstraLogo from '../assets/hofstras-university-logo.jpg';
import partnerImg1 from '../assets/images.jfif';
import partnerImg2 from '../assets/29-1024x1024.jpg';
import bsbLogo from '../assets/BSB_logo_burgundy-1.png';
import lrLogo from '../assets/lr-logo.jpg';
import harvardLogo from '../assets/Harvard_University_logo.png';
import stanfordLogo from '../assets/stanford-university-logo.png';
import uclLogo from '../assets/ucl-logo.webp';
import columbiaLogo from '../assets/colombia-logo.png';
import chicagoLogo from '../assets/chicago-logo.png';
import arizonalogo from '../assets/Arizona.png';
import ascencia from '../assets/ascencia.png';
import cardiff from '../assets/cardiff.png';
import US from '../assets/US.png';
import EU_Business_School_Logo from '../assets/EU_Business_School_Logo.png';
import HEC_Paris from '../assets/HEC_Paris.png';
import INSEA_logo from '../assets/INSEA_logo.png';
import LSE from '../assets/LSE.png';
import NEOMA from '../assets/NEOMA.jpg';
import { Helmet } from 'react-helmet-async';

const partnerLogos = [
  qmulLogo, uwlLogo, hofstraLogo, partnerImg1, partnerImg2, bsbLogo, 
  lrLogo, harvardLogo, stanfordLogo, uclLogo, columbiaLogo, chicagoLogo, arizonalogo, ascencia, cardiff, US, EU_Business_School_Logo, HEC_Paris, INSEA_logo, LSE, NEOMA
];

export default function Home() {
  const [formData, setFormData] = useState({
    prenom: '',
    nom: '',
    email: '',
    telephone: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Merci ${formData.prenom}, votre demande a été reçue !`);
  };

  return (
    <div className="w-full bg-white font-sans antialiased">
      
      {/* ==========================================
          1. HERO BANNER (WITH NEW BACKGROUND)
          ========================================== */}
<section id="home-section"
        className="relative bg-cover bg-center min-h-[620px] md:h-[680px] flex items-center justify-center text-center pt-10 pb-16 px-4" 
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.4), rgba(11, 38, 79, 0.4)), url(${newHeroBg})`,
          backgroundBlendMode: 'multiply'
        }}
      >
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-white space-y-6 relative z-10">
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight max-w-3xl drop-shadow-md">
            VOTRE AVENIR,<br />
            <span className="text-brand-gold">NOTRE MISSION</span>
          </h1>
          <p className="text-sm md:text-base text-slate-200 max-w-xl leading-relaxed font-light">
            Orientation, inscription, préparation aux concours et soutien scolaire — un accompagnement complet pour votre projet académique.
          </p>
          <a href="#services-section" className="border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
            Nos Services →
          </a>
        </div>
      </section>

      {/* KEY FIGURES RIBBON */}
      <section className="bg-brand-blue text-white py-6 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div>
              <div className="text-2xl md:text-3xl font-black text-brand-gold">800+</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Étudiants Accompagnés</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">95%</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Taux de Réussite</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">12+</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Pays de Destination</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">6</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Services Spécialisés</div>
            </div>
          </div>
        </div>
      </section>

      {/* --- PARTENAIRES ACADEMIQUES - INFINITE LOOP CAROUSEL --- */}
      <section className="py-16 bg-gradient-to-b from-slate-50 to-white overflow-hidden">
        <div className="max-w-7xl mx-auto mb-10 text-center px-4">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue uppercase tracking-wide">PARTENAIRES ACADEMIQUES</h2>
          <p className="text-slate-500 text-sm mt-2">Nos universites partenaires a travers le monde</p>
        </div>

        <style>{`
          @keyframes scrollLogos {
            0% { transform: translateX(0); }
            100% { transform: translateX(-80%); }
          }
          .logo-carousel {
            animation: scrollLogos 40s linear infinite;
          }
          .logo-carousel:hover {
            animation-play-state: pau
            sed;
          }
        `}</style>

        <div className="relative w-full overflow-hidden"
          style={{
            maskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to right, transparent 0%, black 5%, black 95%, transparent 100%)'
          }}>
          <div className="flex items-center gap-6 logo-carousel will-change-transform"
            style={{ width: 'max-content' }}>
            {[...partnerLogos, ...partnerLogos].map((logoSrc, index) => (
              <div key={index} className="flex-shrink-0 w-40 h-24 bg-white rounded-xl border border-slate-200 shadow-sm hover:shadow-md hover:border-brand-gold/30 transition-all duration-300 flex items-center justify-center p-4">
                <img src={logoSrc} alt="Partenaire" className="max-h-full max-w-full object-contain" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          UN ACCOMPAGNEMENT COMPLET (6 SERVICES)
         ========================================== */}
      <section id="services-section" className="py-20 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">Nos Services</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
            Six pôles d'expertise pour accompagner chaque étudiant à chaque étape décisive de son parcours.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Études à l'Étranger */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="etudes-etranger" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Études à l'Étranger</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Inscription en France, Roumanie, UK, Allemagne, Espagne, Canada...</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Choix stratégique de la filière et de l'université d'accueil</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Gestion complète du dossier de candidature de A à Z</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Suivi administratif rigoureux jusqu'à l'obtention du visa</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/destinations" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                Voir les destinations
              </Link>
            </div>
          </div>

          {/* Card 2: Bourses d'Études */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="bourses-etudes" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Bourses d'Études</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Recherche et sélection des programmes de bourses mondiaux</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Bourses d'excellence, d'exonération de frais et de subsistance</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Optimisation du dossier (lettres de motivation, recommandations)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Accompagnement aux entretiens et critères d'éligibilité</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/bourses" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                Postuler aux bourses
              </Link>
            </div>
          </div>

          {/* Card 3: Préparation aux Concours */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="preparation-concours" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Préparation aux Concours</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Concours Médecine & Pharmacie (FMPM, FMPR...)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Classes Préparatoires nationales et internationales (MPSI, PCSI)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Grandes Écoles Nationales d'élite : ENSA, ENCG, ENSAM</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Planning intensif de révision et examens blancs corrigés</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/concours" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                S'entraîner maintenant
              </Link>
            </div>
          </div>

          {/* Card 4: Séjours Linguistiques */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="sejours-linguistiques" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Séjours Linguistiques</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Programmes d'immersion linguistique totale à l'étranger</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Cours d'Anglais, Allemand, Espagnol intensifs en écoles partenaires</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Préparation accélérée aux certifications : TCF, DELF, IELTS, TOEFL</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Logement en famille d'accueil ou en résidence étudiante inclus</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/sejours-linguistiques" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                Découvrir les séjours
              </Link>
            </div>
          </div>

          {/* Card 5: Soutien Scolaire */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="soutien-scolaire" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Soutien Scolaire</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Tous niveaux : Primaire, Collège, Lycée, Supérieur</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Matières scientifiques, littéraires and économiques</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Formules adaptées : cours individuels sur mesure ou en mini-groupe</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Séances interactives en présentiel ou à distance en ligne</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/soutien" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                S'inscrire au soutien
              </Link>
            </div>
          </div>

          {/* Card 6: Orientation & Coaching */}
          <div className="bg-white rounded-2xl shadow-md border border-slate-200 p-6 flex flex-col justify-between hover:shadow-lg transition-all duration-300">
            <div className="">
              <h3 id="orientation-coaching" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Orientation & Coaching</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Bilans d'orientation approfondis et tests de personnalité</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Coaching personnalisé pour élaborer un projet d'études cohérent</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Simulations réelles d'entretiens oraux de sélection</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-emerald-500 shrink-0 mt-0.5" /> Ateliers pratiques pour rédiger des CV et lettres percutants</li>
              </ul>
            </div>
            
            <div className="">
              <Link to="/contact" className="inline-flex items-center gap-2 text-[11px] font-black text-white mt-6 bg-red-600 border-2 border-red-600 rounded-full px-5 py-2.5 hover:bg-white hover:text-red-600 hover:border-red-600 hover:shadow-lg hover:shadow-red-200 hover:-translate-y-0.5 transition-all duration-300 uppercase tracking-wider group">
                Prendre rendez-vous
              </Link>
            </div>
          </div>

        </div>
      </section>

      {/* ==========================================
          4. VOS DESTINATIONS RÊVÉES
         ========================================== */}
      <section id="destinations-section" className="py-16 bg-slate-50 px-4 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Études à l'Étranger</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">VOS DESTINATIONS RÊVÉES</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
              attaleb vous accompagne vers les universités et grandes écoles de ces pays, avec un dossier solide et un suivi jusqu'à l'admission.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { 
                name: "FRANCE", 
                desc: "La destination numéro 1 des étudiants marocains.",
                flag: franceFlag,
                capitalImg: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?auto=format&fit=crop&w=600&q=80" 
              },
              { 
                name: "ESPAGNE", 
                desc: "La porte d'entrée idéale des étudiants marocains en Europe.",
                flag: spainFlag,
                capitalImg: "https://cms-images.oliverstravels.com/app/uploads/2023/10/04080649/Barcelona.jpg" 
              },
              { 
                name: "ROUMANIE", 
                desc: "Le leader européen de la formation médicale d'excellence.",
                flag: romaniaFlag,
                capitalImg: "https://moreconsulting.eu/wp-content/uploads/2021/09/logoi-roumania-idrusi-etaireias-hero.jpg" 
              },
              { 
                name: "ROYAUME-UNI", 
                desc: "Oxford, Cambridge et les universités les plus prestigieuses du monde.",
                flag: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg/330px-Flag_of_the_United_States_%28DDD-F-416E_specifications%29.svg.png",
                capitalImg: "https://www.epaillote.com/project/resources/img/original/angleterre.jpg" 
              },
              { 
                name: "ALLEMAGNE", 
                desc: "Le leader européen de l'ingénierie avec des frais de scolarité quasi nuls.",
                flag: germanyFlag,
                capitalImg: "https://mandstravelmoney.com/media/obzfp5gn/adobestock_84153835.jpeg?width=1100&height=720&v=1db4ca2374567f0" 
              },
              { 
                name: "CANADA", 
                desc: "Études, bourses d'intégration : Cap sur le rêve.",
                flag: canadaFlag,
                capitalImg: "https://imgproxy.natucate.com/ORD7pMTP40pEDZwb4SvL0hpEJO0NjAv3zoQrDEtXi0o/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdEUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvZTFhY2RhNjMtYzY2Ny00MWUwLWIyZWMtZjlkODcyZGYyNTMwLzI5ODg3Y2FlOTMtMTc2MTU4NjI5NS9uYXR1Y2F0ZS1yZWlzZXppZWwta2FuYWRhLWhlcm8uanBlZw" 
              }
            ].map((country, idx) => (
              <div key={idx} className="flex flex-col bg-white rounded-xl overflow-hidden shadow-sm border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-1 cursor-pointer group">
                {/* Image Section */}
                <div className="relative h-40 overflow-hidden w-full bg-slate-50">
                  <img 
                    src={country.capitalImg} 
                    alt={country.name} 
                    className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out" 
                  />
                  <img 
                    src={country.flag} 
                    alt={`Drapeau ${country.name}`} 
                    className="absolute inset-0 w-full h-full object-cover object-center opacity-100 group-hover:opacity-0 transition-all duration-500 ease-in-out" 
                  />
                </div>
                {/* Text Section */}
                <div className="p-5 flex flex-col justify-between flex-1 bg-white border-t border-slate-100">
                  <div>
                    <h3 className="text-base font-black text-brand-blue uppercase tracking-wide">
                      {country.name}
                    </h3>
                    <p className="text-xs text-slate-600 mt-2 font-light leading-relaxed line-clamp-2">
                      {country.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <Link to="/destinations" className="inline-block text-[11px] font-bold text-brand-gold hover:underline uppercase tracking-widest">
              Voir toutes nos destinations (12 pays) →
            </Link>
          </div>
        </div>
      </section>


      {/* CE QUE DISENT NOS ÉTUDIANTS */}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Avis</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">CE QUE DISENT NOS ÉTUDIANTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "SALMA A.", school: "Médecine, Université de Médecine de Cluj - Roumanie", text: "Grâce à Attaleb j'ai obtenu mon admission en médecine en Roumanie en quelques semaines seulement. Un accompagnement exceptionnel, du dossier jusqu'au visa !" },
              { name: "YOUSSEF EL G.", school: "Master Ingénierie, Université de Bordeaux - France", text: "L'équipe m'a aidé à préparer mon TCF et à monter un dossier solide. Résultat : admis à 2 universités françaises ! Je recommande vivement !" },
              { name: "NADA A.", school: "ENCG TO, Classe préparatoire d'exception", text: "Les cours de soutien d'Attaleb m'ont permis de décrocher mon admission en classes préparatoires. Professionnalisme, rigueur et toujours disponibles." }
            ].map((test, idx) => (
              <div key={idx} className="bg-white p-6 rounded-2xl border border-slate-200 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="text-brand-gold text-sm mb-3">★★★★★</div>
                  <p className="text-slate-600 font-light text-[11px] leading-relaxed">"{test.text}"</p>
                </div>
                <div className="flex items-center gap-3 mt-6 pt-4 border-t border-slate-100">
                  <div className="w-8 h-8 bg-brand-blue text-brand-gold font-bold text-xs rounded-full flex items-center justify-center shrink-0">
                    {test.name[0]}
                  </div>
                  <div>
                    <h4 className="font-bold text-[11px] text-brand-blue">{test.name}</h4>
                    <p className="text-[9px] text-slate-400 font-light line-clamp-1">{test.school}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
          8. RESTRUCTURED CONTACT ZONE (TEXT OVER MAP)
         ========================================== */}
<section id="contact-section" className="max-w-7xl mx-auto px-4 py-20">
        <div className="relative w-full h-[450px] rounded-3xl overflow-hidden shadow-xl">
          <div className="absolute inset-0 z-0">
            <iframe
            title="Localisation Cabinet"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.027050965383!2d-8.0123795!3d31.6360662!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sYourLocationName!5e0!3m2!1sen!2sma!4v1600000000000!5m2!1sen!2sma"
            width="100%" 
            height="100%" 
            style={{ border: 0 }} 
            allowFullScreen="" 
            loading="lazy"
          ></iframe>
          </div>
          <div className="relative z-20 max-w-md bg-white/90 p-8 rounded-2xl m-8">
            <h2 className="text-2xl font-black text-brand-blue uppercase">Contactez-nous</h2>
            <p className="text-sm mt-4">Besoin d'accompagnement ? Appelez-nous au : +212 6 45212800</p>
          </div>
        </div>
      </section>

    </div>
  );
}