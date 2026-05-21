import screen1 from '../../assets/v3/mockups/screen1.png';
import screen2 from '../../assets/v3/mockups/screen2.png';
import screen3 from '../../assets/v3/mockups/screen3.png'; 
import screen4 from '../../assets/v3/mockups/screen4.png';

const StickyScrollShowcase = () => {
  return (
    <section className="bg-[#05000a] text-white py-32 overflow-hidden">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* =========================================
            BILD 1: Radar (Bild Links, Text Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[600px] bg-[#111] border-[6px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#05000a] rounded-full z-20"></div>
              <img src={screen1} alt="Radar Map" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
              Die Stadt in <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">Echtzeit.</span>
            </h2>
            <p className="text-[#9ca3af] text-lg font-light leading-relaxed max-w-md">
              Kein Raten mehr. Sehen Sie sofort auf dem Radar, wo das Leben gerade pulsiert, und vernetzen Sie sich nahtlos beim Feiern.
            </p>
          </div>
        </div>

        {/* =========================================
            BILD 2: Club (Text Links, Bild Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[280px] h-[600px] bg-[#111] border-[6px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#05000a] rounded-full z-20"></div>
              <img src={screen2} alt="Location Details" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end text-left md:text-right">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                Ihr Kompass <br/>für die Nacht.
              </h2>
              <p className="text-[#9ca3af] text-lg font-light leading-relaxed">
                Detaillierte Profile, Live-Auslastung und exklusive Einblicke. Entdecken Sie Locations, die perfekt zu Ihnen passen.
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            BILD 3: Revenue (Bild Links, Text Rechts) - JETZT VORGEZOGEN
        ========================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[600px] bg-[#111] border-[6px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#05000a] rounded-full z-20"></div>
              <img src={screen4} alt="Revenue View" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
              Umsatz <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">im Fokus.</span>
            </h2>
            <p className="text-[#9ca3af] text-lg font-light leading-relaxed max-w-md">
              Erreichen Sie mehr Gäste genau dann, wenn Sie es brauchen. Transparente Analysen und Steuerungsmittel für den messbaren Erfolg Ihrer Firma.
            </p>
          </div>
        </div>

        {/* =========================================
            BILD 4: Dashboard (Text Links, Bild Rechts) - JETZT AN STELLE 4
        ========================================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24 mb-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[280px] h-[600px] bg-[#111] border-[6px] border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-[#05000a] rounded-full z-20"></div>
              <img src={screen3} alt="Business Dashboard" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end text-left md:text-right">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                Gastronomie <br/>neu gedacht.
              </h2>
              <p className="text-[#9ca3af] text-lg font-light leading-relaxed">
                Das Cockpit für Ihren Gastronomiebetrieb. Behalten Sie die Auslastung im Blick und verwalten Sie Ihre Sichtbarkeit ganz einfach auf einem Bildschirm.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StickyScrollShowcase;
