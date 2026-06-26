/* REKORD Landingpage — Interaktivität (Vanilla JS) */
(function () {
  "use strict";

  /* ---------- 1 · Akkordeons (Konfigurator + FAQ) ---------- */
  document.querySelectorAll("[data-accordion] .acc-trigger").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var open = btn.getAttribute("aria-expanded") === "true";
      btn.setAttribute("aria-expanded", String(!open));
    });
  });

  /* ---------- 2 · Farb-Swatches (Konfigurator → Farben) ---------- */
  var ralPalette = [
    { name: "Weiß 9016", hex: "#f1f0ea" },
    { name: "Moosgrün 6005", hex: "#2f4538" },
    { name: "Rehbraun 8007", hex: "#6f4a2f" },
    { name: "Anthrazitgrau 7016", hex: "#383e42" },
    { name: "Anthrazitgrau 7016 FS", hex: "#383e42" },
    { name: "Graualuminium 9007pm", hex: "#878581" },
    { name: "Weißaluminium 9006pm", hex: "#a5a5a5" },
    { name: "Schokobraun 8017", hex: "#45322e" },
    { name: "Precious Sand Metallic FS", hex: "#9c8c75" },
    { name: "Cast Iron Metallic FS", hex: "#3a3c3e" },
    { name: "DB703 Metallic FS", hex: "#4c4e50" },
    { name: "Tiefschwarz 9005 FS", hex: "#0e0e10" },
  ];
  var weiss = [{ name: "Weiß 9016", hex: "#f1f0ea" }];
  var farbGruppen = [
    { label: "BASE (Kunststoff)", colors: weiss },
    { label: "PRO (Kunststoff)", colors: weiss },
    { label: "BASE Alu — außen 12 Farben", colors: ralPalette },
    { label: "PRO Alu — außen 12 Farben", colors: ralPalette },
    { label: "DESIGN — außen 12 Farben", colors: ralPalette },
  ];

  var farbenPanel = document.getElementById("farbenPanel");
  if (farbenPanel) {
    farbGruppen.forEach(function (gruppe) {
      var wrap = document.createElement("div");
      wrap.className = "mb-7 last:mb-0";

      var h = document.createElement("p");
      h.className = "mb-3 text-[12px] font-bold uppercase tracking-[1px] text-ink-soft";
      h.textContent = gruppe.label;
      wrap.appendChild(h);

      var grid = document.createElement("div");
      grid.className = "grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-6";

      gruppe.colors.forEach(function (c) {
        var item = document.createElement("div");
        item.className = "flex items-center gap-2";

        var sw = document.createElement("span");
        sw.className = "h-9 w-9 shrink-0 rounded-md border border-stroke";
        sw.style.backgroundColor = c.hex;
        sw.title = c.name;

        var lbl = document.createElement("span");
        lbl.className = "text-[12px] leading-tight text-ink-body";
        lbl.textContent = c.name;

        item.appendChild(sw);
        item.appendChild(lbl);
        grid.appendChild(item);
      });

      wrap.appendChild(grid);
      farbenPanel.appendChild(wrap);
    });
  }

  /* ---------- 3 · Innen/Außen — Tabs ---------- */
  document.querySelectorAll("#iaTabs .ia-tab").forEach(function (tab) {
    tab.addEventListener("click", function () {
      document.querySelectorAll("#iaTabs .ia-tab").forEach(function (t) {
        t.classList.remove("border-ink", "text-ink");
        t.classList.add("border-transparent", "text-ink-mute");
      });
      tab.classList.remove("border-transparent", "text-ink-mute");
      tab.classList.add("border-ink", "text-ink");
    });
  });

  /* ---------- 4 · Innen/Außen — Before/After-Slider ---------- */
  var slider = document.getElementById("iaSlider");
  if (slider) {
    var clip = document.getElementById("iaClip");
    var line = document.getElementById("iaLine");
    var clipImg = document.getElementById("iaClipImg");
    var dragging = false;

    function setPos(clientX) {
      var rect = slider.getBoundingClientRect();
      var pct = ((clientX - rect.left) / rect.width) * 100;
      pct = Math.max(0, Math.min(100, pct));
      clip.style.width = pct + "%";
      line.style.left = pct + "%";
      // linkes Bild gegenläufig skalieren, damit es deckungsgleich bleibt
      if (clipImg && rect.width) {
        clipImg.style.width = rect.width + "px";
      }
    }

    function start(e) {
      dragging = true;
      e.preventDefault();
    }
    function move(e) {
      if (!dragging) return;
      var x = e.touches ? e.touches[0].clientX : e.clientX;
      setPos(x);
    }
    function end() {
      dragging = false;
    }

    var handle = document.getElementById("iaHandle");
    handle.addEventListener("mousedown", start);
    handle.addEventListener("touchstart", start, { passive: false });
    window.addEventListener("mousemove", move);
    window.addEventListener("touchmove", move, { passive: false });
    window.addEventListener("mouseup", end);
    window.addEventListener("touchend", end);
    // Klick irgendwo auf das Bild verschiebt den Regler dorthin
    slider.addEventListener("click", function (e) {
      if (e.target.closest("#iaHandle")) return;
      setPos(e.clientX);
    });
    // initiale Bildbreite setzen
    window.addEventListener("load", function () {
      var rect = slider.getBoundingClientRect();
      if (clipImg) clipImg.style.width = rect.width + "px";
    });
  }

  /* ---------- 5 · Mobile-Navigation (einfacher Anker-Toggle) ---------- */
  var navToggle = document.getElementById("navToggle");
  if (navToggle) {
    navToggle.addEventListener("click", function () {
      // einfaches Verhalten: zum Kontakt scrollen (Platzhalter für späteres Off-Canvas-Menü)
      var nav = document.querySelector("header nav");
      if (nav) nav.classList.toggle("hidden");
    });
  }
})();
