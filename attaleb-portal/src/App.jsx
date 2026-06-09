import React from 'react';

import { Routes, Route } from 'react-router-dom'; 
import Navbar from './components/Navbar.jsx';
import Footer from './components/Footer.jsx';
import Home from './pages/Home.jsx';
import Destinations from './pages/Destinations.jsx';
import DestinationDetail from './pages/DestinationDetail';
import SpainDetail from './pages/SpainDetail';
import GermanyDetail from './pages/GermanyDetail';
import BelgiumDetail from './pages/BelgiumDetail.jsx';
import ItalyDetail from './pages/ItalyDetail.jsx';
import USADetail from "./pages/USADetail.jsx";
import CanadaDetail from './pages/CanadaDetail.jsx';
import RoyaumeUniDetail from './pages/RoyaumeUniDetail.jsx';
import PortugalDetail from './pages/PortugalDetail.jsx'; 
import EmiratsDetail from './pages/EmiratsDetail.jsx'; 
import RoumanieDetail from './pages/RoumanieDetail.jsx';
import ChineDetail from './pages/ChineDetail.jsx';
import Contact from './pages/Contact.jsx';
import ConcoursPage from './pages/ConcoursPage.jsx';
import LanguesPage from './pages/LanguesPage.jsx';
import SoutienPage from './pages/SoutienPage.jsx';
import Apropos from './pages/Apropos.jsx';
import Bourses from './pages/Bourses.jsx';

export default function App() {
  return (
    <div className="min-h-screen bg-white text-slate-900 relative">
      {/* Navigation Bar stays visible on top */}
      <Navbar />
      
      {/* Main Page Content switches dynamically based on the URL */}
      <main>
        <Routes>
          {/* When path is "/" display the Home page */}
          <Route path="/" element={<Home />} />
          
          {/* When path is "/destinations" display the Destinations page */}
          <Route path="/destinations" element={<Destinations />} />
          <Route path="/destinations/:countrySlug" element={<DestinationDetail />} />
          <Route path="/destinations/espagne" element={<SpainDetail />} />
          <Route path="/destinations/allemagne" element={<GermanyDetail />} />
          <Route path="/destinations/belgique" element={<BelgiumDetail />} />
          <Route path="/destinations/italie" element={<ItalyDetail />} />
          <Route path="/destinations/etats-unis" element={<USADetail />} />
          <Route path="/destinations/etats-unis" element={<USADetail />} />
          <Route path="/destinations/canada" element={<CanadaDetail />} />
          <Route path="/destinations/royaume-uni" element={<RoyaumeUniDetail />} />
          <Route path="/destinations/portugal" element={<PortugalDetail />} />
          <Route path="/destinations/emirats-arabes-unis" element={<EmiratsDetail />} />
          <Route path="/destinations/roumanie" element={<RoumanieDetail />} />
          <Route path="/destinations/chine" element={<ChineDetail />} />
          <Route path="/concours" element={<ConcoursPage />} />
          <Route path="/langues" element={<LanguesPage />} />
          <Route path="/langues/:slug" element={<LanguesPage />} />
          <Route path="/soutien" element={<SoutienPage />} />
          <Route path="/soutien/:slug" element={<SoutienPage />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/a-propos" element={<Apropos />} />
          <Route path="/bourses" element={<Bourses />} />
                  </Routes>
      </main>
      <Footer />

      {/* Persistent WhatsApp Floating Button */}
      <a 
        href="https://wa.me/212645212800" 
        target="_blank" 
        rel="noreferrer" 
        className="whatsapp-float"
        title="Contactez-nous sur WhatsApp"
      >
        <svg viewBox="0 0 24 24" className="whatsapp-icon" fill="currentColor">
          <path d="M12.031 6.172c-2.202 0-3.991 1.789-3.991 3.991 0 .885.29 1.704.779 2.365l-.993 3.634 3.709-.971c.655.463 1.449.734 2.306.734 2.202 0 3.991-1.789 3.991-3.991 0-2.202-1.789-3.991-3.991-3.991zm3.516 4.751c-.133.201-.444.3-.888.3-.444 0-1.233-.201-1.923-.501-.69-.3-1.284-.7-1.776-1.151-.492-.451-.837-.951-1.035-1.451-.198-.5-.198-.851-.148-1.101.05-.251.2-.451.4-.601.2-.15.4-.251.651-.251h.148c.133 0 .266.013.391.013.133.013.3.013.444.201l.444.951c.148.351.3.701.148.951-.148.251-.351.401-.5.551-.148.15-.3.3-.148.551.148.251.4.551.7.851.3.3.651.5.951.651.3.15.5.15.7-.15.2-.3.4-.551.551-.851.148-.3.351-.451.551-.451h.148c.133 0 .266.013.391.013.133.013.3.013.444.201l.444.951c.148.351.3.701.148.951zM12 2C6.477 2 2 6.477 2 12c0 1.891.524 3.66 1.438 5.168L2.031 22l4.991-1.309C8.43 21.503 10.151 22 12 22c5.523 0 10-4.477 10-10S17.523 2 12 2zm0 18c-1.651 0-3.19-.43-4.521-1.172l-2.793.731.751-2.744A7.952 7.952 0 0 1 4 12c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8z"/>
        </svg>
      </a>
    </div>
  );
}