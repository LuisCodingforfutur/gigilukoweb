// Server-gerenderte Share-Landingpage fuer /event/:id, /venue/:id usw.
//
// Warum es das braucht: gigilukoweb ist eine Vite-SPA, und vercel.json hat
// einen Catch-all-Rewrite auf /index.html. WhatsApp, Instagram und Facebook
// fuehren kein JS aus — sie lesen nur das erste HTML-Response. Jede geteilte
// URL bekam damit die statischen OG-Tags der Startseite.
//
// ACHTUNG, bewusste Duplizierung: die Helfer unten standen zuerst in
// api/_lib/sharecard.ts und wurden von hier und von api/og.ts importiert.
// Vercels Node-Builder zieht relative Importe in diesem Projekt NICHT mit —
// beide Functions starben mit FUNCTION_INVOCATION_FAILED, waehrend
// api/send.ts (nur node_modules-Importe) lief. Jede Function ist deshalb
// eigenstaendig. Wer das wieder zusammenfasst, muss es vorher auf einem
// Preview-Deploy verifizieren.

const PROJECT = 'gigiluko';
const SITE = 'https://www.gigiluko.com';
const APP_STORE_URL = 'https://apps.apple.com/de/app/gigiluko/id6764666289';
const SHARE_TYPES = ['event', 'venue', 'post', 'performer'] as const;
type ShareType = (typeof SHARE_TYPES)[number];

function unwrap(v: any): any {
    if (v == null) return null;
    if ('stringValue' in v) return v.stringValue;
    if ('integerValue' in v) return Number(v.integerValue);
    if ('doubleValue' in v) return v.doubleValue;
    if ('booleanValue' in v) return v.booleanValue;
    if ('timestampValue' in v) return new Date(v.timestampValue);
    if ('nullValue' in v) return null;
    return null;
}

/** Liest die oeffentliche Spiegel-Collection shareCards per Firestore-REST. */
async function getShareCard(type: ShareType, id: string) {
    const key = process.env.FIREBASE_WEB_API_KEY;
    if (!key) return null;
    const url =
        `https://firestore.googleapis.com/v1/projects/${PROJECT}` +
        `/databases/(default)/documents/shareCards/${type}_${id}?key=${key}`;
    try {
        const res = await fetch(url);
        if (!res.ok) return null;
        const fields = (await res.json())?.fields ?? {};
        const f = (n: string) => unwrap(fields[n]);
        return {
            title: f('title') as string | null,
            venueName: f('venueName') as string | null,
            city: f('city') as string | null,
        };
    } catch {
        return null;
    }
}

const esc = (s: string) =>
    s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;').replace(/'/g, '&#39;');

export default async function handler(req: any, res: any) {
    const type = String(req.query?.type ?? '');
    const id = String(req.query?.id ?? '');

    if (!(SHARE_TYPES as readonly string[]).includes(type) ||
        !/^[A-Za-z0-9_-]{1,128}$/.test(id)) {
        res.setHeader('Location', SITE);
        return res.status(302).end();
    }

    const card = await getShareCard(type as ShareType, id);

    const noun = type === 'venue' ? 'Location' : 'Event';
    const title = card?.title
        ? `${card.title} · GIGILUKO`
        : 'GIGILUKO – Das Betriebssystem fürs Nachtleben';
    const description = card
        ? [card.venueName ?? card.city, 'Auf GIGILUKO sehen, wie viel los ist.']
            .filter(Boolean).join(' · ')
        : 'Entdecke Clubs, Bars und Events in Echtzeit.';

    const canonical = `${SITE}/${type}/${encodeURIComponent(id)}`;
    // Statische Karte statt @vercel/og. Die dynamische Variante rendert mit
    // Satori und Standardschrift, und ihr Ergebnis laesst sich nur ueber
    // einen Deploy pruefen — das hat eine unbrauchbare Karte und fuenf
    // Deploy-Zyklen gekostet. Erzeugt von tools/make-og-card.py, dort
    // aenderbar und lokal sofort sichtbar.
    // Objektspezifische Titel stehen weiterhin in og:title; nur das BILD
    // ist fuer alle gleich.
    const ogImage = `${SITE}/og-default.png`;

    // 5 Minuten CDN-Cache: die Auslastungsstufe soll sich bewegen duerfen,
    // ohne dass jeder Crawler-Hit eine Firestore-Leseoperation kostet.
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.setHeader('Cache-Control',
        'public, s-maxage=300, stale-while-revalidate=600');

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
        ? `<p>${esc(card.venueName ?? card.city ?? '')}</p>` : ''}
    <a class="cta" href="${APP_STORE_URL}">In der App öffnen</a>
  </div>
</body>
</html>`);
}
