import screen1 from '../../assets/v3/mockups/screen1.png';
import screen2 from '../../assets/v3/mockups/screen2.png';
import screen3 from '../../assets/v3/mockups/screen3.png'; 
import screen4 from '../../assets/v3/mockups/screen4.png';
import { useLanguage } from '../Layout';

const content = {
  de: {
    s1_t1: "Die Stadt in",
    s1_t2: "Echtzeit.",
    s1_d: "Kein Raten mehr. Sehen Sie sofort auf dem Radar, wo das Leben gerade pulsiert, und vernetzen Sie sich nahtlos beim Feiern.",
    s2_t1: "Ihr Kompass",
    s2_t2: "für die Nacht.",
    s2_d: "Detaillierte Profile, Live-Auslastung und exklusive Einblicke. Entdecken Sie Locations, die perfekt zu Ihnen passen.",
    s3_t1: "Umsatz",
    s3_t2: "im Fokus.",
    s3_d: "Erreichen Sie mehr Gäste genau dann, wenn Sie es brauchen. Transparente Analysen und Steuerungsmittel für den messbaren Erfolg Ihrer Firma.",
    s4_t1: "Gastronomie",
    s4_t2: "neu gedacht.",
    s4_d: "Das Cockpit für Ihren Gastronomiebetrieb. Behalten Sie die Auslastung im Blick und verwalten Sie Ihre Sichtbarkeit ganz einfach auf einem Bildschirm."
  },
  en: {
    s1_t1: "The City in",
    s1_t2: "Real-Time.",
    s1_d: "No more guessing. Instantly see on the radar where life is pulsating, and seamlessly connect while partying.",
    s2_t1: "Your Compass",
    s2_t2: "for the Night.",
    s2_d: "Detailed profiles, live capacity, and exclusive insights. Discover venues that perfectly match your vibe.",
    s3_t1: "Revenue",
    s3_t2: "in Focus.",
    s3_d: "Reach more guests exactly when you need them. Transparent analytics and management tools for the measurable success of your business.",
    s4_t1: "Gastronomy",
    s4_t2: "Reimagined.",
    s4_d: "The cockpit for your venue. Monitor capacity and easily manage your visibility from a single screen."
  }
};

const StickyScrollShowcase = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section className="bg-white dark:bg-[#05000a] text-black dark:text-white py-32 overflow-hidden transition-colors duration-500">
      <div className="container mx-auto px-6 max-w-6xl">
        
        {/* =========================================
            BILD 1: Radar (Bild Links, Text Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[600px] bg-gray-100 dark:bg-[#111] border-[6px] border-gray-300 dark:border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden transition-colors duration-500">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-[#05000a] rounded-full z-20 transition-colors duration-500"></div>
              <img src={screen1} alt="Radar Map" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
              {t.s1_t1} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">{t.s1_t2}</span>
            </h2>
            <p className="text-gray-600 dark:text-[#9ca3af] text-lg font-light leading-relaxed max-w-md transition-colors duration-500">
              {t.s1_d}
            </p>
          </div>
        </div>

        {/* =========================================
            BILD 2: Club (Text Links, Bild Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[280px] h-[600px] bg-gray-100 dark:bg-[#111] border-[6px] border-gray-300 dark:border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden transition-colors duration-500">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-[#05000a] rounded-full z-20 transition-colors duration-500"></div>
              <img src={screen2} alt="Location Details" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end text-left md:text-right">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                {t.s2_t1} <br/>{t.s2_t2}
              </h2>
              <p className="text-gray-600 dark:text-[#9ca3af] text-lg font-light leading-relaxed transition-colors duration-500">
                {t.s2_d}
              </p>
            </div>
          </div>
        </div>

        {/* =========================================
            BILD 3: Revenue (Bild Links, Text Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-12 md:gap-24 mb-40">
          <div className="w-full md:w-1/2 flex justify-center md:justify-end">
            <div className="relative w-[280px] h-[600px] bg-gray-100 dark:bg-[#111] border-[6px] border-gray-300 dark:border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(168,85,247,0.15)] overflow-hidden transition-colors duration-500">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-[#05000a] rounded-full z-20 transition-colors duration-500"></div>
              <img src={screen4} alt="Revenue View" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2">
            <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
              {t.s3_t1} <br/><span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">{t.s3_t2}</span>
            </h2>
            <p className="text-gray-600 dark:text-[#9ca3af] text-lg font-light leading-relaxed max-w-md transition-colors duration-500">
              {t.s3_d}
            </p>
          </div>
        </div>

        {/* =========================================
            BILD 4: Dashboard (Text Links, Bild Rechts)
        ========================================= */}
        <div className="flex flex-col md:flex-row-reverse items-center justify-between gap-12 md:gap-24 mb-10">
          <div className="w-full md:w-1/2 flex justify-center md:justify-start">
            <div className="relative w-[280px] h-[600px] bg-gray-100 dark:bg-[#111] border-[6px] border-gray-300 dark:border-[#222] rounded-[3rem] shadow-[0_0_50px_rgba(236,72,153,0.15)] overflow-hidden transition-colors duration-500">
              <div className="absolute top-2 left-1/2 -translate-x-1/2 w-20 h-5 bg-gray-800 dark:bg-[#05000a] rounded-full z-20 transition-colors duration-500"></div>
              <img src={screen3} alt="Business Dashboard" className="absolute top-0 left-0 w-full h-full object-cover" />
            </div>
          </div>
          <div className="w-full md:w-1/2 flex md:justify-end text-left md:text-right">
            <div className="max-w-md">
              <h2 className="text-4xl md:text-5xl font-black tracking-tighter uppercase mb-6">
                {t.s4_t1} <br/>{t.s4_t2}
              </h2>
              <p className="text-gray-600 dark:text-[#9ca3af] text-lg font-light leading-relaxed transition-colors duration-500">
                {t.s4_d}
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
};

export default StickyScrollShowcase;
