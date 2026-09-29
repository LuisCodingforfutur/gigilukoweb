// 1200x630-Sharekarte. Vorher war og:image das PWA-Manifest-Icon
// (web-app-manifest-512x512.png): quadratisch, also bei WhatsApp/Instagram
// entweder harter Crop oder Mini-Thumbnail — und fuer jedes geteilte Objekt
// dasselbe Bild. 1200x630 ist 1.91:1, das Format das summary_large_image
// erwartet.
//
// Designregel: die Karte muss als ~400px breites Thumbnail im WhatsApp-Chat
// noch als GIGILUKO erkennbar sein. Traeger der Wiedererkennung sind daher
// Wortmarke und Violett-Verlauf, NICHT der Text — der ist bei der Groesse
// schon nicht mehr lesbar.
//
// Aufruf: /api/og?type=event&id=<id>
import { ImageResponse } from "@vercel/og";
import {
    getShareCard, isShareType, isValidId, CROWD_LABEL,
} from "./_lib/sharecard";

export const config = { runtime: "edge" };

const BG = "#0B0710";
const PRIMARY = "#6D28D9"; // AppColors.primary
const ACCENT = "#A855F7";  // AppColors.accent
const LIVE = "#FF3D7F";    // AppColors.live

function formatDate(d: Date | null | undefined): string | null {
    if (!d) return null;
    return new Intl.DateTimeFormat("de-DE", {
        weekday: "short", day: "numeric", month: "long",
        hour: "2-digit", minute: "2-digit", timeZone: "Europe/Berlin",
    }).format(d);
}

export default async function handler(req: Request) {
    const q = new URL(req.url).searchParams;
    const type = q.get("type");
    const id = q.get("id");

    const card = isShareType(type) && isValidId(id)
        ? await getShareCard(type, id)
        : null;

    const title = card?.title ?? "GIGILUKO";
    const sub = [card?.venueName ?? card?.city, formatDate(card?.startsAt)]
        .filter(Boolean).join("  ·  ");
    // Kein Chip ohne Daten — die Karte darf nie "0 Personen" bewerben.
    const crowd = card?.crowd ? CROWD_LABEL[card.crowd] : null;

    return new ImageResponse(
        (
            <div style={{
                width: "100%", height: "100%", display: "flex",
                flexDirection: "column", justifyContent: "space-between",
                background: BG, padding: 64, position: "relative",
                overflow: "hidden",
            }}>
                <div style={{
                    position: "absolute", top: -260, right: -180,
                    width: 900, height: 900, borderRadius: 999, display: "flex",
                    background: `radial-gradient(circle, ${PRIMARY} 0%, rgba(109,40,217,0) 70%)`,
                    opacity: 0.85,
                }} />
                <div style={{
                    position: "absolute", bottom: -320, left: -220,
                    width: 760, height: 760, borderRadius: 999, display: "flex",
                    background: `radial-gradient(circle, ${ACCENT} 0%, rgba(168,85,247,0) 70%)`,
                    opacity: 0.4,
                }} />

                <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
                    <div style={{
                        fontSize: 34, fontWeight: 700, letterSpacing: 10,
                        color: "#FFFFFF", display: "flex",
                    }}>GIGILUKO</div>
                    {crowd && (
                        <div style={{
                            display: "flex", alignItems: "center", gap: 10,
                            background: "rgba(255,61,127,0.16)",
                            border: `2px solid ${LIVE}`, borderRadius: 999,
                            padding: "8px 20px",
                        }}>
                            <div style={{
                                width: 12, height: 12, borderRadius: 999,
                                background: LIVE, display: "flex",
                            }} />
                            <div style={{
                                fontSize: 24, fontWeight: 700,
                                color: "#FFFFFF", display: "flex",
                            }}>{crowd}</div>
                        </div>
                    )}
                </div>

                <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
                    <div style={{
                        fontSize: title.length > 40 ? 68 : 86, fontWeight: 800,
                        color: "#FFFFFF", lineHeight: 1.05, letterSpacing: -2,
                        display: "flex", maxWidth: 960,
                    }}>{title}</div>
                    {sub && (
                        <div style={{
                            fontSize: 34, fontWeight: 600,
                            color: "rgba(255,255,255,0.72)", display: "flex",
                        }}>{sub}</div>
                    )}
                </div>

                <div style={{
                    display: "flex", alignItems: "center",
                    justifyContent: "space-between",
                }}>
                    <div style={{
                        fontSize: 26, fontWeight: 600,
                        color: "rgba(255,255,255,0.5)", display: "flex",
                    }}>gigiluko.com</div>
                    <div style={{
                        fontSize: 26, fontWeight: 700, color: "#FFFFFF",
                        background: PRIMARY, borderRadius: 999,
                        padding: "14px 30px", display: "flex",
                    }}>Im App Store</div>
                </div>
            </div>
        ),
        { width: 1200, height: 630 },
    );
}
