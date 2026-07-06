import { Link } from "react-router-dom";
import { useLanguage } from "../Layout";

const content = {
  de: {
    eyebrow: "FÜR VENUES",
    title1: "Dein Venue. Voll.",
    title2: "Mit Daten statt Bauchgefühl.",
    subtitle:
      "GIGILUKO ist nicht nur für Nachtschwärmer. Clubs, Bars und Veranstalter steuern ihre Sichtbarkeit, erreichen die richtigen Gäste und verstehen ihr Publikum — in Echtzeit.",
    cards: [
      { icon: "📣", title: "Live-Marketing", desc: "Poste Updates, Events und Specials — und erreiche Gäste genau dann, wenn sie entscheiden, wohin sie gehen." },
      { icon: "🎯", title: "Gezielte Pushes", desc: "Erreiche Nutzer in deiner Stadt direkt — statt teurer Streuwerbung, die niemanden erreicht." },
      { icon: "📊", title: "Analytics & Insights", desc: "Sieh, wer kommt: Traffic, Demografie, was funktioniert. Entscheidungen mit Daten, nicht aus dem Bauch." },
    ],
    cta: "Als Venue dabei sein",
    pricingLink: "Preise ansehen",
    ctaNote: "Wir starten mit ausgewählten Launch-Partnern. Sichere dir deinen Platz.",
  },
  en: {
    eyebrow: "FOR VENUES",
    title1: "Your venue. Packed.",
    title2: "With data, not guesswork.",
    subtitle:
      "GIGILUKO isn't just for partygoers. Clubs, bars and promoters control their visibility, reach the right guests and understand their crowd — in real time.",
    cards: [
      { icon: "📣", title: "Live Marketing", desc: "Post updates, events and specials — and reach guests exactly when they're deciding where to go." },
      { icon: "🎯", title: "Targeted Pushes", desc: "Reach users in your city directly — instead of expensive scattershot ads that reach no one." },
      { icon: "📊", title: "Analytics & Insights", desc: "See who shows up: traffic, demographics, what works. Decisions backed by data, not gut feeling." },
    ],
    cta: "Become a venue partner",
    pricingLink: "View pricing",
    ctaNote: "We're launching with select partners. Secure your spot.",
  },
};

const B2BInfrastructure = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <section
      id="venues"
      className="relative bg-white dark:bg-[#05000a] text-black dark:text-white py-28 px-6 overflow-hidden transition-colors duration-500"
    >
      <div className="hidden md:block absolute bottom-0 left-1/2 -translate-x-1/2 w-[700px] h-[400px] bg-pink-500/10 dark:bg-pink-600/10 rounded-[100%] blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto relative z-10">
        <div className="text-center mb-14">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-6">
            {t.eyebrow}
          </span>
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter leading-[1.1] mb-5">
            {t.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.title2}
            </span>
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-14">
          {t.cards.map((card, i) => (
            <div
              key={i}
              className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-[1.75rem] hover:border-[#EC4899]/40 transition-all"
            >
              <div className="w-14 h-14 bg-pink-500/15 rounded-2xl flex items-center justify-center mb-6 text-2xl">
                {card.icon}
              </div>
              <h3 className="text-xl font-bold mb-3">{card.title}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{card.desc}</p>
            </div>
          ))}
        </div>

        <div className="text-center">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="mailto:support@gigiluko.com?subject=Venue Partnership"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
            >
              {t.cta}
            </a>
            <Link
              to="/pricing"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#EC4899]/50 transition-all"
            >
              {t.pricingLink}
            </Link>
          </div>
          <p className="text-xs text-gray-500 dark:text-gray-500 mt-4">{t.ctaNote}</p>
        </div>
      </div>
    </section>
  );
};

export default B2BInfrastructure;
