import React from "react";

const Users: React.FC = () => {
  return (
    <div className="relative min-h-screen bg-[#05000a] text-white pt-32 pb-20 px-6 overflow-hidden">
      <div className="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-purple-600/10 blur-[150px] rounded-full pointer-events-none" />
      
      <div className="max-w-5xl mx-auto relative z-10">
        <h1 className="text-5xl md:text-8xl font-black italic uppercase tracking-tighter mb-8 bg-gradient-to-r from-white to-gray-500 bg-clip-text text-transparent">
          Your Night. <br/>Digitized.
        </h1>
        
        <p className="text-xl md:text-2xl text-gray-400 font-light max-w-3xl mb-20 leading-relaxed">
          GIGILUKO ist kein einfacher Guide. Es ist dein Interface für die Nacht. Wir eliminieren das Rätselraten und maximieren den Vibe.
        </p>

        <div className="grid md:grid-cols-2 gap-12">
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-500 uppercase tracking-widest">01. Live Radar</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Sieh in Echtzeit, wie voll dein Lieblingsclub ist. Kein "vielleicht", sondern Fakten. Musikrichtung, Crowd-Dichte und Energie-Level – alles auf einem Screen.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-500 uppercase tracking-widest">02. Community Feed</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Echte Eindrücke von echten Leuten. Der Feed zeigt dir, was gerade passiert, nicht was vor zwei Stunden war. Von der Schlange bis zum Dancefloor.
            </p>
          </div>
          <div className="space-y-6">
            <h3 className="text-2xl font-bold text-purple-500 uppercase tracking-widest">03. Seamless Entry</h3>
            <p className="text-gray-400 text-lg leading-relaxed">
              Dein digitaler Pass für die Nacht. Schnellere Check-ins, exklusive Gästelisten-Slots und kein Stress an der Tür. 
            </p>
          </div>
          <div className="space-y-6 bg-purple-600/5 p-8 rounded-[40px] border border-purple-500/20">
            <h3 className="text-2xl font-bold text-white uppercase tracking-tighter italic">FOMO is over.</h3>
            <p className="text-purple-200/60">Sei Teil der Beta für Stuttgart 2026 und sichere dir deinen Lifetime-Status.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Users;
