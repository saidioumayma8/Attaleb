import React, { useState } from 'react';
import { Mail, Phone, MapPin, Share2, Globe, Send } from 'lucide-react';

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <section id="contact-section" className="bg-slate-50 py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Integrated Heading & Map Area */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr,2fr] gap-0 rounded-2xl overflow-hidden shadow-lg bg-white border border-slate-100">
          <div className="p-12 flex flex-col justify-center bg-white">
            <span className="text-sm font-bold text-brand-gold uppercase tracking-widest mb-3">
              Contactez-nous
            </span>
            <h2 className="text-4xl md:text-5xl font-black text-brand-blue tracking-tighter uppercase leading-none">
              PARLONS DE<br />
              <span className="text-slate-900">VOTRE AVENIR</span>
            </h2>
          </div>
          <div className="w-full h-80 md:h-full min-h-[320px] bg-slate-200 relative">
            <iframe
              title="Google Maps Location"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d106366.12658113426!2d-7.669394!3d33.58831!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xda7cd4778aa113b%3A0x2114f467b667e4!2sCasablanca%2C%20Morocco!5e0!3m2!1sen!2sus!4v1717512345678!5m2!1sen!2sus"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              className="absolute inset-0"
            ></iframe>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16 items-start">
          
          {/* Form */}
          <div className="bg-white p-10 rounded-2xl shadow-md border border-slate-100">
            <h3 className="text-xl font-bold text-brand-blue mb-8 tracking-wide">
              ENVOYER UN MESSAGE
            </h3>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2">NOM COMPLET</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue text-slate-800"
                    placeholder="Votre nom"
                  />
                </div>
                <div>
                  <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2">ADRESSE EMAIL</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue text-slate-800"
                    placeholder="votre@email.com"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2">SUJET</label>
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue text-slate-800"
                  placeholder="Le motif de votre message"
                  />
              </div>

              <div>
                <label className="block text-xs font-bold text-slate-700 tracking-wider mb-2">MESSAGE</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="6"
                  className="w-full px-4 py-3 border border-slate-200 rounded-lg text-sm focus:outline-none focus:border-brand-blue text-slate-800 resize-none"
                  placeholder="Comment pouvons-nous vous aider ?"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full sm:w-auto bg-brand-blue hover:bg-slate-900 text-white font-bold text-xs tracking-widest py-4 px-10 rounded-lg transition-colors flex items-center justify-center space-x-2"
              >
                <span>ENVOYER</span>
                <Send size={14} className="text-brand-gold" />
              </button>
            </form>
          </div>

          {/* Info & Social Links */}
          <div className="bg-brand-blue text-white p-10 rounded-2xl shadow-md space-y-8 lg:mt-0 mt-12">
            <h3 className="text-xl font-bold tracking-wide text-brand-gold">
              NOS COORDONNÉES
            </h3>
            
            <div className="space-y-6 text-sm font-medium">
              <div className="flex items-start space-x-4">
                <MapPin className="text-brand-gold flex-shrink-0 mt-0.5" size={20} />
                <span>Adresse de la viicle 86, Casablanca, Morocco</span>
              </div>
              <div className="flex items-center space-x-4">
                <Phone className="text-brand-gold flex-shrink-0" size={20} />
                <span>+33 37 38 95 56</span>
              </div>
              <div className="flex items-center space-x-4">
                <Mail className="text-brand-gold flex-shrink-0" size={20} />
                <span>e.mail@attaleb.com</span>
              </div>
            </div>

            <hr className="border-slate-700" />

            <div>
              <h4 className="text-xs font-bold tracking-widest text-slate-400 mb-5 uppercase">REJOIGNEZ-NOUS</h4>
              <div className="flex flex-col sm:flex-row sm:space-x-4 space-y-4 sm:space-y-0">
                <a href="https://facebook.com" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl hover:text-brand-gold hover:bg-white/15 transition-all flex items-center space-x-3 text-sm font-bold">
                  <Share2 size={18} className="text-brand-gold" />
                  <span>Facebook</span>
                </a>
                <a href="https://instagram.com" target="_blank" rel="noreferrer" className="bg-white/10 p-3 rounded-xl hover:text-brand-gold hover:bg-white/15 transition-all flex items-center space-x-3 text-sm font-bold">
                  <Globe size={18} className="text-brand-gold" />
                  <span>Instagram</span>
                </a>
              </div>
            </div>
          </div>
          

        </div>
      </div>
    </section>
  );
}