import { useLanguage } from "../components/Layout";

const content = {
  de: {
    badge: "PRICING",
    title1: "Ein Plan für",
    title2: "jedes Venue.",
    subtitle: "Vom einzelnen Club bis zur Gruppe — starte mit dem Plan, der zu deinem Venue passt.",
    monthly: "pro Monat",
    vat: "Alle Preise zzgl. gesetzlicher USt.",
    popular: "Beliebt",
    onRequest: "Auf Anfrage",
    cta: "Kontakt aufnehmen",
    everythingIn: "Alles aus",
    tiers: [
      {
        name: "Starter",
        price: "99 €",
        desc: "Für Venues, die sichtbar werden wollen.",
        features: [
          "Venue-Profil verwalten",
          "Events & Live-Updates posten",
          "Sichtbarkeit auf der Live-Map",
          "Präsenz im Community-Feed",
        ],
      },
      {
        name: "Pro",
        price: "299 €",
        desc: "Für Venues, die wachsen wollen.",
        highlight: true,
        plus: "Starter",
        features: [
          "Gezielte Push-Kampagnen",
          "Analytics & Insights Dashboard",
          "Boost-Platzierungen",
          "Priorisierter Support",
        ],
      },
      {
        name: "Enterprise",
        price: null,
        desc: "Für Gruppen, Ketten und Veranstalter.",
        plus: "Pro",
        features: [
          "Multi-Venue-Verwaltung",
          "API- & Datenzugang",
          "Dedizierter Ansprechpartner",
          "Individuelle Verträge & SLA",
        ],
      },
    ],
  },
  en: {
    badge: "PRICING",
    title1: "A plan for",
    title2: "every venue.",
    subtitle: "From a single club to a group — start with the plan that fits your venue.",
    monthly: "per month",
    vat: "All prices exclude statutory VAT.",
    popular: "Popular",
    onRequest: "On request",
    cta: "Contact us",
    everythingIn: "Everything in",
    tiers: [
      {
        name: "Starter",
        price: "€99",
        desc: "For venues that want to be seen.",
        features: [
          "Manage your venue profile",
          "Post events & live updates",
          "Visibility on the live map",
          "Presence in the community feed",
        ],
      },
      {
        name: "Pro",
        price: "€299",
        desc: "For venues that want to grow.",
        highlight: true,
        plus: "Starter",
        features: [
          "Targeted push campaigns",
          "Analytics & insights dashboard",
          "Boost placements",
          "Priority support",
        ],
      },
      {
        name: "Enterprise",
        price: null,
        desc: "For groups, chains and promoters.",
        plus: "Pro",
        features: [
          "Multi-venue management",
          "API & data access",
          "Dedicated account manager",
          "Custom contracts & SLA",
        ],
      },
    ],
  },
};

const Pricing = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="bg-white dark:bg-[#05000a] text-black dark:text-white min-h-screen transition-colors duration-500 pt-32 md:pt-40 pb-24 px-6">
      <div className="max-w-6xl mx-auto">

        <section className="text-center mb-16">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-6">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            {t.title1}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.title2}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t.subtitle}
          </p>
        </section>

        <section className="grid md:grid-cols-3 gap-6 mb-8 items-stretch">
          {t.tiers.map((tier) => (
            <div
              key={tier.name}
              className={`relative flex flex-col p-8 rounded-[2rem] border transition-all ${
                tier.highlight
                  ? "bg-black/[0.03] dark:bg-white/[0.07] border-[#A855F7] shadow-[0_0_50px_-12px_rgba(168,85,247,0.35)]"
                  : "bg-black/[0.03] dark:bg-white/5 border-black/10 dark:border-white/10 hover:border-[#EC4899]/40"
              }`}
            >
              {tier.highlight && (
                <span className="absolute -top-3 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
                  {t.popular}
                </span>
              )}

              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <p className="text-sm text-gray-600 dark:text-gray-400 mb-6">{tier.desc}</p>

              <div className="mb-6">
                {tier.price ? (
                  <>
                    <span className="text-4xl font-black tracking-tight">{tier.price}</span>
                    <span className="text-sm text-gray-500 dark:text-gray-400 ml-2">{t.monthly}</span>
                  </>
                ) : (
                  <span className="text-3xl font-black tracking-tight">{t.onRequest}</span>
                )}
              </div>

              <ul className="space-y-3 mb-8 flex-grow">
                {tier.plus && (
                  <li className="text-xs font-bold uppercase tracking-widest text-[#A855F7]">
                    {t.everythingIn} {tier.plus} +
                  </li>
                )}
                {tier.features.map((f, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#EC4899] mt-0.5">✦</span>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>

              <a
                href={`mailto:support@gigiluko.com?subject=GIGILUKO ${tier.name} – Anfrage`}
                className={`block text-center py-3.5 rounded-full font-bold transition-all ${
                  tier.highlight
                    ? "text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-[1.02]"
                    : "bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#EC4899]/50"
                }`}
              >
                {t.cta}
              </a>
            </div>
          ))}
        </section>

        <p className="text-center text-xs text-gray-500 dark:text-gray-500">{t.vat}</p>

      </div>
    </main>
  );
};

export default Pricing;
