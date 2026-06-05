import { Link } from 'react-router-dom';
import { useLanguage } from '../Layout';

const content = {
  de: {
    bannerText: "🚀 Werde GIGILUKO Ambassador – bring deine Stadt oder Uni aufs Radar!",
    bannerCta: "Mehr erfahren"
  },
  en: {
    bannerText: "🚀 Become a GIGILUKO Ambassador – put your city or uni on the radar!",
    bannerCta: "Learn more"
  }
};

const AmbassadorBanner = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <Link
      to="/ambassador"
      className="fixed top-4 md:top-6 left-1/2 -translate-x-1/2 w-[92%] md:w-auto z-[200] bg-gradient-to-r from-[#A855F7] to-[#EC4899] text-white py-2.5 px-6 rounded-full shadow-[0_8px_30px_rgba(168,85,247,0.3)] border border-white/20 cursor-pointer hover:scale-[1.02] transition-all flex flex-col md:flex-row items-center justify-center gap-2 md:gap-4 text-xs md:text-sm font-medium"
    >
      <span>{t.bannerText}</span>
      <span className="font-bold bg-white/20 px-3 py-1 rounded-full whitespace-nowrap">{t.bannerCta} &rarr;</span>
    </Link>
  );
};

export default AmbassadorBanner;
