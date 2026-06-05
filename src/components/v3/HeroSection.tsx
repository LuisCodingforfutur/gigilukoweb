import React, { useState } from 'react';
import { motion, Variants } from 'framer-motion';
import { useLanguage } from '../Layout';
import { db } from '../../firebaseConfig';
import { collection, addDoc, serverTimestamp } from 'firebase/firestore';

const content = {
  de: {
    badge: "GIGILUKO V1 IS COMING",
    title1: "Das Betriebssystem",
    title2: "für das Nachtleben.",
    subtitle: "Verwalten Sie Ihre Sichtbarkeit, maximieren Sie Ihren Umsatz und erreichen Sie Ihre Gäste in Echtzeit. Alles an einem Ort.",
    cta: "Auf die Warteliste",
    placeholder: "Deine E-Mail Adresse...",
    success: "Erfolgreich eingetragen!",
    error: "Fehler aufgetreten!",
    instagram: "Folge unserer Reise auf Instagram",
    consentText: "Ich willige ein, dass meine E-Mail-Adresse zur Aufnahme in die Waitlist gespeichert wird. Details in der ",
    privacyLink: "Datenschutzerklärung",
    consentSuffix: "."
  },
  en: {
    badge: "GIGILUKO V1 IS COMING",
    title1: "The Operating System",
    title2: "for Nightlife.",
    subtitle: "Manage your visibility, maximize your revenue, and reach your guests in real-time. All in one place.",
    cta: "Join the Waitlist",
    placeholder: "Your email address...",
    success: "Successfully joined!",
    error: "Error occurred!",
    instagram: "Follow our journey on Instagram",
    consentText: "I consent to my email address being stored to join the waitlist. Details in the ",
    privacyLink: "Privacy Policy",
    consentSuffix: "."
  }
};

const HeroSection = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  // === WAITLIST LOGIK ===
  const [email, setEmail] = useState("");
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [consent, setConsent] = useState(false);

  const handleWaitlist = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email.includes("@")) return;
    if (!consent) return;
    setStatus("loading");
    
    try {
      await addDoc(collection(db, "waitlist"), { 
        email, 
        timestamp: serverTimestamp() 
      });
      
      try {
        await fetch('/api/send', { 
          method: 'POST', 
          headers: { 'Content-Type': 'application/json' }, 
          body: JSON.stringify({ email }) 
        });
      } catch (emailError) {
        console.warn("E-Mail API Fehler ignoriert:", emailError);
      }
      
      setStatus("success");
      setEmail("");
      setTimeout(() => setStatus("idle"), 3000);
    } catch (error) { 
      console.error("GIGILUKO Waitlist Error: ", error);
      setStatus("error"); 
      setTimeout(() => setStatus("idle"), 3000);
    }
  };

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
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 pb-32">
      
      {/* PREMIUM GLOW */}
      <div className="hidden md:block absolute top-[20%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-purple-500/20 dark:bg-purple-600/20 rounded-[100%] blur-[120px] pointer-events-none transition-colors duration-700 transform-gpu"></div>
      <div className="hidden md:block absolute top-[30%] left-[50%] -translate-x-1/2 w-[600px] h-[400px] bg-pink-500/20 dark:bg-pink-600/10 rounded-[100%] blur-[100px] pointer-events-none transition-colors duration-700 transform-gpu"></div>

      <div className="container mx-auto px-6 relative z-10 text-center max-w-5xl">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="flex flex-col items-center">
          
          <motion.div variants={itemVariants} className="mb-8">
            <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-xs md:text-sm font-semibold tracking-widest text-gray-700 dark:text-gray-300 transition-colors duration-500 transform-gpu">
              ✨ {t.badge}
            </span>
          </motion.div>

          <motion.h1 variants={itemVariants} className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tighter leading-[1.1] mb-8 text-black dark:text-white transition-colors duration-500">
            {t.title1} <br/>
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.title2}
            </span>
          </motion.h1>

          <motion.p variants={itemVariants} className="text-lg md:text-xl text-gray-600 dark:text-[#9ca3af] font-light max-w-2xl mx-auto mb-12 leading-relaxed transition-colors duration-500">
            {t.subtitle}
          </motion.p>

          {/* === INTERAKTIVES WAITLIST FORMULAR === */}
          <motion.form 
            variants={itemVariants} 
            onSubmit={handleWaitlist} 
            className="w-full max-w-lg mx-auto"
          >
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <input 
                type="email" 
                placeholder={t.placeholder} 
                value={email} 
                onChange={(e) => setEmail(e.target.value)} 
                required
                className="w-full sm:w-auto flex-grow px-6 py-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 backdrop-blur-md text-black dark:text-white outline-none focus:border-purple-500 transition-all placeholder-gray-500"
              />
              
              <button 
                type="submit" 
                disabled={status === "loading" || status === "success" || !consent}
                className={`w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white transition-all duration-300 transform ${
                  status === "success" ? "bg-green-500 hover:scale-100" :
                  status === "error" ? "bg-red-500 hover:scale-100" :
                  !consent ? "bg-gray-400 dark:bg-white/10 cursor-not-allowed" :
                  "bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105"
                }`}
              >
                {status === "loading" ? "..." : 
                 status === "success" ? t.success : 
                 status === "error" ? t.error : t.cta}
              </button>
            </div>

            <label className="flex items-start justify-center gap-2 mt-4 text-left text-xs text-gray-500 dark:text-gray-400 cursor-pointer max-w-md mx-auto">
              <input 
                type="checkbox" 
                checked={consent} 
                onChange={(e) => setConsent(e.target.checked)} 
                required
                className="mt-0.5 accent-[#A855F7] w-4 h-4 flex-shrink-0"
              />
              <span>
                {t.consentText}
                <a 
                  href={lang === "de" ? "/privacy-de" : "/privacy"} 
                  target="_blank" 
                  rel="noopener noreferrer" 
                  className="underline hover:text-purple-500 dark:hover:text-purple-400"
                >
                  {t.privacyLink}
                </a>
                {t.consentSuffix}
              </span>
            </label>
          </motion.form>

          {/* === ELEGANTER INSTAGRAM LINK === */}
          <motion.div variants={itemVariants} className="mt-12">
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
