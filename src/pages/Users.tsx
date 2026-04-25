import React from "react";

const Users: React.FC = () => (
  <div className="relative min-h-screen bg-[#05000a] text-white pt-48 pb-32 px-6 overflow-hidden">
    <div className="absolute top-[-10%] right-[-5%] w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none -z-10" />
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 text-white">
        Your Night. <br/><span className="text-purple-500">Optimized.</span>
      </h1>
      <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-24 leading-relaxed">
        Erlebe das erste Betriebssystem für die physische Welt. GIGILUKO eliminiert FOMO durch Echtzeit-Daten.
      </p>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/5 border border-white/10 p-12 rounded-[50px]">
          <h3 className="text-2xl font-black uppercase italic mb-4">01. Live Check-In</h3>
          <p className="text-gray-500 leading-relaxed">Sehen Sie in Echtzeit, wo wie viel los ist – von moderat bis very busy. Nie mehr vor verschlossenen Türen oder leeren Bars stehen.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-12 rounded-[50px]">
          <h3 className="text-2xl font-black uppercase italic mb-4">02. Vibe Check</h3>
          <p className="text-gray-500 leading-relaxed">Authentische Stimmungsbilder von anderen Gästen – live und unmittelbar. Wissen, ob der Vibe "chill" oder "party" ist, bevor man ankommt.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-12 rounded-[50px]">
          <h3 className="text-2xl font-black uppercase italic mb-4">03. Interactive Map</h3>
          <p className="text-gray-500 leading-relaxed">Entdecken Sie Hotspots in Stuttgart oder Ihrer Zielstadt. Integriertes Ticketing und Reservierungen mit nur einem Tap.</p>
        </div>
        <div className="bg-white/5 border border-white/10 p-12 rounded-[50px]">
          <h3 className="text-2xl font-black uppercase italic mb-4">04. One Bill</h3>
          <p className="text-gray-500 leading-relaxed">Eine einzige, kategorisierte Monatsrechnung für alle Erlebnisse. Von Mobilität bis Gastronomie – alles DATEV-ready.</p>
        </div>
      </div>
    </div>
  </div>
);
export default Users;
