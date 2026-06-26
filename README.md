# REKORD — Kunststoff- & Kunststoff-Alu-Fenster (Figma-Nachbau)

Statische Landingpage, 1:1 nachgebaut aus dem Figma-Wireframe
*Wireframe-Kunststoff-Kunststoff-Alu-Fenster* — mit **Tailwind CSS**, voll responsive
(Desktop 1440 px + Mobil) und offline lauffähig.

## Schnellstart

Die Seite ist statisch — einfach `index.html` im Browser öffnen. Kein Server nötig.

## Tailwind neu bauen (nur bei CSS-/Klassen-Änderungen)

```bash
npm install        # einmalig
npm run build      # erzeugt dist/styles.css
npm run watch      # baut bei jeder Änderung automatisch neu
```

Design-Tokens (Farben, Inter-Typoskala, Abstände) liegen in `tailwind.config.js`,
die Quell-CSS in `src/input.css`. Inter ist lokal unter `assets/fonts/` gehostet.

## Struktur

```
index.html          komplette Seite (17 Sektionen)
src/input.css       Tailwind-Quelle + Komponenten (Buttons, Karten, Akkordeon)
dist/styles.css     gebautes CSS (eingebunden in index.html)
js/main.js          Akkordeons, Farb-Swatches, Innen/Außen-Slider, Mobil-Nav
assets/             Bilder, Icons, Schriften (aus Figma exportiert)
tailwind.config.js  Design-Tokens
```

## Live

Veröffentlicht über GitHub Pages:
**https://killian-rekord.github.io/figma-test-side/**

## Offene Punkte

- Das „Esszimmer"-Foto im Block *Was wir bieten* ist in Figma ein leerer Platzhalter
  (kein Bild hinterlegt) — bitte echtes Foto in `assets/` einsetzen und im `index.html` verlinken.
- Formulare und CTA-Buttons sind statische Platzhalter (kein Backend).
- Texte wurden originalgetreu inkl. kleiner Figma-Tippfehler übernommen.
