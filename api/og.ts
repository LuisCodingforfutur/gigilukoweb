// 1200x630-Sharekarte. Vorher war og:image das PWA-Manifest-Icon (512x512):
// quadratisch, also bei WhatsApp/Instagram entweder harter Crop oder
// Mini-Thumbnail — und fuer jedes geteilte Objekt dasselbe Bild. 1200x630
// ist 1.91:1, das Format das summary_large_image erwartet.
//
// Drei Dinge sind hier bewusst NICHT wie in der @vercel/og-Doku, die
// Next.js beschreibt:
//   1. Keine Edge-Runtime. In einem Vite-Projekt buendelt Vercels
//      Edge-Builder weder npm-Pakete noch relative Importe; der Deploy
//      bricht mit "referencing unsupported modules" ab.
//   2. Kein JSX, sondern createElement — eine .tsx-Function ausserhalb von
//      Next.js braeuchte eigene JSX-Konfiguration, und tsconfig.app.json
//      deckt nur src/ ab.
//   3. Keine relativen Importe. Die Helfer standen zuerst in
//      api/_lib/sharecard.ts; Vercels Node-Builder zieht sie in diesem
//      Projekt nicht mit, die Function starb mit
//      FUNCTION_INVOCATION_FAILED. api/share.ts hat dieselben Helfer aus
//      demselben Grund noch einmal. Wer das zusammenfasst, muss es vorher
//      auf einem Preview-Deploy verifizieren.
//
// Designregel: die Karte muss als ~400px breites Thumbnail im
// WhatsApp-Chat noch als GIGILUKO erkennbar sein. Traeger der
// Wiedererkennung sind Wortmarke und Violett-Verlauf, nicht der Text.
//
// Aufruf: /api/og?type=event&id=<id>
import { createElement as h } from 'react';
import { ImageResponse } from '@vercel/og';

const PROJECT = 'gigiluko';
const BG = '#0B0710';
const PRIMARY = '#6D28D9'; // AppColors.primary
const ACCENT = '#A855F7';  // AppColors.accent
const LIVE = '#FF3D7F';    // AppColors.live

const SHARE_TYPES = ['event', 'venue', 'post', 'performer'] as const;
type ShareType = (typeof SHARE_TYPES)[number];

const CROWD_LABEL: Record<string, string> = {
    relaxed: 'Moderat',
    busy: 'Gut besucht',
    packed: 'Voll',
    active: 'Gerade aktiv',
};

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
            startsAt: f('startsAt') as Date | null,
            crowd: f('crowd') as string | null,
        };
    } catch {
        return null;
    }
}

function formatDate(d: Date | null | undefined): string | null {
    if (!d) return null;
    return new Intl.DateTimeFormat('de-DE', {
        weekday: 'short', day: 'numeric', month: 'long',
        hour: '2-digit', minute: '2-digit', timeZone: 'Europe/Berlin',
    }).format(d);
}

const box = (style: Record<string, unknown>, ...kids: unknown[]) =>
    h('div', { style: { display: 'flex', ...style } }, ...(kids as never[]));

export default async function handler(req: any) {
    const q = new URL(req.url, 'https://www.gigiluko.com').searchParams;
    const type = q.get('type') ?? '';
    const id = q.get('id') ?? '';

    const ok = (SHARE_TYPES as readonly string[]).includes(type) &&
        /^[A-Za-z0-9_-]{1,128}$/.test(id);
    const card = ok ? await getShareCard(type as ShareType, id) : null;

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
