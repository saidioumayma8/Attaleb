import React, { useState } from 'react';
import { 
  Globe, GraduationCap, BookOpen, CheckCircle2, 
  ArrowRight, Search, Send, MapPin, Award
} from 'lucide-react';

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
      
      {/* HERO BANNER (CENTERED DESIGN)*/}
      <section className="relative bg-cover bg-center min-h-[620px] md:h-[680px] flex items-center justify-center text-center pt-10 pb-16 px-4" style={{ backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.88), rgba(11, 38, 79, 0.88)), url('https://images.unsplash.com/photo-1523050854058-8df90110c9f1?auto=format&fit=crop&w=1920&q=80')` }}>
        <div className="max-w-4xl mx-auto w-full flex flex-col items-center text-white space-y-6">
          
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
            <a href="#contact-form" className="w-full sm:w-auto text-center bg-brand-gold hover:bg-brand-goldHover text-brand-blue text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider shadow-md">
              Consultation Gratuite
            </a>
            <button className="w-full sm:w-auto border border-white/40 hover:bg-white/10 text-white text-xs font-bold px-8 py-3.5 rounded transition-all uppercase tracking-wider">
              Nos Destinations →
            </button>
          </div>

        </div>
      </section>

      {/*KEY FIGURES RIBBON*/}
      <section className="bg-brand-blue text-white py-6 border-b border-brand-gold/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center divide-y md:divide-y-0 md:divide-x divide-white/10">
            <div>
              <div className="text-2xl md:text-3xl font-black text-brand-gold">500+</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Étudiants Accompagnés</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">95%</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Taux de Réussite</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">10+</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Pays de Destination</div>
            </div>
            <div className="pt-4 md:pt-0">
              <div className="text-2xl md:text-3xl font-black text-brand-gold">3</div>
              <div className="text-[10px] text-slate-300 uppercase tracking-widest mt-0.5">Services Spécialisés</div>
            </div>
          </div>
        </div>
      </section>

      {/*UN ACCOMPAGNEMENT COMPLET*/}
      <section className="py-20 px-4 max-w-7xl mx-auto bg-white">
        <div className="text-center mb-12">
          <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Nos Services</span>
          <h2 className="text-2xl md:text-3xl font-black text-brand-blue mt-1 uppercase">UN ACCOMPAGNEMENT COMPLET</h2>
          <p className="text-xs text-slate-500 mt-2 max-w-md mx-auto leading-relaxed">
            Trois pôles d'expertise pour accompagner chaque étudiant, quel que soit son niveau ou son projet.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Card 1 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Globe size={22} />
              </div>
              <h3 className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Études à l'Étranger</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Inscription en France, Roumanie, UK, Allemagne, Espagne, Canada...</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Préparation complète du dossier de candidature</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Préparation aux tests linguistiques : DELF, TCF, IELTS</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Suivi administratif jusqu'à l'obtention du visa</li>
              </ul>
            </div>
            <button className="text-left text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider">Voir les destinations →</button>
          </div>

          {/* Card 2 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <Award size={22} />
              </div>
              <h3 className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Préparation aux Concours</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Concours Médecine & Pharmacie (FMPM, FMPR...)</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Classes Préparatoires : MPSI, PCSI, TSI</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Grandes Écoles Nationales : ENSA, ENCG, ENSAM</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Planning de révision et examens blancs corrigés</li>
              </ul>
            </div>
            <button className="text-left text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider">Nous Contacter →</button>
          </div>

          {/* Card 3 */}
          <div className="bg-white rounded-2xl shadow-sm border border-slate-100 p-6 flex flex-col justify-between hover:shadow-md transition-shadow">
            <div>
              <div className="w-12 h-12 bg-brand-blue text-white rounded-xl flex items-center justify-center mb-6">
                <BookOpen size={22} />
              </div>
              <h3 className="font-black text-base text-brand-blue uppercase tracking-wide mb-4">Soutien Scolaire</h3>
              <ul className="space-y-3 text-xs text-slate-600">
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Tout niveaux : Primaire, Collège, Lycée, Supérieur</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Toutes les matières : cours individuels et en groupe</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Suivi régulier et bilans de progression</li>
                <li className="flex items-start gap-2"><CheckCircle2 size={14} className="text-brand-gold shrink-0 mt-0.5" /> Séances en présentiel à Marrakech ou en ligne</li>
              </ul>
            </div>
            <button className="text-left text-[11px] font-bold text-brand-gold mt-6 hover:underline uppercase tracking-wider">Nous Contacter →</button>
          </div>
        </div>
      </section>

      {/*VOS DESTINATIONS RÊVÉES (WITH FLAGS) */}
      <section className="py-16 bg-slate-50 px-4 border-t border-b border-slate-100">
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
                flag: "https://flagcdn.com/w80/fr.png"
              },
              { 
                name: "ESPAGNE", 
                desc: "La porte d'entrée idéale des étudiants marocains en Europe.",
                flag: "https://flagcdn.com/w80/es.png"
              },
              { 
                name: "ROUMANIE", 
                desc: "Le leader européen de la formation médicale d'excellence.",
                flag: "https://flagcdn.com/w80/ro.png"
              },
              { 
                name: "ROYAUME-UNI", 
                desc: "Oxford, Cambridge et les universités les plus prestigieuses du monde.",
                flag: "https://flagcdn.com/w80/gb.png"
              },
              { 
                name: "ALLEMAGNE", 
                desc: "Le leader européen de l'ingénierie avec des frais de scolarité quasi nuls.",
                flag: "https://flagcdn.com/w80/de.png"
              },
              { 
                name: "CANADA", 
                desc: "Études, bourses d'intégration : Cap sur le rêve.",
                flag: "https://flagcdn.com/w80/ca.png"
              }
            ].map((country, idx) => (
              <div key={idx} className="relative rounded-xl overflow-hidden h-40 bg-gradient-to-br from-slate-400 to-brand-blue shadow-sm group cursor-pointer border border-slate-200/60 transition-all duration-300 hover:shadow-md hover:-translate-y-0.5">
                {/* Background Shadow Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-brand-blueDark/95 via-brand-blueDark/70 to-transparent"></div>
                
                {/* Content Container */}
                <div className="absolute bottom-0 left-0 p-5 text-white w-full flex flex-col items-start space-y-2">
                  {/* Flag Circular Badge */}
                  <div className="w-7 h-7 rounded-full overflow-hidden border border-white/20 shadow-sm shrink-0 bg-slate-100">
                    <img 
                      src={country.flag} 
                      alt={`Drapeau ${country.name}`} 
                      className="w-full h-full object-cover"
                    />
                  </div>
                  
                  <div>
                    <h3 className="text-base font-black tracking-wide text-brand-gold uppercase">{country.name}</h3>
                    <p className="text-[11px] text-slate-300 mt-0.5 font-light line-clamp-2 leading-relaxed">{country.desc}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-10">
            <button className="text-[11px] font-bold text-brand-gold hover:underline uppercase tracking-widest">
              Voir toutes nos destinations (15 pays) →
            </button>
          </div>
        </div>
      </section>

      {/*POURQUOI CHOISIR ATTALEB.MA ?*/}
      <section className="py-20 px-4 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column Text */}
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

          {/* Right Column Blue Card */}
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

      {/*PARLONS DE VOTRE AVENIR (FORM)*/}
      <section id="contact-form" className="py-16 bg-brand-blue px-4 text-white">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          <div className="lg:col-span-6 space-y-4">
            <span className="text-brand-gold text-[11px] font-bold tracking-widest uppercase">Contactez-nous</span>
            <h2 className="text-3xl font-black uppercase tracking-tight">PARLONS DE<br />VOTRE AVENIR</h2>
            <p className="text-xs text-slate-300 max-w-sm leading-relaxed font-light">
              Un conseiller d'orientation vous répond dans les 24 heures pour une évaluation gratuite et sans engagement de votre profil.
            </p>
          </div>

          <div className="lg:col-span-6 bg-white rounded-2xl p-6 text-slate-800 shadow-xl">
            <h3 className="font-black text-xs tracking-wider text-brand-blue uppercase mb-4 border-b border-slate-100 pb-2">
              DEMANDE DE CONSULTATION
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Prénom</label>
                  <input required type="text" value={formData.prenom} onChange={(e) => setFormData({...formData, prenom: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-brand-blue text-slate-800" placeholder="Votre prénom" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Nom</label>
                  <input required type="text" value={formData.nom} onChange={(e) => setFormData({...formData, nom: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-brand-blue text-slate-800" placeholder="Votre nom" />
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Email</label>
                  <input required type="email" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-brand-blue text-slate-800" placeholder="exemple@mail.com" />
                </div>
                <div>
                  <label className="block text-[10px] font-bold text-slate-500 uppercase tracking-wider mb-1">Téléphone</label>
                  <input required type="tel" value={formData.telephone} onChange={(e) => setFormData({...formData, telephone: e.target.value})} className="w-full p-2.5 border border-slate-200 rounded-lg text-xs bg-slate-50 focus:outline-none focus:border-brand-blue text-slate-800" placeholder="+212 600 000000" />
                </div>
              </div>

              <button type="submit" className="w-full mt-2 bg-brand-gold hover:bg-brand-goldHover text-brand-blue font-bold py-3 rounded-lg transition-colors flex items-center justify-center gap-2 text-xs uppercase tracking-wider cursor-pointer">
                <Send size={12} /> Envoyer la demande
              </button>
            </form>
          </div>

        </div>
      </section>

    </div>
  );
}