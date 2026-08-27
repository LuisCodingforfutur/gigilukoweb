import { Link } from 'react-router-dom';
import { useLanguage } from '../Layout';

const content = {
  de: {
    bannerText: "🚀 Werde GIGILUKO Ambassador",
    bannerCta: "Mehr erfahren"
  },
  en: {
    bannerText: "🚀 Become a GIGILUKO Ambassador",
    bannerCta: "Learn more"
  }
};

const AmbassadorBanner = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <Link
      to="/ambassador"
      className="fixed top-3 md:top-5 left-1/2 -translate-x-1/2 z-[200] bg-white/5 backdrop-blur-xl text-gray-700 dark:text-gray-200 py-1.5 px-4 rounded-full border border-black/10 dark:border-white/15 cursor-pointer hover:border-[#EC4899]/50 transition-all flex flex-row items-center justify-center gap-2 md:gap-3 text-[11px] md:text-xs font-medium whitespace-nowrap"
    >
      <span>{t.bannerText}</span>
      <span className="font-bold text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899] whitespace-nowrap">{t.bannerCta} &rarr;</span>
    </Link>
  );
};

export default AmbassadorBanner;
