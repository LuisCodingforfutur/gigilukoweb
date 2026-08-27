import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../Layout';
import { APP_STORE_URL } from '../../config/app';

const content = {
  de: {
    badge: "JETZT IM APP STORE",
    title1: "Das Betriebssystem",
    title2: "für das Nachtleben.",
    subtitle: "Sieh live, was in deiner Stadt geht — Clubs, Bars und Events in Echtzeit auf deinem Radar.",
    cta: "Im App Store laden",
    ctaNote: "Kostenlos · iPhone & iPad · iOS 13+",
    instagram: "Folge unserer Reise auf Instagram"
  },
  en: {
    badge: "NOW ON THE APP STORE",
    title1: "The Operating System",
    title2: "for Nightlife.",
    subtitle: "See what's happening in your city, live — clubs, bars and events in real time on your radar.",
    cta: "Download on the App Store",
    ctaNote: "Free · iPhone & iPad · iOS 13+",
    instagram: "Follow our journey on Instagram"
  }
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  // === ANIMATIONS PROFILE ===
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2, delayChildren: 0.1 } }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-start justify-center overflow-hidden pt-44 md:pt-52 pb-32">

      {/* PREMIUM GLOW */}
      <div className="hidden md:block absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none transition-colors duration-700 transform-gpu"></div>
      <div className="hidden md:block absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-pink-500/20 dark:bg-pink-600/10 rounded-[100%] blur-[100px] pointer-events-none transition-colors duration-700 transform-gpu"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">

          <motion.div variants={itemVariants} className="mb-6">
            <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-xs md:text-sm font-semibold tracking-widest text-gray-700 dark:text-gray-300 transition-colors duration-500 transform-gpu">
              ✨ {t.badge}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-6 text-black dark:text-white transition-colors duration-500">
            {t.title1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.title2}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-[#9ca3af] font-light max-w-2xl mx-auto mb-10 leading-relaxed transition-colors duration-500">
            {t.subtitle}
          </motion.p>

          {/* === APP STORE CTA === */}
          <motion.div variants={itemVariants} className="w-full flex flex-col items-center">
            <a
              href={APP_STORE_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_40px_rgba(168,85,247,0.45)] hover:scale-105 transition-all duration-300"
            >
              <svg className="w-6 h-6 flex-shrink-0" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                <path d="M16.365 1.43c0 1.14-.42 2.2-1.12 3.02-.84.99-2.2 1.75-3.34 1.66a3.6 3.6 0 0 1-.03-.42c0-1.1.48-2.24 1.2-3.03.79-.9 2.17-1.6 3.24-1.64.02.14.05.28.05.41zM20.9 17.1c-.55 1.27-.82 1.84-1.53 2.96-.99 1.57-2.38 3.52-4.1 3.53-1.53.02-1.93-1-4.01-.99-2.08.01-2.51 1.01-4.04.99-1.72-.02-3.04-1.78-4.03-3.34C.4 15.9-.1 10.75 1.6 8.01c1.2-1.94 3.1-3.08 4.88-3.08 1.82 0 2.96 1 4.47 1 1.46 0 2.35-1 4.45-1 1.59 0 3.27.87 4.47 2.36-3.93 2.16-3.29 7.78 1.03 9.81z"/>
              </svg>
              {t.cta}
            </a>
            <p className="mt-4 text-xs text-gray-500 dark:text-gray-400">{t.ctaNote}</p>
          </motion.div>

          {/* === ELEGANTER INSTAGRAM LINK === */}
          <motion.div variants={itemVariants} className="mt-10">
            <a
              href="https://www.instagram.com/gigilukoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 px-6 py-3 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-black dark:hover:text-white hover:border-[#EC4899]/50 transition-all duration-300"
            >
              <svg
                className="w-5 h-5 text-gray-500 group-hover:text-[#EC4899] transition-colors duration-300"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
              {t.instagram}
            </a>
          </motion.div>

        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
