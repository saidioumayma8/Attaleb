import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Send, HelpCircle, CheckCircle } from 'lucide-react';
import { Helmet } from 'react-helmet-async';

export default function Contact() {
  const [formData, setFormData] = useState({
    nom: '',
    prenom: '',
    email: '',
    telephone: '',
    destination: '',
    niveau: '',
    message: ''
  });
  
  const [submitted, setSubmitted] = useState(false);

  const [sending, setSending] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setSending(true);
    try {
      const formPayload = new FormData();
      formPayload.append('_subject', 'Nouvelle demande de consultation - ' + formData.prenom + ' ' + formData.nom);
      formPayload.append('Nom', formData.nom);
      formPayload.append('Prenom', formData.prenom);
      formPayload.append('Email', formData.email);
      formPayload.append('Telephone', formData.telephone);
      formPayload.append('Destination', formData.destination);
      formPayload.append('Niveau', formData.niveau);
      formPayload.append('Message', formData.message || 'Aucun message supplementaire');
      formPayload.append('_template', 'table');

      const response = await fetch('https://formsubmit.co/medamineharifi@gmail.com', {
        method: 'POST',
        headers: { 'Accept': 'application/json' },
        body: formPayload
      });

      if (response.ok) {
        setSubmitted(true);
      } else {
        throw new Error('FormSubmit error');
      }
    } catch (err) {
      // Fallback: mailto
      var body = 'Nom: ' + formData.nom + '%0D%0A' + 'Prenom: ' + formData.prenom + '%0D%0A' + 'Email: ' + formData.email + '%0D%0A' + 'Telephone: ' + formData.telephone + '%0D%0A' + 'Destination: ' + formData.destination + '%0D%0A' + 'Niveau: ' + formData.niveau + '%0D%0A' + 'Message: ' + formData.message;
      window.location.href = 'mailto:medamineharifi@gmail.com?subject=Demande de consultation - ' + formData.prenom + ' ' + formData.nom + '&body=' + body;
      setSubmitted(true);
    }
    setSending(false);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      
      <Helmet>
            <title>Contactez Attaleb | Attaleb</title>
            <meta name="description" content="Contactez Attaleb pour toute question concernant les études à l'étranger. Accompagnement personnalisé pour les étudiants marocains." />
          </Helmet>
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-16 px-4 text-center flex items-center justify-center"
        style={{ 
          backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.95), rgba(11, 38, 79, 0.85)), url('https://images.unsplash.com/photo-1523240795612-9a054b0db644?auto=format&fit=crop&w=1600&q=80')` 
        }}
      >
        <div className="max-w-2xl mx-auto space-y-2 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">
            CONTACTEZ <span className="text-brand-gold">ATTALEB</span>
          </h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-xl mx-auto font-medium leading-relaxed">
            Une question ? Un projet d'études à l'étranger ? Nos conseillers sont là pour vous guider pas à pas.
          </p>
        </div>
      </section>

      {/* 2. Section Principale */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne de Gauche : Formulaire de Consultation (2/3 de l'espace) */}
        <div className="lg:col-span-2 bg-white rounded-2xl shadow-sm border border-slate-100 p-6 md:p-8 space-y-6">
          
          {/* Badge Consultation Gratuite */}
          <div className="bg-gradient-to-r from-amber-500/10 to-amber-600/5 border border-amber-200 p-4 rounded-xl flex items-start gap-3">
            <span className="text-2xl mt-0.5"></span>
            <div>
              <h3 className="text-xs font-black text-amber-950 uppercase tracking-wide">
                Profitez d'une Consultation Gratuite
              </h3>
              <p className="text-[11px] text-amber-900 font-medium leading-relaxed mt-0.5">
                Remplissez le formulaire ci-dessous. Un conseiller d'Attaleb.ma analysera votre profil académique et vous rappellera gratuitement pour structurer votre projet d'études.
              </p>
            </div>
          </div>

          {submitted ? (
            /* Message de Succès */
            <div className="text-center py-12 space-y-3 bg-slate-50 rounded-xl border border-dashed border-slate-200">
              <div className="w-12 h-12 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto">
                <CheckCircle size={24} />
              </div>
              <h4 className="text-sm font-black text-brand-blue uppercase">Demande reçue avec succès !</h4>
              <p className="text-xs text-slate-500 max-w-sm mx-auto font-medium">
                Merci pour votre confiance. Un consultant spécialisé en orientation internationale va vous contacter par téléphone d'ici 24h à 48h.
              </p>
              <button 
                onClick={() => setSubmitted(false)}
                className="text-[11px] font-bold text-brand-blue underline hover:text-brand-gold pt-2"
              >
                Envoyer une autre demande
              </button>
            </div>
          ) : (
            /* Formulaire React */
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Nom *</label>
                  <input 
                    type="text" required name="nom" value={formData.nom} onChange={handleChange}
                    placeholder="Votre nom"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Prénom *</label>
                  <input 
                    type="text" required name="prenom" value={formData.prenom} onChange={handleChange}
                    placeholder="Votre prénom"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Adresse Email *</label>
                  <input 
                    type="email" required name="email" value={formData.email} onChange={handleChange}
                    placeholder="exemple@mail.com"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-medium"
                  />
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Téléphone (WhatsApp) *</label>
                  <input 
                    type="tel" required name="telephone" value={formData.telephone} onChange={handleChange}
                    placeholder="06 00 00 00 00"
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-medium"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Destination souhaitée *</label>
                  <select 
                    required name="destination" value={formData.destination} onChange={handleChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-bold text-slate-700"
                  >
                    <option value="">Sélectionnez un pays</option>
                    <option value="Chine">Chine</option>
                    <option value="Émirats Arabes Unis">Émirats Arabes Unis (EAU)</option>
                    <option value="Roumanie">Roumanie</option>
                    <option value="Espagne">Espagne</option>
                    <option value="Allemagne">Allemagne</option>
                    <option value="Canada">Canada</option>
                    <option value="Autre">Autre destination</option>
                  </select>
                </div>
                <div className="space-y-1">
                  <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Niveau d'études actuel *</label>
                  <select 
                    required name="niveau" value={formData.niveau} onChange={handleChange}
                    className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-bold text-slate-700"
                  >
                    <option value="">Sélectionnez votre niveau</option>
                    <option value="Niveau Bac">2ème année Bac (En cours)</option>
                    <option value="Bac obtenu">Titulaire du Baccalauréat</option>
                    <option value="Bac +2 / +3">Niveau Licence / Bac+2 ou Bac+3</option>
                    <option value="Master ou plus">Titulaire d'un Master ou Ingénieur</option>
                  </select>
                </div>
              </div>

              <div className="space-y-1">
                <label className="text-[11px] font-bold text-slate-700 uppercase tracking-wide">Détails de votre projet ou questions</label>
                <textarea 
                  rows="4" name="message" value={formData.message} onChange={handleChange}
                  placeholder="Expliquez-nous brièvement votre parcours et ce que vous souhaitez étudier..."
                  className="w-full text-xs p-3 bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-brand-blue font-medium resize-none"
                ></textarea>
              </div>

              <button 
                type="submit"
                disabled={sending}
                className="w-full bg-brand-blue hover:bg-blue-950 disabled:opacity-50 disabled:cursor-not-allowed text-white font-black text-xs uppercase tracking-wide py-3.5 px-6 rounded-xl transition-all shadow-sm flex items-center justify-center gap-2"
              >
                {sending ? (
                  <><span className="w-4 h-4 border-2 border-white/30 border-t-amber-400 rounded-full inline-block animate-spin" /> Envoi en cours...</>
                ) : (
                  <><Send size={14} className="text-brand-gold" /> Demander ma consultation gratuite</>
                )}
              </button>
            </form>
          )}
        </div>

        {/* Colonne de Droite : Coordonnées Directes (1/3 de l'espace) */}
        <div className="lg:col-span-1 space-y-6">
          
          {/* Card Info d'aide directe */}
          <div className="bg-brand-blue text-white p-6 rounded-2xl shadow-sm space-y-4">
            <h3 className="font-black text-sm uppercase tracking-wide text-brand-gold flex items-center gap-2">
              <HelpCircle size={18} /> Nos Bureaux
            </h3>
            <p className="text-[11px] text-slate-300 font-medium leading-relaxed">
              Vous préférez un échange immédiat ou souhaitez planifier le dépôt de vos pièces administratives (traductions, formulaires) ? Contactez directement nos départements :
            </p>

            <div className="space-y-3.5 pt-2 text-xs font-medium">
              <div className="flex items-start gap-3">
                <Phone size={16} className="text-emerald-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Téléphone Consultant</span>
                  <a href="tel:0631550128" className="hover:text-brand-gold font-bold tracking-wide">06 45 21 28 00</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-violet-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Support Émail</span>
                  <a href="mailto:medamineharifi@gmail.com" className="hover:text-brand-gold font-bold">medamineharifi@gmail.com</a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-red-500 shrink-0 mt-0.5" />
                <div>
                  <span className="block text-[10px] text-slate-400 font-bold uppercase">Service Consulaire / Visas</span>
                  <p className="text-slate-200 text-[11px] leading-relaxed">
                    Pour l'accompagnement biométrique et la validation réglementaire des dossiers.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Rappel des Avantages Attaleb */}
          <div className="bg-white p-5 rounded-2xl border border-slate-100 space-y-3">
            <h4 className="text-[11px] font-black text-brand-blue uppercase tracking-wider border-b pb-2">
               Engagement Qualité
            </h4>
            <ul className="space-y-2 text-[11px] text-slate-600 font-medium">
              <li className="flex items-center gap-2">
                <span className="text-brand-gold text-sm">✓</span> Orientation sur-mesure 100% personnalisée
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold text-sm">✓</span> Suivi strict du dossier de visa consulaire
              </li>
              <li className="flex items-center gap-2">
                <span className="text-brand-gold text-sm">✓</span> Préparation complète aux tests de langue
              </li>
            </ul>
          </div>

        </div>
      </main>
    </div>
  );
}