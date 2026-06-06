import React, { useState } from 'react';
import { 
  Globe, GraduationCap, BookOpen, CheckCircle2, 
  ArrowRight, Search, Send, MapPin, Award, Mail, Phone
} from 'lucide-react'; 
import franceFlag from '../assets/france-flag-8x5.gif';
import spainFlag from '../assets/spainflag.png';
import romaniaFlag from '../assets/Flag_of_Romania.svg.png'
import canadaFlag from '../assets/Flag-Canada.webp'
import germanyFlag from '../assets/germany-flag-png-large.png'
import royaumeFlag from '../assets/Flag_of_Romania.svg.png'
import heroBg from '../assets/image.png'
import { Link } from 'react-router-dom';

;



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
          1. HERO BANNER (CUSTOM LOCAL BACKGROUND)
         ========================================== */}
      <section id="home-section"
        className="relative bg-cover bg-center min-h-[620px] md:h-[680px] flex items-center justify-center text-center pt-10 pb-16 px-4" 
        style={{ backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.82), rgba(11, 38, 79, 0.82)), url(${heroBg})` }}
      >
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-white space-y-6 relative z-10">
          
          <span className="text-brand-gold text-xs font-bold tracking-widest uppercase bg-brand-gold/10 px-3 py-1.5 rounded border border-brand-gold/20">
            Filiale de MECC - Marrakech | Depuis 2018
          </span>
          
          <h1 className="text-4xl md:text-6xl font-black tracking-tight uppercase leading-tight max-w-3xl">
            VOTRE AVENIR,<br />
            <span className="text-brand-gold">NOTRE MISSION</span>
          </h1>
          
          <p className="text-sm md:text-base text-slate-200 max-w-xl leading-relaxed font-light">
            Orientation, inscription à l'étranger, préparation aux concours et soutien scolaire — un accompagnement complet depuis Marrakech.
          </p>
          
          <p className="text-xs text-brand-gold font-semibold tracking-wide uppercase">
            Rejoignez des milliers d'étudiants qui ont réalisé leur rêve
          </p>

          {/* Centered Badges */}
          <div className="flex flex-wrap justify-center gap-2 pt-2 max-w-2xl">
            {["DELF", "TCF", "IELTS", "TOEFL", "Médecine", "Pharmacie", "CPGE", "ENSA", "ENCG"].map((tag, idx) => (
              <span key={idx} className="bg-white/10 text-[11px] font-medium px-2.5 py-1 rounded tracking-wide border border-white/5">
                {tag}
              </span>
            ))}
          </div>

          {/* Centered Action Buttons */}
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4 pt-4 w-full sm:w-auto">
            <a href="#contact-section" className="w-full sm:w-auto text-center bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider shadow-md cursor-pointer">
              Consultation Gratuite
            </a>
            <a href="#services-section" className="w-full sm:w-auto text-center border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              Nos Services →
            </a>
          </div>

        </div>
      </section>

      {/*KEY FIGURES RIBBON*/}
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

      {/* ==========================================
          UN ACCOMPAGNEMENT COMPLET (6 SERVICES)
         ========================================== */}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">Nos Services</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
            Six pôles d'expertise pour accompagner chaque étudiant à chaque étape décisive de son parcours.
          </p>
        </div>

        {/* Responsive Grid: 1 column on mobile, 2 on tablets, 3 on desktop */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          
          {/* Card 1: Études à l'Étranger */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Globe size={22} />
              </div>
              <h3 id="etudes-etranger" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4 ">Études à l'Étranger</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Inscription en France, Roumanie, UK, Allemagne, Espagne, Canada...</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Choix stratégique de la filière et de l'université d'accueil</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Gestion complète du dossier de candidature de A à Z</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Suivi administratif rigoureux jusqu'à l'obtention du visa</li>
              </ul>
            </div>
            <Link to="/destinations" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              Voir les destinations →
            </Link>
          </div>

          {/* Card 2: Bourses d'Études */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Award size={22} />
              </div>
              <h3 id="bourses-etudes" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4 ">Bourses d'Études</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Recherche et sélection des programmes de bourses mondiaux</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Bourses d'excellence, d'exonération de frais et de subsistance</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Optimisation du dossier (lettres de motivation, recommandations)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Accompagnement aux entretiens et critères d'éligibilité</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              Postuler aux bourses →
            </Link>
          </div>

          {/* Card 3: Préparation aux Concours */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <CheckCircle2 size={22} />
              </div>
              <h3 id="preparation-concours" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Préparation aux Concours</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Concours Médecine & Pharmacie (FMPM, FMPR...)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Classes Préparatoires nationales et internationales (MPSI, PCSI)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Grandes Écoles Nationales d'élite : ENSA, ENCG, ENSAM</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Planning intensif de révision et examens blancs corrigés</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              S'entraîner maintenant →
            </Link>
          </div>

          {/* Card 4: Séjours Linguistiques */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Send size={22} />
              </div>
              <h3 id="sejours-linguistiques" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Séjours Linguistiques</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Programmes d'immersion linguistique totale à l'étranger</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Cours d'Anglais, Allemand, Espagnol intensifs en écoles partenaires</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Préparation accélérée aux certifications : TCF, DELF, IELTS, TOEFL</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Logement en famille d'accueil ou en résidence étudiante inclus</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              Découvrir les séjours →
            </Link>
          </div>

          {/* Card 5: Soutien Scolaire */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={22} />
              </div>
              <h3 id="soutien-scolaire" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Soutien Scolaire</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Tous niveaux : Primaire, Collège, Lycée, Supérieur</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Matières scientifiques, littéraires et économiques</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Formules adaptées : cours individuels sur mesure ou en mini-groupe</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Séances interactives en présentiel ou à distance en ligne</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              S'inscrire au soutien →
            </Link>
          </div>

          {/* Card 6: Orientation & Coaching */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <GraduationCap size={22} />
              </div>
              <h3 id="orientation-coaching" className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Orientation & Coaching</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Bilans d'orientation approfondis et tests de personnalité</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Coaching personnalisé pour élaborer un projet d'études cohérent</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Simulations réelles d'entretiens oraux de sélection</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Ateliers pratiques pour rédiger des CV et lettres percutants</li>
              </ul>
            </div>
            <Link to="/contact" className="inline-block text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider text-left">
              Prendre rendez-vous →
            </Link>
          </div>

        </div>
      </section>

   {/* ==========================================
          4. VOS DESTINATIONS RÊVÉES (HOVER INTERACTIVE)
         ========================================== */}
      <section id="destinations-section" className="py-16 bg-slate-50 px-4 border-t border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Études à l'Étranger</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">VOS DESTINATIONS RÊVÉES</h2>
            <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
              Attaleb.ma vous accompagne vers les universités et grandes écoles de ces pays, avec un dossier solide et un suivi jusqu'à l'admission.
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
                capitalImg: "https://imgproxy.natucate.com/ORD7pMTP40pEDZwb4SvL0hpEJO0NjAv3zoQrDEtXi0o/rs:fill/g:ce/w:3840/h:2160/aHR0cHM6Ly93d3cubmF0dWNhdGUuY29tL21lZGlhL3BhZ2VzL3JlaXNlemllbGUvZTFhY2RhNjMtYzY2Ny00MWUwLWIyZWMtZjlkODcyZGYyNTMwLzI5ODg3Y2FlOTMtMTc2MTU4NjI5NS9uYXR1Y2F0ZS1yZWlzZXppZWwta2FuYWRhLWhlcm8uanBlZw" 
              }
            ].map((country, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden h-44 shadow-sm group cursor-pointer border border-slate-200/60 transition-all duration-300 hover:shadow-lg hover:-translate-y-0.5 bg-brand-blueDark">
                
                {/* Image 1: Capital City Image (Hidden behind flag by default, shows on hover) */}
                <img 
                  src={country.capitalImg} 
                  alt={country.name} 
                  className="absolute inset-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 group-hover:scale-105 transition-all duration-500 ease-in-out" 
                />

                {/* Image 2: Country Flag Image (Visible by default, fades out on hover) */}
                <img 
                  src={country.flag} 
                  alt={`Drapeau ${country.name}`} 
                  className="absolute inset-0 w-full h-full object-cover object-center opacity-40 group-hover:opacity-0 transition-all duration-500 ease-in-out" 
                />

                {/* Dark Vignette Overlay to keep text readable on both states */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark/100 via-brand-blueDark/40 to-transparent"></div>
                
                {/* Text Content */}
                <div className="absolute bottom-0 left-0 p-5 text-white w-full z-10">
                  <h3 className="text-base font-black tracking-wide text-brand-gold uppercase">
                    {country.name}
                  </h3>
                  <p className="text-[11px] text-slate-300 mt-0.5 font-light line-clamp-2 leading-relaxed">
                    {country.desc}
                  </p>
                </div>

              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <div className="text-center mt-10">
  <Link to="/destinations" className="inline-block text-[11px] font-bold text-brand-gold hover:underline uppercase tracking-widest">
    Voir toutes nos destinations (12 pays) →
  </Link>
</div>
          </div>
        </div>
      </section>

      {/*POURQUOI CHOISIR ATTALEB.MA ?*/}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-7 space-y-6">
            <div>
              <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Pourquoi nous ?</span>
              <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">POURQUOI CHOISIR<br />ATTALEB.MA ?</h2>
              <p className="text-xs text-slate-500 mt-3 leading-relaxed">
                Filiale de MECC, Attaleb.ma est le cabinet de consulting éducatif de référence à Marrakech. Notre équipe transforme vos ambitions en admissions réelles — en France, en Roumanie, au Canada et au-delà.
              </p>
            </div>

            <div className="space-y-4">
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> EXPERTISE RECONNUE
                </h4>
                <p className="text-[11px] text-slate-500 pl-3.5 mt-0.5">Conseillers spécialisés par filière — droit, médecine, ingénierie, commerce — avec un réseau actif depuis plus de 10 ans.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> SUIVI PERSONNALISÉ
                </h4>
                <p className="text-[11px] text-slate-500 pl-3.5 mt-0.5">Chaque étudiant bénéficie d'un conseiller dédié, de la sélection des établissements jusqu'à l'obtention du visa.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> RÉSEAU INTERNATIONAL
                </h4>
                <p className="text-[11px] text-slate-500 pl-3.5 mt-0.5">300+ universités partenaires en France, Royaume-Uni, Allemagne, Espagne, Canada, Roumanie et bien au-delà.</p>
              </div>
              <div>
                <h4 className="text-xs font-black text-brand-blue uppercase tracking-wide flex items-center gap-2">
                  <span className="w-1.5 h-1.5 bg-brand-gold rounded-full"></span> RÉSULTATS PROUVÉS
                </h4>
                <p className="text-[11px] text-slate-500 pl-3.5 mt-0.5">Plus de 500 étudiants accompagnés, 95% d'admissions obtenues dès la première candidature.</p>
              </div>
            </div>
          </div>

          <div className="lg:col-span-5 bg-gradient-to-b from-brand-blue to-brand-blueDark p-8 rounded-3xl shadow-xl text-white border-b-4 border-brand-gold space-y-6">
            <h3 className="font-black text-sm tracking-wider uppercase text-brand-gold">ATTALEB.MA EN CHIFFRES</h3>
            
            <div className="space-y-4">
              <div className="bg-white/5 p-3.5 rounded-xl flex items-center gap-4 border border-white/5">
                <span className="text-xl font-black text-brand-gold">500+</span>
                <span className="text-[11px] font-light text-slate-300">Étudiants accompagnés vers l'étranger</span>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl flex items-center gap-4 border border-white/5">
                <span className="text-xl font-black text-brand-gold">95%</span>
                <span className="text-[11px] font-light text-slate-300">Taux d'admission dès la 1ère candidature</span>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl flex items-center gap-4 border border-white/5">
                <span className="text-xl font-black text-brand-gold">10+</span>
                <span className="text-[11px] font-light text-slate-300">Pays de destination pris en charge</span>
              </div>
              <div className="bg-white/5 p-3.5 rounded-xl flex items-center gap-4 border border-white/5">
                <span className="text-xl font-black text-brand-gold">300+</span>
                <span className="text-[11px] font-light text-slate-300">Universités partenaires dans le monde</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/*NOTRE PROCESSUS*/}
      <section className="py-16 bg-slate-50 border-t border-b border-slate-100 px-4">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Comment ça marche</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">NOTRE PROCESSUS</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { num: "01", title: "CONSULTATION INITIALE", desc: "Entretien gratuit de votre profil de projet d'étude." },
              { num: "02", title: "PLAN PERSONNALISÉ", desc: "Stratégie sur mesure sélections établissements, pays." },
              { num: "03", title: "PRÉPARATION DOSSIER", desc: "Constitution rigoureuse optimisation de vos documents." },
              { num: "04", title: "ADMISSION & SUIVI", desc: "Accompagnement complet jusqu'à la confirmation d'inscription." }
            ].map((step, idx) => (
              <div key={idx} className="bg-white border border-slate-200/60 p-6 rounded-2xl text-center shadow-sm relative group">
                <div className="w-10 h-10 bg-brand-blue text-white font-black text-xs rounded-full flex items-center justify-center mx-auto mb-4">
                  {step.num}
                </div>
                <h3 className="font-black text-xs text-brand-blue uppercase tracking-wide mb-1.5">{step.title}</h3>
                <p className="text-[11px] text-slate-500 font-light leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/*CE QUE DISENT NOS ÉTUDIANTS*/}
      <section className="py-20 px-4 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Avis</span>
            <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">CE QUE DISENT NOS ÉTUDIANTS</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: "SALMA A.", school: "Médecine, Université de Médecine de Cluj - Roumanie", text: "Grâce à Attaleb.ma j'ai obtenu mon admission en médecine en Roumanie en quelques semaines seulement. Un accompagnement exceptionnel, du dossier jusqu'au visa !" },
              { name: "YOUSSEF EL G.", school: "Master Ingénierie, Université de Bordeaux - France", text: "L'équipe m'a aidé à préparer mon TCF et à monter un dossier solide. Résultat : admis à 2 universités françaises ! Je recommande vivement !" },
              { name: "NADA A.", school: "ENCG TO, Classe préparatoire d'exception", text: "Les cours de soutien d'Attaleb.ma m'ont permis de décrocher mon admission en classes préparatoires. Professionnalisme, rigueur et toujours disponibles." }
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
      <section id="contact-section" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 scroll-mt-24">
        {/* Main Wrapper: Sets up the full card container with the Map running end-to-end behind everything */}
        <div className="relative w-full h-[500px] md:h-[450px] rounded-3xl overflow-hidden shadow-xl border border-slate-200 bg-slate-100 flex items-center p-6 md:p-12">
          
          {/* 1. The Google Map Layer (Takes up 100% width and height in the background) */}
          <div className="absolute inset-0 w-full h-full z-0">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3397.0948924372993!2d-8.0142999!3d31.631778!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMzHCsDM3JzU0LjQiTiA4wrAwMCc1MS41Ilc!5e0!3m2!1sfr!2sma!4v1640000000000!5m2!1sfr!2sma"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="w-full h-full object-cover"
            ></iframe>
          </div>

          {/* 2. Dark/Translucent overlay coat to ensure the map doesn't make reading the text difficult */}
          <div className="absolute inset-0 bg-brand-blueDark/40 pointer-events-none z-10"></div>

          {/* 3. The Content Box: Floating securely ON TOP of the map layout */}
          <div className="relative z-20 max-w-md w-full bg-white/95 backdrop-blur-md p-6 md:p-8 rounded-2xl shadow-xl border border-white/20 space-y-6">
            <div>
              <span className="text-xs font-extrabold text-brand-gold uppercase tracking-widest block mb-1">
                Contactez-nous
              </span>
              <h2 className="text-3xl md:text-4xl font-black text-brand-blue tracking-tighter uppercase leading-none">
                PARLONS DE<br />
                <span className="text-slate-900">VOTRE AVENIR</span>
              </h2>
            </div>
            
            <p className="text-slate-600 text-xs font-medium leading-relaxed">
              Notre équipe d'orientation est à votre entière disposition pour vous guider dans vos choix d'études et d'avenirs professionnels.
            </p>
            
            {/* Contact Details List */}
            <div className="space-y-3.5 pt-4 text-slate-700 font-bold text-xs border-t border-slate-100">
              <div className="flex items-center space-x-3.5">
                <MapPin className="text-brand-gold flex-shrink-0" size={16} />
                <span>Filiale de MECC, Marrakech, Maroc</span>
              </div>
              <div className="flex items-center space-x-3.5">
                <Phone className="text-brand-gold flex-shrink-0" size={16} />
                <span>+212 524 XX XX XX</span>
              </div>
              <div className="flex items-center space-x-3.5">
                <Mail className="text-brand-gold flex-shrink-0" size={16} />
                <span>contact@attaleb.ma</span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* --- BRAND FOOTER --- */}
      <footer className="bg-brand-blue text-white border-t border-slate-800 pt-12 pb-6 mt-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8 pb-8 border-b border-white/10">
          
          {/* Col 1: Logo & Vision */}
          <div className="space-y-3">
            <h3 className="text-lg font-black tracking-wider">
              ATTALEB<span className="text-brand-gold">.MA</span>
            </h3>
            <p className="text-[11px] text-slate-400 leading-relaxed font-light max-w-xs">
              Cabinet de consulting éducatif spécialisé dans l'orientation internationale, la préparation aux concours de grandes écoles et le soutien scolaire d'excellence.
            </p>
          </div>

          {/* Col 2: Fast Navigation links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Nos Services</h4>
            <div className="grid grid-cols-1 gap-2 text-[11px] text-slate-300">
              <a href="#destinations-section" className="hover:text-brand-gold transition-colors">Études à l'étranger</a>
              <a href="#services-section" className="hover:text-brand-gold transition-colors">Préparation concours</a>
              <a href="#services-section" className="hover:text-brand-gold transition-colors">Soutien scolaire</a>
            </div>
          </div>

          {/* Col 3: Quick Info */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold tracking-widest text-brand-gold uppercase">Horaires d'ouverture</h4>
            <p className="text-[11px] text-slate-300 font-light">
              Lundi — Samedi : 09:00 - 19:00<br />
              Dimanche : Fermé
            </p>
          </div>

        </div>

        {/* Bottom copyright segment */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-6 flex flex-col sm:flex-row items-center justify-between text-[10px] text-slate-500 font-light">
          <p>© 2026 ATTALEB.MA. Tous droits réservés.</p>
          <p className="mt-2 sm:mt-0">Filiale de MECC</p>
        </div>
      </footer>

    </div>
  );
}






