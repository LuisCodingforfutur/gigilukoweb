// 1200x630-Sharekarte. Vorher war og:image das PWA-Manifest-Icon
// (512x512): quadratisch, also bei WhatsApp/Instagram entweder harter Crop
// oder Mini-Thumbnail — und fuer jedes geteilte Objekt dasselbe Bild.
// 1200x630 ist 1.91:1, das Format das summary_large_image erwartet.
//
// Zwei Dinge sind hier bewusst NICHT wie in der @vercel/og-Doku:
//
//   1. Keine Edge-Runtime. Die Doku beschreibt Next.js; in einem
//      Vite-Projekt buendelt Vercels Edge-Builder weder npm-Pakete noch
//      relative Imports, und der Deploy bricht mit "referencing
//      unsupported modules" ab. Node-Runtime buendelt beides.
//   2. Kein JSX, sondern createElement. Eine .tsx-Function ausserhalb von
//      Next.js braeuchte eine eigene JSX-Konfiguration; tsconfig.app.json
//      deckt nur src/ ab.
//
// Designregel: die Karte muss als ~400px breites Thumbnail im
// WhatsApp-Chat noch als GIGILUKO erkennbar sein. Traeger der
// Wiedererkennung sind Wortmarke und Violett-Verlauf, nicht der Text —
// der ist bei der Groesse ohnehin nicht mehr lesbar.
//
// Aufruf: /api/og?type=event&id=<id>
import { createElement as h } from 'react';
import { ImageResponse } from '@vercel/og';
import {
    getShareCard, isShareType, isValidId, CROWD_LABEL,
} from './_lib/sharecard';

const BG = '#0B0710';
const PRIMARY = '#6D28D9'; // AppColors.primary
const ACCENT = '#A855F7';  // AppColors.accent
const LIVE = '#FF3D7F';    // AppColors.live

function formatDate(d: Date | null | undefined): string | null {
    if (!d) return null;
    return new Intl.DateTimeFormat('de-DE', {
        weekday: 'short', day: 'numeric', month: 'long',
        hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin',
    }).format(d);
}

const box = (style: Record<string, unknown>, ...kids: unknown[]) =>
    h('div', { style: { display: 'flex', ...style } }, ...(kids as never[]));

export default async function handler(req: Request) {
    const q = new URL(req.url, 'https://www.gigiluko.com').searchParams;
    const type = q.get('type');
    const id = q.get('id');

    const card = isShareType(type) && isValidId(id)
        ? await getShareCard(type, id)
        : null;

    const title = card?.title ?? 'GIGILUKO';
    const sub = [card?.venueName ?? card?.city, formatDate(card?.startsAt)]
        .filter(Boolean).join('  ·  ');
    // Kein Chip ohne Daten — die Karte darf nie "0 Personen" bewerben.
    const crowd = card?.crowd ? CROWD_LABEL[card.crowd] : null;

    const tree = box(
        {
            width: '100%', height: '100%', flexDirection: 'column',
            justifyContent: 'space-between', background: BG, padding: 64,
            position: 'relative', overflow: 'hidden',
        },
        box({
            position: 'absolute', top: -260, right: -180, width: 900,
            height: 900, borderRadius: 999, opacity: 0.85,
            background: `radial-gradient(circle, ${PRIMARY} 0%, rgba(109,40,217,0) 70%)`,
        }),
        box({
            position: 'absolute', bottom: -320, left: -220, width: 760,
            height: 760, borderRadius: 999, opacity: 0.4,
            background: `radial-gradient(circle, ${ACCENT} 0%, rgba(168,85,247,0) 70%)`,
        }),
        box(
            { alignItems: 'center', gap: 18 },
            box({
                fontSize: 34, fontWeight: 700, letterSpacing: 10,
                color: '#FFFFFF',
            }, 'GIGILUKO'),
            crowd
                ? box(
                    {
                        alignItems: 'center', gap: 10,
                        background: 'rgba(255,61,127,0.16)',
                        border: `2px solid ${LIVE}`, borderRadius: 999,
                        padding: '8px 20px',
                    },
                    box({
                        width: 12, height: 12, borderRadius: 999,
                        background: LIVE,
                    }),
                    box({ fontSize: 24, fontWeight: 700, color: '#FFFFFF' }, crowd),
                )
                : null,
        ),
        box(
            { flexDirection: 'column', gap: 20 },
            box({
                fontSize: title.length > 40 ? 68 : 86, fontWeight: 800,
                color: '#FFFFFF', lineHeight: 1.05, letterSpacing: -2,
                maxWidth: 960,
            }, title),
            sub
                ? box({
                    fontSize: 34, fontWeight: 600,
                    color: 'rgba(255,255,255,0.72)',
                }, sub)
                : null,
        ),
        box(
            { alignItems: 'center', justifyContent: 'space-between' },
            box({
                fontSize: 26, fontWeight: 600,
                color: 'rgba(255,255,255,0.5)',
            }, 'gigiluko.com'),
            box({
                fontSize: 26, fontWeight: 700, color: '#FFFFFF',
                background: PRIMARY, borderRadius: 999, padding: '14px 30px',
            }, 'Im App Store'),
        ),
    );

    return new ImageResponse(tree as never, { width: 1200, height: 630 });
}
