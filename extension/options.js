(() => {
  "use strict";
  const DEFAULTS = { pageBg: "#06071a", accent: "#a78bfa", customSites: [] };
  const $ = (id) => document.getElementById(id);
  const pageBg = $("pageBg");
  const accent = $("accent");
  const siteForm = $("siteForm");
  const siteName = $("siteName");
  const siteUrl = $("siteUrl");
  const siteList = $("siteList");
  const siteStatus = $("siteStatus");
  let customSites = [];

  const safeSite = (name, rawUrl) => {
    const cleanName = name.trim().slice(0, 24);
    let parsed;
    try { parsed = new URL(rawUrl.trim()); } catch { throw new Error("Введи корректный адрес, например https://example.com"); }
    if (!cleanName) throw new Error("Укажи название сайта.");
    if (parsed.protocol !== "https:" || !parsed.hostname) throw new Error("Разрешены только адреса, начинающиеся с https://");
    return { name: cleanName, url: parsed.href };
  };

  async function saveColor(key, value) {
    await browser.storage.local.set({ [key]: value });
    $(key + "Value").textContent = value.toLowerCase();
  }

  function renderSites() {
    siteList.replaceChildren();
    if (!customSites.length) {
      const empty = document.createElement("li");
      empty.textContent = "Пока нет собственных ярлыков — добавь первый выше.";
      empty.style.color = "#8e9ab8";
      siteList.append(empty);
      return;
    }
    customSites.forEach((site, index) => {
      const item = document.createElement("li");
      const meta = document.createElement("div");
      meta.className = "site-meta";
      const name = document.createElement("strong");
      name.textContent = site.name;
      const url = document.createElement("span");
      url.textContent = site.url;
      meta.append(name, url);
      const remove = document.createElement("button");
      remove.type = "button";
      remove.className = "remove";
      remove.textContent = "Удалить";
      remove.setAttribute("aria-label", "Удалить сайт " + site.name);
      remove.addEventListener("click", async () => {
        customSites = customSites.filter((_, i) => i !== index);
        await browser.storage.local.set({ customSites });
        siteStatus.textContent = "Ярлык удалён.";
        renderSites();
      });
      item.append(meta, remove);
      siteList.append(item);
    });
  }

  async function init() {
    const saved = await browser.storage.local.get(DEFAULTS);
    pageBg.value = /^#[0-9a-f]{6}$/i.test(saved.pageBg) ? saved.pageBg : DEFAULTS.pageBg;
    accent.value = /^#[0-9a-f]{6}$/i.test(saved.accent) ? saved.accent : DEFAULTS.accent;
    $("pageBgValue").textContent = pageBg.value;
    $("accentValue").textContent = accent.value;
    customSites = Array.isArray(saved.customSites) ? saved.customSites.filter(s => s && typeof s.name === "string" && typeof s.url === "string").slice(0, 12) : [];
    renderSites();
  }

  pageBg.addEventListener("input", () => saveColor("pageBg", pageBg.value).catch(() => { siteStatus.textContent = "Не удалось сохранить цвет фона."; }));
  accent.addEventListener("input", () => saveColor("accent", accent.value).catch(() => { siteStatus.textContent = "Не удалось сохранить акцентный цвет."; }));
  $("resetColors").addEventListener("click", async () => {
    pageBg.value = DEFAULTS.pageBg;
    accent.value = DEFAULTS.accent;
    await browser.storage.local.set({ pageBg: DEFAULTS.pageBg, accent: DEFAULTS.accent });
    $("pageBgValue").textContent = DEFAULTS.pageBg;
    $("accentValue").textContent = DEFAULTS.accent;
    siteStatus.textContent = "Цвета Lunaria восстановлены.";
  });
  siteForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    siteStatus.textContent = "";
    try {
      if (customSites.length >= 12) throw new Error("Можно добавить максимум 12 собственных ярлыков.");
      const site = safeSite(siteName.value, siteUrl.value);
      if (customSites.some(existing => existing.url === site.url)) throw new Error("Этот сайт уже добавлен.");
      customSites.push(site);
      await browser.storage.local.set({ customSites });
      siteForm.reset();
      siteStatus.textContent = "Сайт добавлен на новую вкладку.";
      renderSites();
    } catch (error) {
      siteStatus.textContent = error instanceof Error ? error.message : "Не удалось добавить сайт.";
    }
  });
  init().catch(() => { siteStatus.textContent = "Не удалось загрузить настройки расширения."; });
})();
