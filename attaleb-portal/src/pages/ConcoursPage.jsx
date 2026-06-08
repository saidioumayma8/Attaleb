import React from 'react';
import { CheckCircle2, Zap } from 'lucide-react';

export default function ConcoursPage() {
  
  const data = {
    title: "Préparation Concours",
    tagline: "Préparez votre accès aux grandes écoles avec une méthodologie d'élite.",
    bgImage: "https://images.unsplash.com/photo-1576091160550-217359f42f8c?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Attaleb.ma sécurise votre réussite. Appelez-nous pour réserver votre place.",
    programmes: [
      { 
        name: "Concours Médecine (FMP/FMD)", 
        desc: "Préparation intensive pour les facultés de Médecine, Pharmacie et Dentaire.", 
        features: ["Simulations réelles", "Techniques QCM", "Coaching stress", "Révisions SVT/Physique"] 
      },
      { 
        name: "Concours Ingénierie (ENSA/ENSAM)", 
        desc: "Accédez aux écoles d'ingénieurs grâce à nos préparations ciblées.", 
        features: ["Annales corrigées", "Calcul mental rapide", "Maths & Physique", "Logique"] 
      },
      { 
        name: "Concours Commerce (ENCG/ISCAE)", 
        desc: "Préparation au TAFEM et aux épreuves d'admission ISCAE.", 
        features: ["Tests psychotechniques", "Culture générale", "Entretien oral", "Logique"] 
      },
      { 
        name: "Classes Préparatoires (CPGE)", 
        desc: "Anticipez le rythme des prépas et assurez votre transition vers les grandes écoles.", 
        features: ["Méthodologie", "Maths approfondies", "Gestion du temps", "Physique/Chimie"] 
      },
      { 
        name: "Aix-Marseille Université (AMU)", 
        desc: "Accompagnement pour l'admission aux études de santé (PASS/LAS) en France.", 
        features: ["Dossier Campus France", "Lettre de motivation", "Stratégie d'admission", "Soutien administratif"] 
      }
    ]
  };

  return (
    <div className="w-full bg-slate-50 font-sans min-h-screen pb-16 antialiased">
      {/* 1. Header Banner */}
      <section 
        className="relative bg-cover bg-center bg-no-repeat py-20 px-4 text-center flex items-center justify-center min-h-[280px]"
        style={{ backgroundImage: `linear-gradient(rgba(11, 38, 79, 0.9), rgba(11, 38, 79, 0.75)), url('${data.bgImage}')` }}
      >
        <div className="max-w-3xl mx-auto space-y-3 relative z-10">
          <h1 className="text-3xl md:text-5xl font-black tracking-tight uppercase text-white">{data.title}</h1>
          <p className="text-xs md:text-sm text-slate-200 max-w-2xl mx-auto font-medium leading-relaxed">{data.tagline}</p>
        </div>
      </section>

      {/* 2. Main Content */}
      <main className="max-w-5xl mx-auto px-4 mt-10 grid grid-cols-1 lg:grid-cols-3 gap-8">
        
        {/* Colonne de gauche (2/3) */}
        <div className="lg:col-span-2 space-y-8">
          {data.programmes.map((p, i) => (
            <div key={i} className="bg-white p-6 md:p-8 rounded-2xl shadow-sm border border-slate-100 space-y-4">
              <h2 className="text-lg font-black text-brand-blue uppercase flex items-center gap-2">
                <Zap size={18} className="text-brand-gold" /> {p.name}
              </h2>
              <p className="text-xs text-slate-600 leading-relaxed font-medium">{p.desc}</p>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3 pt-4">
                {p.features.map((f, j) => (
                  <div key={j} className="flex items-center gap-2 text-[11px] font-bold text-slate-700 bg-slate-50 p-3 rounded-xl border border-slate-100">
                    <CheckCircle2 size={14} className="text-brand-gold" /> {f}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Colonne de droite (1/3) */}
        <div className="lg:col-span-1 space-y-6 lg:sticky lg:top-6 self-start">
          <div className="bg-amber-100 p-6 rounded-2xl shadow-sm text-center border border-amber-200">
            <h4 className="font-black text-sm uppercase text-brand-blue mb-3">Besoin d'aide ?</h4>
            <p className="text-[11px] text-slate-800 font-bold mb-4">{data.ctaText}</p>
            <a href="tel:0645212800" className="block w-full bg-brand-blue text-white py-3 rounded-xl font-black text-sm hover:bg-brand-blue/90 transition-all">
              06 45 21 28 00
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}