// Server-gerenderte Share-Landingpage fuer /event/:id, /venue/:id usw.
//
// Warum es das braucht: gigilukoweb ist eine Vite-SPA, und vercel.json hat
// einen Catch-all-Rewrite auf /index.html. WhatsApp, Instagram und Facebook
// fuehren kein JS aus — sie lesen nur das erste HTML-Response. Jede geteilte
// URL bekam damit die statischen OG-Tags der Startseite: og:url zeigte auf
// "/", der Titel war fuer jedes Event gleich, das Bild war das PWA-Icon.
//
// Diese Function liefert pro Objekt echtes HTML mit eigenen Tags. Sie steht in
// vercel.json VOR dem Catch-all, sonst greift der zuerst.
//
// Auf iOS/Android fangen die Universal Links / App Links den Klick ab, bevor
// diese Seite ueberhaupt laedt. Sie ist also fuer Crawler, fuer Desktop und
// fuer Geraete ohne installierte App.
import {
    getShareCard, isShareType, isValidId, APP_STORE_URL,
} from "./_lib/sharecard";

const SITE = "https://www.gigiluko.com";

const esc = (s: string) =>
    s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;").replace(/'/g, "&#39;");

export default async function handler(req: any, res: any) {
    const type = String(req.query?.type ?? "");
    const id = String(req.query?.id ?? "");

    if (!isShareType(type) || !isValidId(id)) {
        res.setHeader("Location", SITE);
        return res.status(302).end();
    }

    const card = await getShareCard(type, id);

    const noun = type === "venue" ? "Location" : "Event";
    const title = card?.title
        ? `${card.title} · GIGILUKO`
        : "GIGILUKO – Das Betriebssystem fürs Nachtleben";
    const description = card
        ? [card.venueName ?? card.city, "Auf GIGILUKO sehen, wie viel los ist."]
            .filter(Boolean).join(" · ")
        : "Entdecke Clubs, Bars und Events in Echtzeit.";

    const canonical = `${SITE}/${type}/${encodeURIComponent(id)}`;
    const ogImage =
        `${SITE}/api/og?type=${type}&id=${encodeURIComponent(id)}`;

    // 5 Minuten CDN-Cache: die Auslastungsstufe soll sich noch bewegen
    // duerfen, ohne dass jeder Crawler-Hit eine Firestore-Leseoperation kostet.
    res.setHeader("Content-Type", "text/html; charset=utf-8");
    res.setHeader("Cache-Control",
        "public, s-maxage=300, stale-while-revalidate=600");

    return res.status(200).send(`<!DOCTYPE html>
<html lang="de">
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1">
<title>${esc(title)}</title>
<meta name="description" content="${esc(description)}">
<link rel="canonical" href="${esc(canonical)}">

<meta property="og:site_name" content="GIGILUKO">
<meta property="og:type" content="website">
<meta property="og:locale" content="de_DE">
<meta property="og:title" content="${esc(title)}">
<meta property="og:description" content="${esc(description)}">
<meta property="og:url" content="${esc(canonical)}">
<meta property="og:image" content="${esc(ogImage)}">
<meta property="og:image:secure_url" content="${esc(ogImage)}">
<meta property="og:image:type" content="image/png">
<!-- width/height explizit: ohne die Angaben raten die Crawler und fallen
     im Zweifel auf die kleine Karte zurueck. -->
<meta property="og:image:width" content="1200">
<meta property="og:image:height" content="630">
<meta property="og:image:alt" content="${esc(title)}">

<meta name="twitter:card" content="summary_large_image">
<meta name="twitter:title" content="${esc(title)}">
<meta name="twitter:description" content="${esc(description)}">
<meta name="twitter:image" content="${esc(ogImage)}">

<!-- Smart App Banner: iOS zeigt in Safari einen Balken zur App. -->
<meta name="apple-itunes-app" content="app-id=6764666289, app-argument=${esc(canonical)}">

<style>
  :root { color-scheme: dark; }
  body { margin:0; min-height:100dvh; display:grid; place-items:center;
         background:#0B0710; color:#fff; padding:24px;
         font-family:-apple-system,BlinkMacSystemFont,"Segoe UI",sans-serif; }
  .w { max-width:560px; text-align:center; }
  .brand { font-size:15px; font-weight:700; letter-spacing:7px;
           color:rgba(255,255,255,.62); margin-bottom:28px; }
  h1 { font-size:34px; line-height:1.15; letter-spacing:-.8px; margin:0 0 10px; }
  p { color:rgba(255,255,255,.66); margin:0 0 28px; }
  a.cta { display:inline-block; background:#6D28D9; color:#fff;
          text-decoration:none; font-weight:700; padding:15px 30px;
          border-radius:999px; }
</style>
</head>
<body>
  <div class="w">
    <div class="brand">GIGILUKO</div>
    <h1>${esc(card?.title ?? `${noun} auf GIGILUKO`)}</h1>
    ${card?.venueName || card?.city
        ? `<p>${esc(card.venueName ?? card.city ?? "")}</p>` : ""}
    <a class="cta" href="${APP_STORE_URL}">In der App öffnen</a>
  </div>
</body>
</html>`);
}
