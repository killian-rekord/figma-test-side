/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./js/**/*.js"],
  theme: {
    extend: {
      colors: {
        // Aus Figma extrahiert
        paper: "#ffffff",
        muted: "#f5f5f5",
        panel: "#eeeeee", // DESIGN-Karte / FAQ-Sektion Hintergrund
        neutral2: "#f3f5f7", // Chip-/Memo-Box-Hintergrund, Balken-Track
        line: "#eaeaea", // Trennlinien / Tabellen-Border
        stroke: "#dfdfdf", // Karten-/Chip-Border
        orange: {
          DEFAULT: "#ef7d00",
          dark: "#d86f05",
          soft: "#fff3e3", // helle Orange-Pill
        },
        ink: {
          DEFAULT: "#241f1b", // Haupt-Textfarbe / Footer-BG
          body: "#3f3a34", // Fließtext
          soft: "#6b645c", // gedämpfter Text
          mute: "#8a8a8a", // inaktiver Tab
        },
        footnote: "#c9b9a6", // Footer-Links (warmes Taupe)
        green: {
          DEFAULT: "#45b931", // CTA-Button + Best-Wert-Balken
          dark: "#3aa028",
        },
        best: {
          bg: "#c5f8b1", // Klassenbeste-Badge BG
          border: "#a5de91",
          text: "#2e7d20", // Klassenbeste-Text
        },
      },
      fontFamily: {
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      fontSize: {
        // Figma-Typoskala (size / lineHeight / letterSpacing)
        h1: ["64px", { lineHeight: "1.1", letterSpacing: "-1px", fontWeight: "800" }],
        h2: ["36px", { lineHeight: "1.1", letterSpacing: "0", fontWeight: "700" }],
        h3: ["28px", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        h4: ["20px", { lineHeight: "1.2", letterSpacing: "0", fontWeight: "700" }],
        "body-lg": ["18px", { lineHeight: "1.5" }],
        "body-md": ["16px", { lineHeight: "1.5" }],
        "body-sm": ["14px", { lineHeight: "1.4" }],
        "body-xs": ["12px", { lineHeight: "1.4" }],
        "btn-lg": ["16px", { lineHeight: "1.2", letterSpacing: "2px", fontWeight: "600" }],
        "btn-md": ["14px", { lineHeight: "1.2", letterSpacing: "2px", fontWeight: "600" }],
        "btn-sm": ["12px", { lineHeight: "1.2", letterSpacing: "2px", fontWeight: "700" }],
      },
      maxWidth: {
        container: "1440px",
      },
      boxShadow: {
        card: "0 2px 8px 0 rgba(0,0,0,0.06)",
      },
      borderRadius: {
        card: "14px",
      },
    },
  },
  plugins: [],
};
