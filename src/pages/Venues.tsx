import React from "react";

const Venues: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#05000a] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute bottom-[-10%] left-[-10%] w-[800px] h-[800px] bg-pink-600/5 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 bg-gradient-to-r from-purple-400 to-pink-500 bg-clip-text text-transparent">
          Venue <br/>Intelligence.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-20 leading-relaxed">
          Digitalisieren Sie Ihren Club mit dem ersten echten Nightlife Operating System. Datengetriebenes Management für die nächste Generation der Clubkultur.
        </p>

        <div className="grid md:grid-cols-3 gap-6">
          {[
            { t: "Push-Up Marketing", d: "Erreichen Sie Ihre Zielgruppe genau dann, wenn sie ausgehen möchte. Lokales Targeting direkt auf den Sperrbildschirm." },
            { t: "Real-Time Analytics", d: "Verstehen Sie Ihre Crowd. Wer kommt wann? Welche Musik zieht? Optimieren Sie Ihr Personal und Programm basierend auf Daten." },
            { t: "Door Management", d: "Effiziente Abwicklung der Gästeliste und Ticketverkäufe. Reduzieren Sie Wartezeiten und erhöhen Sie die Kundenzufriedenheit." }
          ].map((item, i) => (
            <div key={i} className="p-8 bg-white/5 border border-white/10 rounded-[40px] hover:border-purple-500/30 transition-all">
              <h3 className="text-xl font-bold mb-4 text-white uppercase italic">{item.t}</h3>
              <p className="text-gray-500 leading-relaxed text-sm">{item.d}</p>
            </div>
          ))}
        </div>

        <div className="mt-20 p-12 bg-gradient-to-br from-purple-900/20 to-black border border-purple-500/20 rounded-[50px] text-center">
            <h2 className="text-3xl font-bold mb-6">Partner werden für 2026</h2>
            <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Wir suchen die exklusiven Launch-Partner in Stuttgart. Sichern Sie sich First-Mover Vorteile in unserem Ökosystem.
            </p>
            <button className="bg-purple-600 text-white px-10 py-4 rounded-2xl font-black uppercase tracking-widest hover:bg-purple-500 transition-all">
                Kontakt Anfragen
            </button>
        </div>
      </div>
    </div>
  );
};

export default Venues;
