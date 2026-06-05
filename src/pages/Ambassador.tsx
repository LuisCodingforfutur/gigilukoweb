import { useLanguage } from "../components/Layout";

const content = {
  de: {
    badge: "AMBASSADOR PROGRAM",
    h1a: "Werde",
    h1b: "GIGILUKO Ambassador.",
    heroSub: "Du bist gut vernetzt, gehst gern feiern und willst etwas Großes mitaufbauen? Dann bring GIGILUKO in deine Stadt oder an deine Uni.",
    pathsTitle: "Wähle deinen Weg",
    pathsSub: "Zwei Wege, eine Mission: das Nachtleben digitalisieren.",
    uniTitle: "University Ambassador",
    uniDesc: "Du machst GIGILUKO zum Gesprächsthema auf deinem Campus.",
    uniTasks: [
      "Mach GIGILUKO in deinem Freundeskreis und an deiner Uni bekannt",
      "Organisiere Events, Pre-Games und Gatherings",
      "Gib uns Feedback aus deiner Community – du bist ihre Stimme",
    ],
    cityTitle: "City Ambassador",
    cityDesc: "Dein Revier, deine Regeln – du baust GIGILUKO in deiner Stadt auf.",
    cityTasks: [
      "Hol die besten Clubs und Bars deiner Stadt an Bord",
      "Bring neue User ins GIGILUKO-Netzwerk",
      "Sei unser Ohr am Puls der lokalen Szene",
    ],
    tasksLabel: "Was du machst",
    perksTitle: "Was du bekommst",
    perksSub: "Das springt für dich raus.",
    perks: [
      { icon: "🏷️", title: "Verifiziertes Ambassador-Badge", desc: "Sichtbares, verifiziertes Badge in deinem GIGILUKO-Profil – für alle erkennbar." },
      { icon: "👕", title: "Exklusives Merch", desc: "GIGILUKO-Merch, das es nirgendwo zu kaufen gibt." },
      { icon: "🤝", title: "Direkter Draht zum Founder-Team", desc: "Du arbeitest direkt mit Gigi & Lukas und gestaltest die App mit." },
      { icon: "🚀", title: "Startup-Erfahrung fürs echte Leben", desc: "Verantwortung, Netzwerk und Einblick in den Aufbau eines Startups – zählt mehr als jede Vorlesung." },
    ],
    faqTitle: "Häufige Fragen",
    faqs: [
      { q: "Wie bewerbe ich mich?", a: "Keine lange Bewerbung. Schreib uns eine Nachricht auf Instagram oder eine kurze Mail – wir melden uns bei dir." },
      { q: "Wie viel Zeit muss ich investieren?", a: "So viel, wie du willst und kannst. Es gibt keine festen Stunden – du gestaltest dein Engagement selbst." },
      { q: "Muss ich an einer bestimmten Uni oder in einer bestimmten Stadt sein?", a: "Nein. Wir starten dort, wo motivierte Leute sind. Sag uns einfach, wo du aktiv bist." },
      { q: "Werde ich bezahlt?", a: "Das Programm ist primär unentgeltlich. Es geht um dein verifiziertes Badge, exklusives Merch, echten Einblick ins Startup und darum, deine Szene aktiv mitzugestalten." },
    ],
    ctaTitle: "Bereit? Schreib uns.",
    ctaSub: "Keine lange Bewerbung – eine Nachricht reicht. Wir melden uns bei dir.",
    ctaInstagram: "Auf Instagram schreiben",
    ctaEmail: "Per E-Mail bewerben",
  },
  en: {
    badge: "AMBASSADOR PROGRAM",
    h1a: "Become a",
    h1b: "GIGILUKO Ambassador.",
    heroSub: "You're well connected, love going out and want to help build something big? Then bring GIGILUKO to your city or your university.",
    pathsTitle: "Choose your path",
    pathsSub: "Two paths, one mission: digitalize nightlife.",
    uniTitle: "University Ambassador",
    uniDesc: "You make GIGILUKO the talk of your campus.",
    uniTasks: [
      "Spread GIGILUKO among your friends and across your university",
      "Organize events, pre-games and gatherings",
      "Give us feedback from your community – you're their voice",
    ],
    cityTitle: "City Ambassador",
    cityDesc: "Your turf, your rules – you build GIGILUKO in your city.",
    cityTasks: [
      "Get the best clubs and bars in your city on board",
      "Bring new users into the GIGILUKO network",
      "Be our ear on the pulse of the local scene",
    ],
    tasksLabel: "What you do",
    perksTitle: "What you get",
    perksSub: "Here's what's in it for you.",
    perks: [
      { icon: "🏷️", title: "Verified Ambassador Badge", desc: "A visible, verified badge in your GIGILUKO profile – recognizable to everyone." },
      { icon: "👕", title: "Exclusive Merch", desc: "GIGILUKO merch you can't buy anywhere." },
      { icon: "🤝", title: "Direct Line to the Founders", desc: "You work directly with Gigi & Lukas and help shape the app." },
      { icon: "🚀", title: "Real-World Startup Experience", desc: "Responsibility, network and insight into building a startup – worth more than any lecture." },
    ],
    faqTitle: "Frequently Asked Questions",
    faqs: [
      { q: "How do I apply?", a: "No long application. Send us a message on Instagram or a short email – we'll get back to you." },
      { q: "How much time do I need to invest?", a: "As much as you want and can. There are no fixed hours – you shape your own involvement." },
      { q: "Do I have to be at a specific university or in a specific city?", a: "No. We start wherever motivated people are. Just tell us where you're active." },
      { q: "Do I get paid?", a: "The program is primarily unpaid. It's about your verified badge, exclusive merch, real startup insight and actively shaping your scene." },
    ],
    ctaTitle: "Ready? Hit us up.",
    ctaSub: "No long application – one message is enough. We'll get back to you.",
    ctaInstagram: "Message us on Instagram",
    ctaEmail: "Apply via email",
  },
};

