import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../Layout';

const content = {
  de: {
    badge: "GIGILUKO V3 IS COMING",
    title1: "Das Betriebssystem",
    title2: "für das Nachtleben.",
    subtitle: "Verwalten Sie Ihre Sichtbarkeit, maximieren Sie Ihren Umsatz und erreichen Sie Ihre Gäste in Echtzeit. Alles an einem Ort.",
    cta: "Auf die Warteliste",
    secondary: "Features entdecken"
  },
  en: {
    badge: "GIGILUKO V3 IS COMING",
    title1: "The Operating System",
    title2: "for Nightlife.",
    subtitle: "Manage your visibility, maximize your revenue, and reach your guests in real-time. All in one place.",
    cta: "Join the Waitlist",
    secondary: "Explore Features"
  }
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  // TypeScript Typ "Variants" hinzugefügt
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">
      
      {/* === ABSOLUTER PREMIUM GLOW === */}
      <div className="absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none transition-colors duration-700"></div>
      <div className="absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-pink-500/20 dark:bg-pink-600/10 rounded-[100%] blur-[100px] pointer-events-none transition-colors duration-700"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col items-center"
        >
          {/* Glassmorphism Badge */}
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-xs md:text-sm font-semibold tracking-widest text-gray-700 dark:text-gray-300 transition-colors duration-500">
              ✨ {t.badge}
            </span>
          </motion.div>

          {/* Massive Cinematic Headline */}
          <motion.h1 variants={itemVariants} className="text-5xl md:text-7xl lg:text-8xl font-black tracking-tighter leading-[1.1] mb-8 text-black dark:text-white transition-colors duration-500">
            {t.title1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.title2}
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-[#9ca3af] font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-500">
            {t.subtitle}
          </motion.p>

          {/* CTA Buttons */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row items-center justify-center gap-4 w-full sm:w-auto">
            {/* Primärer Premium-Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] transition-all duration-300 transform hover:scale-105">
              {t.cta}
            </button>
            
            {/* Sekundärer Glassmorphism-Button */}
            <button className="w-full sm:w-auto px-8 py-4 rounded-full font-medium text-black dark:text-white bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md hover:bg-black/10 dark:hover:bg-white/10 transition-all duration-300">
              {t.secondary}
            </button>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
