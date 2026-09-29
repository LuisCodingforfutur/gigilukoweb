#!/usr/bin/env python3
"""Erzeugt public/og-default.png — die Share-Vorschaukarte.

Warum statisch und nicht per @vercel/og generiert: die dynamische Variante
rendert mit Satori und einer Standardschrift, und ihr Ergebnis laesst sich
nur ueber einen Deploy pruefen. Das hat am 29.09. fuenf Deploy-Zyklen und
eine unbrauchbare Karte gekostet. Dieses Skript laeuft lokal, das Ergebnis
sieht man sofort.

Aufruf:  python3 tools/make-og-card.py
Braucht: pip install Pillow  und die beiden TTFs neben diesem Skript.

Farben aus lib/core/theme/app_colors.dart der App, nicht geschaetzt.
"""
from pathlib import Path
from PIL import Image, ImageDraw, ImageFont

W, H = 1200, 630          # 1.91:1 — was summary_large_image erwartet
BG     = (11, 7, 16)      # #0B0710
PURPLE = (109, 40, 217)   # #6D28D9  AppColors.primary
PINK   = (236, 72, 153)   # #EC4899  AppColors.pink

HERE = Path(__file__).parent
F_BOLD = HERE / "SpaceGrotesk-Bold.ttf"
F_MED = HERE / "SpaceGrotesk-Medium.ttf"
OUT = HERE.parent / "public" / "og-default.png"

img = Image.new("RGB", (W, H), BG)
px = img.load()

# Diagonaler Markenverlauf: unten links fast schwarz, nach oben rechts
# Purple -> Pink. Das ist der Traeger der Wiedererkennung — als 400px
# breites Thumbnail im WhatsApp-Chat ist der Text laengst nicht mehr lesbar,
# der Verlauf aber sehr wohl.
for y in range(H):
    for x in range(W):
        t = max(0.0, min(1.0, (x / W) * 0.72 + (1 - y / H) * 0.28))
        k = t ** 1.35
        over = max(0.0, k - 0.62) * 1.9
        px[x, y] = (
            min(255, int(BG[0] + (PURPLE[0] - BG[0]) * k + (PINK[0] - PURPLE[0]) * over)),
            min(255, int(BG[1] + (PURPLE[1] - BG[1]) * k + (PINK[1] - PURPLE[1]) * over)),
            min(255, int(BG[2] + (PURPLE[2] - BG[2]) * k + (PINK[2] - PURPLE[2]) * over)),
        )

d = ImageDraw.Draw(img, "RGBA")

def tracked_width(text, font, tr):
    return sum(d.textlength(c, font=font) for c in text) + tr * (len(text) - 1)

def draw_tracked(x, y, text, font, fill, tr):
    """Pillow kennt kein letter-spacing — Zeichen einzeln setzen."""
    for ch in text:
        d.text((x, y), ch, font=font, fill=fill)
        x += d.textlength(ch, font=font) + tr

# Wortmarke gesperrt wie auf dem Login-Screen (letterSpacing 6).
f_mark = ImageFont.truetype(str(F_BOLD), 112)
TR = 26
draw_tracked((W - tracked_width("GIGILUKO", f_mark, TR)) / 2, 222,
             "GIGILUKO", f_mark, (255, 255, 255), TR)

f_sub = ImageFont.truetype(str(F_MED), 32)
SUB = "Sieh, wie viel los ist"
draw_tracked((W - tracked_width(SUB, f_sub, 1)) / 2, 392,
             SUB, f_sub, (255, 255, 255, 180), 1)

d.rounded_rectangle([(W - 96) / 2, 462, (W + 96) / 2, 465], radius=2,
                    fill=(255, 255, 255, 70))

img.save(OUT)
print(f"{OUT} ({W}x{H})")
