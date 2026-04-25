import React from "react";

const Venues: React.FC = () => (
  <div className="relative min-h-screen bg-[#05000a] text-white pt-48 pb-32 px-6 overflow-hidden">
    <div className="absolute bottom-[-10%] left-[-5%] w-[800px] h-[800px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none -z-10" />
    <div className="max-w-5xl mx-auto">
      <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 text-white">Venue <br/><span className="text-pink-500">Intelligence.</span></h1>
      <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-24 leading-relaxed">Steigern Sie Ihre Effizienz und minimieren Sie Leerlaufzeiten durch datengetriebene Steuerung in Echtzeit.</p>
      <div className="grid md:grid-cols-3 gap-6 mb-20">
        <div className="p-10 bg-white/5 border border-white/10 rounded-[40px]"><h3 className="text-xl font-bold mb-4 uppercase italic text-white">Push Marketing</h3><p className="text-gray-500 text-sm">Aktivieren Sie Gäste in Echtzeit mit gezielten Benachrichtigungen.</p></div>
        <div className="p-10 bg-white/5 border border-white/10 rounded-[40px]"><h3 className="text-xl font-bold mb-4 uppercase italic text-white">Live Analytics</h3><p className="text-gray-500 text-sm">Verstehen Sie Besucherströme basierend auf anonymisierten Echtzeit-Daten.</p></div>
        <div className="p-10 bg-white/5 border border-white/10 rounded-[40px]"><h3 className="text-xl font-bold mb-4 uppercase italic text-white">SaaS OS</h3><p className="text-gray-500 text-sm">Umfassendes Dashboard für Einlasskontrolle und Event-Promotion.</p></div>
      </div>
      <div className="bg-purple-900/10 border border-purple-500/20 p-16 rounded-[60px] text-center">
        <h2 className="text-3xl font-black uppercase italic mb-10 text-white">Wählen Sie Ihr Modell</h2>
        <div className="grid md:grid-cols-3 gap-8 text-left">
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5"><h4 className="font-black text-purple-400 uppercase tracking-widest mb-2">Starter</h4><p className="text-lg font-bold text-gray-300">Auf Anfrage</p></div>
          <div className="bg-white/5 p-8 rounded-3xl border border-purple-500/30 shadow-[0_0_20px_rgba(168,85,247,0.1)]"><h4 className="font-black text-white uppercase tracking-widest mb-2">Professional</h4><p className="text-lg font-bold text-gray-300">Auf Anfrage</p></div>
          <div className="bg-white/5 p-8 rounded-3xl border border-white/5"><h4 className="font-black text-pink-500 uppercase tracking-widest mb-2">Enterprise</h4><p className="text-lg font-bold text-gray-300">Custom Pricing</p></div>
        </div>
      </div>
    </div>
  </div>
);
export default Venues;
