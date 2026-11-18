const copy = {
  tr: {
    status: "Yeni projelere açık",
    kicker: "BAĞIMSIZ GELİŞTİRİCİ · İZMİR, TR",
    greeting: "Merhaba, ben",
    description: "Web teknolojileri, yazılım ve etkileşimli deneyimler üzerine çalışan bir geliştiriciyim. Fikirleri çalışan projelere dönüştürmeyi seviyorum.",
    projects: "Projelerimi keşfet",
    contact: "İletişime geç",
    focus: "ODAK ALANLARI",
    caption: "Merak et. Dene. Üret. Her proje yeni bir başlangıç.",
    selected: "SEÇİLİ PROJELER",
    openshell: "Tarayıcıda çalışan terminal simülasyonu",
    torkvexa: "Otomotiv ve motor simülasyonu",
    footer: "Merakla tasarlandı. Kodla geliştirildi."
  },
  en: {
    status: "Open to new projects",
    kicker: "INDEPENDENT DEVELOPER · IZMIR, TR",
    greeting: "Hello, I'm",
    description: "I'm a developer working with web technologies, software and interactive experiences. I enjoy turning ideas into working projects.",
    projects: "Explore my projects",
    contact: "Get in touch",
    focus: "FOCUS AREAS",
    caption: "Stay curious. Experiment. Build. Every project is a new beginning.",
    selected: "SELECTED PROJECTS",
    openshell: "A terminal simulation running in your browser",
    torkvexa: "Automotive and engine simulation",
    footer: "Designed with curiosity. Built with code."
  }
};

const languageButton = document.querySelector("#languageToggle");
let language = localStorage.getItem("portfolio-language") || "tr";

function applyLanguage(next) {
  language = next;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-text]").forEach((node) => {
    const key = node.dataset.text;
    if (copy[language][key]) node.textContent = copy[language][key];
  });
  languageButton.textContent = language === "tr" ? "EN" : "TR";
  localStorage.setItem("portfolio-language", language);
}

languageButton.addEventListener("click", () => {
  applyLanguage(language === "tr" ? "en" : "tr");
});

document.querySelector("#year").textContent = new Date().getFullYear();
applyLanguage(language);
