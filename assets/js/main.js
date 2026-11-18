(() => {
  const supported = ["tr", "en"];
  const saved = localStorage.getItem("portfolio-language");
  let language = supported.includes(saved) ? saved : "en";

  function applyLanguage() {
    document.documentElement.lang = language;
    document.querySelectorAll("[data-tr][data-en]").forEach((element) => {
      const value = element.dataset[language];
      if (value !== undefined) element.innerHTML = value;
    });
    document.querySelectorAll(".lang-toggle").forEach((button) => {
      button.textContent = language === "en" ? "TR" : "EN";
      button.setAttribute("aria-label", language === "en" ? "Türkçeye geç" : "Switch to English");
    });
    localStorage.setItem("portfolio-language", language);
  }

  document.querySelectorAll(".lang-toggle").forEach((button) => {
    button.addEventListener("click", () => {
      language = language === "en" ? "tr" : "en";
      applyLanguage();
    });
  });

  const menuButton = document.querySelector(".menu-toggle");
  const nav = document.querySelector(".nav");
  if (menuButton && nav) {
    menuButton.addEventListener("click", () => {
      const open = nav.classList.toggle("open");
      menuButton.setAttribute("aria-expanded", String(open));
    });
  }

  applyLanguage();
})();