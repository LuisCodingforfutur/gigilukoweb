// Liest die oeffentliche Spiegel-Collection shareCards/{type}_{id} der
// Flutter-App ueber die Firestore-REST-API.
//
// Bewusst REST statt firebase-admin:
//   - laeuft auf der Edge Runtime (firebase-admin braucht Node-APIs)
//   - kein Service Account auf dem Webhost
//   - kann per Definition nur sehen, was die mirror*ShareCard-Functions
//     freigegeben haben: nur Events mit visibility == "public" und Venues
//     mit hidden != true. Ein linkOnly-Event bekommt damit keine
//     Vorschaukarte mit Titel und Venue.

const PROJECT = "gigiluko";

export type Crowd = "relaxed" | "busy" | "packed" | "active";

export type ShareCard = {
    type: ShareType;
    title: string | null;
    venueName?: string | null;
    city?: string | null;
    category?: string | null;
    startsAt?: Date | null;
    imageUrl?: string | null;
    crowd?: Crowd | null;
};

export const SHARE_TYPES = ["event", "venue", "post", "performer"] as const;
export type ShareType = (typeof SHARE_TYPES)[number];

export const APP_STORE_URL =
    "https://apps.apple.com/de/app/gigiluko/id6764666289";

export const CROWD_LABEL: Record<Crowd, string> = {
    relaxed: "Entspannt",
    busy: "Gut besucht",
    packed: "Voll",
    active: "Gerade aktiv",
};

/** Firestore-REST liefert getypte Werte ({stringValue: "x"}) — hier flach. */
function unwrap(v: any): any {
    if (v == null) return null;
    if ("stringValue" in v) return v.stringValue;
    if ("integerValue" in v) return Number(v.integerValue);
    if ("doubleValue" in v) return v.doubleValue;
    if ("booleanValue" in v) return v.booleanValue;
    if ("timestampValue" in v) return new Date(v.timestampValue);
    if ("nullValue" in v) return null;
    if ("arrayValue" in v) return (v.arrayValue.values ?? []).map(unwrap);
    if ("mapValue" in v) {
        const out: Record<string, any> = {};
        for (const [k, val] of Object.entries(v.mapValue.fields ?? {})) {
            out[k] = unwrap(val);
        }
        return out;
    }
    return null;
}

export function isShareType(v: string | null | undefined): v is ShareType {
    return !!v && (SHARE_TYPES as readonly string[]).includes(v);
}

/** Nur [A-Za-z0-9_-], damit die ID nicht aus dem Dokumentpfad ausbricht. */
export function isValidId(id: string | null | undefined): id is string {
    return !!id && /^[A-Za-z0-9_-]{1,128}$/.test(id);
}

export async function getShareCard(
    type: ShareType,
    id: string,
): Promise<ShareCard | null> {
    const key = process.env.FIREBASE_WEB_API_KEY;
    if (!key || !isValidId(id)) return null;

    const url =
        `https://firestore.googleapis.com/v1/projects/${PROJECT}` +
        `/databases/(default)/documents/shareCards/${type}_${id}?key=${key}`;

    // Keine Karte = nicht oeffentlich oder geloescht. Dann bewusst KEIN
    // Fallback auf die echten Daten, sondern generische Vorschau.
    const res = await fetch(url);
    if (!res.ok) return null;

    const fields = (await res.json())?.fields ?? {};
    const f = (n: string) => unwrap(fields[n]);

    return {
        type,
        title: f("title"),
        venueName: f("venueName"),
        city: f("city"),
        category: f("category"),
        startsAt: f("startsAt"),
        imageUrl: f("imageUrl"),
        crowd: f("crowd"),
    };
}
