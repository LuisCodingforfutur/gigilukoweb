import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useLanguage } from '../Layout';

const content = {
  de: {
    bannerText: "🚀 Werde GIGILUKO Ambassador und bringe deine Stadt oder Uni aufs Radar!",
    bannerCta: "Jetzt bewerben",
    modalTitle: "Wähle dein Programm",
    modalDesc: "Werde Teil der Bewegung und hilf uns, das Nachtleben zu digitalisieren.",
    uniTitle: "University Ambassador",
    uniDesc: "Bringe GIGILUKO an deinen Campus. Baue eine Community auf, veranstalte exklusive Events und werde das Gesicht unserer App an deiner Uni.",
    cityTitle: "City Ambassador",
    cityDesc: "Dein Revier, deine Regeln. Akquiriere die besten Clubs und Bars deiner Stadt und onboarde neue User in das GIGILUKO Netzwerk.",
    applyBtn: "Bewerbung starten"
  },
  en: {
    bannerText: "🚀 Become a GIGILUKO Ambassador and put your city or uni on the radar!",
    bannerCta: "Apply now",
    modalTitle: "Choose your path",
    modalDesc: "Join the movement and help us digitalize nightlife.",
    uniTitle: "University Ambassador",
    uniDesc: "Bring GIGILUKO to your campus. Build a community, host exclusive events, and become the face of our app at your university.",
    cityTitle: "City Ambassador",
    cityDesc: "Your turf, your rules. Acquire the best clubs and bars in your city and onboard new users to the GIGILUKO network.",
    applyBtn: "Start Application"
  }
};

const AmbassadorBanner = () => {
  const { lang } = useLanguage();
  const t = content[lang];
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      {/* --- TOP BANNER --- */}
      <div 
        onClick={() => setIsOpen(true)}
        className="fixed top-0 left-0 w-full z-[200] bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white py-2 px-4 text-center cursor-pointer hover:opacity-90 transition-opacity flex items-center justify-center gap-2 text-xs md:text-sm font-medium"
      >
        <span>{t.bannerText}</span>
        <span className="font-bold underline decoration-white/50 underline-offset-2">{t.bannerCta} &rarr;</span>
      </div>

      {/* --- MODAL OVERLAY --- */}
      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-[300] flex items-center justify-center p-4">
            <motion.div 
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div 
              initial={{ opacity: 0, scale: 0.95, y: 20 }} 
              animate={{ opacity: 1, scale: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-3xl bg-[#0a0014] border border-white/10 p-8 md:p-12 rounded-[2.5rem] shadow-[0_0_100px_rgba(168,85,247,0.2)] overflow-hidden"
            >
              {/* Close Button */}
              <button 
                onClick={() => setIsOpen(false)}
                className="absolute top-6 right-6 w-10 h-10 flex items-center justify-center rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white transition-colors"
              >
                ✕
              </button>

              <div className="text-center mb-10">
                <h2 className="text-3xl md:text-4xl font-black text-white uppercase tracking-tighter italic mb-4">{t.modalTitle}</h2>
                <p className="text-gray-400">{t.modalDesc}</p>
              </div>

              <div className="grid md:grid-cols-2 gap-6">
                
                {/* University Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#A855F7]/50 hover:bg-white/10 transition-all group flex flex-col h-full">
                  <div className="w-14 h-14 bg-purple-500/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                    🎓
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t.uniTitle}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{t.uniDesc}</p>
                  <a 
                    href="mailto:hello@gigiluko.com?subject=University Ambassador Application"
                    className="w-full block text-center py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-purple-500 hover:text-white transition-colors border border-white/10 hover:border-transparent"
                  >
                    {t.applyBtn}
                  </a>
                </div>

                {/* City Card */}
                <div className="bg-white/5 border border-white/10 p-8 rounded-[2rem] hover:border-[#EC4899]/50 hover:bg-white/10 transition-all group flex flex-col h-full">
                  <div className="w-14 h-14 bg-pink-500/20 rounded-2xl flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
                    🏙️
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">{t.cityTitle}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed mb-8 flex-grow">{t.cityDesc}</p>
                  <a 
                    href="mailto:hello@gigiluko.com?subject=City Ambassador Application"
                    className="w-full block text-center py-3 rounded-full bg-white/5 text-white font-semibold hover:bg-pink-500 hover:text-white transition-colors border border-white/10 hover:border-transparent"
                  >
                    {t.applyBtn}
                  </a>
                </div>

              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
};

export default AmbassadorBanner;