const Ambassador = () => {
  const { lang } = useLanguage();
  const t = content[lang];

  return (
    <main className="bg-white dark:bg-[#05000a] text-black dark:text-white min-h-screen transition-colors duration-500 pt-32 md:pt-40 pb-24 px-6">
      <div className="max-w-5xl mx-auto">

        {/* HERO */}
        <section className="text-center mb-20">
          <span className="inline-block py-1.5 px-4 rounded-full bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 text-xs font-bold uppercase tracking-widest text-gray-600 dark:text-gray-300 mb-6">
            {t.badge}
          </span>
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tighter leading-[1.1] mb-6">
            {t.h1a}{" "}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#A855F7] to-[#EC4899]">
              {t.h1b}
            </span>
          </h1>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 font-light max-w-2xl mx-auto leading-relaxed">
            {t.heroSub}
          </p>
        </section>

        {/* PATHS */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">{t.pathsTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.pathsSub}</p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {/* University */}
            <div className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-[2rem] hover:border-[#A855F7]/50 transition-all flex flex-col">
              <div className="w-14 h-14 bg-purple-500/15 rounded-2xl flex items-center justify-center mb-6 text-2xl">🎓</div>
              <h3 className="text-2xl font-bold mb-3">{t.uniTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t.uniDesc}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#A855F7] mb-4">{t.tasksLabel}</p>
              <ul className="space-y-3">
                {t.uniTasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#A855F7] mt-0.5">✦</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* City */}
            <div className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 p-8 rounded-[2rem] hover:border-[#EC4899]/50 transition-all flex flex-col">
              <div className="w-14 h-14 bg-pink-500/15 rounded-2xl flex items-center justify-center mb-6 text-2xl">🏙️</div>
              <h3 className="text-2xl font-bold mb-3">{t.cityTitle}</h3>
              <p className="text-gray-600 dark:text-gray-400 mb-6">{t.cityDesc}</p>
              <p className="text-xs font-bold uppercase tracking-widest text-[#EC4899] mb-4">{t.tasksLabel}</p>
              <ul className="space-y-3">
                {t.cityTasks.map((task, i) => (
                  <li key={i} className="flex items-start gap-3 text-sm text-gray-700 dark:text-gray-300">
                    <span className="text-[#EC4899] mt-0.5">✦</span>
                    <span>{task}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* PERKS */}
        <section className="mb-24">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-3">{t.perksTitle}</h2>
            <p className="text-gray-600 dark:text-gray-400">{t.perksSub}</p>
          </div>
          <div className="grid sm:grid-cols-2 gap-6">
            {t.perks.map((perk, i) => (
              <div key={i} className="bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 p-6 rounded-[1.5rem] flex items-start gap-4">
                <div className="text-2xl flex-shrink-0">{perk.icon}</div>
                <div>
                  <h3 className="font-bold mb-1">{perk.title}</h3>
                  <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed">{perk.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* FAQ */}
        <section className="mb-24 max-w-3xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-black tracking-tighter mb-8 text-center">{t.faqTitle}</h2>
          <div className="space-y-3">
            {t.faqs.map((item, i) => (
              <details key={i} className="group bg-black/[0.03] dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-2xl p-5">
                <summary className="flex justify-between items-center cursor-pointer font-semibold list-none">
                  <span>{item.q}</span>
                  <span className="text-[#A855F7] transition-transform group-open:rotate-45 text-xl leading-none">+</span>
                </summary>
                <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed mt-3">{item.a}</p>
              </details>
            ))}
          </div>
        </section>

        {/* CTA */}
        <section className="text-center bg-gradient-to-r from-[#A855F7]/10 to-[#EC4899]/10 border border-black/10 dark:border-white/10 rounded-[2.5rem] p-10 md:p-16">
          <h2 className="text-3xl md:text-5xl font-black tracking-tighter mb-4">{t.ctaTitle}</h2>
          <p className="text-gray-600 dark:text-gray-400 max-w-xl mx-auto mb-8">{t.ctaSub}</p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://www.instagram.com/gigilukoo/"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold text-white bg-gradient-to-r from-[#A855F7] to-[#EC4899] hover:shadow-[0_0_30px_rgba(168,85,247,0.4)] hover:scale-105 transition-all"
            >
              {t.ctaInstagram}
            </a>
            <a
              href="mailto:ambassador@gigiluko.com?subject=GIGILUKO Ambassador"
              className="w-full sm:w-auto px-8 py-4 rounded-full font-bold bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 hover:border-[#EC4899]/50 transition-all"
            >
              {t.ctaEmail}
            </a>
          </div>
        </section>

      </div>
    </main>
  );
};

export default Ambassador;
