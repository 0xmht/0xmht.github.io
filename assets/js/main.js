const translations = {
  tr: {
    available: "Yeni projelere açık",
    eyebrow: "BAĞIMSIZ GELİŞTİRİCİ · İZMİR, TR",
    hello: "Merhaba, ben",
    intro: "Web teknolojileri, yazılım ve etkileşimli deneyimler üzerine çalışan bir geliştiriciyim. Fikirleri çalışan projelere dönüştürmeyi seviyorum.",
    projectsBtn: "Projelerimi keşfet",
    contactBtn: "İletişime geç",
    focus: "ODAK ALANLARI",
    sideNote: "Her proje, yeni bir şey denemek ve daha iyisini üretmek için bir fırsat.",
    selected: "SEÇİLİ PROJELER",
    openShell: "Tarayıcıda çalışan terminal simülasyonu",
    torkvexa: "Otomotiv ve motor simülasyonu",
    footer: "Merakla tasarlandı. Kodla geliştirildi."
  },
  en: {
    available: "Open to new projects",
    eyebrow: "INDEPENDENT DEVELOPER · IZMIR, TR",
    hello: "Hello, I'm",
    intro: "I'm a developer working with web technologies, software and interactive experiences. I enjoy turning ideas into working projects.",
    projectsBtn: "Explore my projects",
    contactBtn: "Get in touch",
    focus: "FOCUS AREAS",
    sideNote: "Every project is a chance to experiment, learn something new and build something better.",
    selected: "SELECTED PROJECTS",
    openShell: "A terminal simulation running in the browser",
    torkvexa: "Automotive and engine simulation",
    footer: "Designed with curiosity. Built with code."
  }
};

const langButton = document.querySelector("#langToggle");
let language = localStorage.getItem("portfolio-language") || "tr";

function setLanguage(nextLanguage) {
  language = nextLanguage;
  document.documentElement.lang = language;
  document.querySelectorAll("[data-i18n]").forEach((element) => {
    const key = element.dataset.i18n;
    if (translations[language][key]) element.textContent = translations[language][key];
  });
  langButton.textContent = language === "tr" ? "EN" : "TR";
  localStorage.setItem("portfolio-language", language);
}

langButton.addEventListener("click", () => setLanguage(language === "tr" ? "en" : "tr"));
document.querySelector("#year").textContent = new Date().getFullYear();
setLanguage(language);
