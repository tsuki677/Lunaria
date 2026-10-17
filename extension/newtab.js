(() => {
  "use strict";

  const DEFAULTS = {
    pageBg: "#06071a",
    accent: "#a78bfa",
    customSites: []
  };
  const isHexColor = (value) => typeof value === "string" && /^#[0-9a-f]{6}$/i.test(value);
  const safeSite = (site) => {
    if (!site || typeof site.name !== "string" || typeof site.url !== "string") return null;
    const name = site.name.trim().slice(0, 24);
    try {
      const parsed = new URL(site.url);
      if (parsed.protocol !== "https:" || !parsed.hostname || !name) return null;
      return { name, url: parsed.href };
    } catch {
      return null;
    }
  };

  async function applySettings() {
    try {
      const settings = await browser.storage.local.get(DEFAULTS);
      const pageBg = isHexColor(settings.pageBg) ? settings.pageBg : DEFAULTS.pageBg;
      const accent = isHexColor(settings.accent) ? settings.accent : DEFAULTS.accent;
      document.documentElement.style.setProperty("--page-bg", pageBg);
      document.documentElement.style.setProperty("--accent", accent);

      const nav = document.querySelector(".tiles");
      const sites = Array.isArray(settings.customSites) ? settings.customSites.slice(0, 12).map(safeSite).filter(Boolean) : [];
      for (const site of sites) {
        const link = document.createElement("a");
        link.className = "tile custom-tile";
        link.href = site.url;
        const icon = document.createElement("span");
        icon.className = "tile-icon custom-site-icon";
        icon.setAttribute("aria-hidden", "true");
        icon.textContent = [...site.name][0].toUpperCase();
        const label = document.createElement("span");
        label.className = "tile-name";
        label.textContent = site.name;
        link.append(icon, label);
        nav.append(link);
      }
    } catch (error) {
      console.error("Lunaria couldn't load saved settings.", error);
    }
  }

  document.addEventListener("DOMContentLoaded", applySettings);
  browser.storage.onChanged.addListener((changes, area) => {
    if (area === "local" && (changes.pageBg || changes.accent || changes.customSites)) {
      location.reload();
    }
  });
})();
