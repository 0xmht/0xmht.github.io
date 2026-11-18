const copy={
tr:{
home:"Ana sayfa",about:"Hakkımda",projects:"Projeler",contact:"İletişim",
location:"Kişisel portfolyo · İzmir, Türkiye",role:"Merhaba, ben Mehmet. Frontend geliştiricisiyim.",
intro:"Web geliştirme, yazılım ve elektronikle uğraşıyorum. Aklımdaki fikirleri çalışan projelere dönüştürmeyi seviyorum.",
see:"Projelerimi gör ↗",meet:"Biraz daha yakından tanı",scroll:"AŞAĞI KAYDIR",tagline:"Kod, merak ve biraz da lehim dumanı.",
footer:"Kendi halinde üretiliyor.",aboutTitle:"Biraz ben.",aboutSub:"Nelerle ilgilendiğim ve boş zamanlarımda neler yaptığım.",
p1:"Ben Mehmet. İzmir'de yaşıyorum. Boş zamanlarımda yazılım, müzik ve elektronik projeleriyle uğraşmayı seviyorum.",
p2:"Web siteleri geliştiriyorum. Bazen ortaya çıkan işler biraz amatör kalabiliyor ama denemek ve geliştirmek işin bir parçası. 3D projeler ve etkileşimli simülasyonlar da yapabiliyorum; bunlar biraz zaman alabiliyor.",
p3:"Kod yazarken genellikle kendim yazarak ilerlemeyi tercih ediyorum. Bazen yapay zekâ destekli araçlardan da yararlanıyorum. Benim için önemli olan ortaya çıkan şeyi anlamak ve nasıl çalıştığını bilmek.",
p4:"Örneğin bu portfolyo sitesini de kendim hazırladım. Burada yaptığım işleri ve üzerinde çalıştığım fikirleri paylaşacağım.",
interestTitle:"İLGİ ALANLARI",selected:"SEÇİLMİŞ İŞLER",projectsTitle:"Yaptıklarım.",
projectsSub:"Üzerinde çalıştığım bazı projeler. Yeni şeyler yaptıkça burası da büyüyecek.",
openDesc:"Dört günümü alan terminal simülasyonu projesi.",
torkDesc:"Yaklaşık bir haftada geliştirdiğim otomobil motoru simülasyonu. Otomotiv ve mekanik sistemlere olan ilgimden çıktı.",
visit:"Projeyi ziyaret et",contactTitle:"Bir merhaba bırak.",
contactSub:"Bir proje hakkında konuşmak ya da sadece selam vermek istersen e-posta gönderebilirsin.",
contactNote:"Yeni fikirler ve güzel sohbetler için e-posta kutum açık."
},
en:{
home:"Home",about:"About",projects:"Projects",contact:"Contact",
location:"Personal portfolio · Izmir, Türkiye",role:"Hi, I'm Mehmet. I'm a frontend developer.",
intro:"I work on web development, software and electronics. I enjoy turning ideas into working projects.",
see:"Explore my projects ↗",meet:"Get to know me",scroll:"SCROLL DOWN",tagline:"Code, curiosity and a little solder smoke.",
footer:"Made in my own corner of the internet.",aboutTitle:"A little about me.",aboutSub:"A few things I'm interested in and what I like doing in my free time.",
p1:"I'm Mehmet, and I live in Izmir, Türkiye. In my free time, I enjoy working on software, music and electronics projects.",
p2:"I build websites. Some results may be a little amateur, but experimenting and improving are part of the process. I also make 3D projects and interactive simulations, although those can take some time.",
p3:"When I code, I usually prefer writing things myself. I sometimes use AI-powered tools too. What matters to me is understanding what I've made and knowing how it works.",
p4:"I also built this portfolio site myself. I'll use it to share the things I make and the ideas I'm working on.",
interestTitle:"INTERESTS",selected:"SELECTED WORK",projectsTitle:"Things I've made.",
projectsSub:"A few projects I've worked on. This page will grow as I make more things.",
openDesc:"A terminal simulation project that took me four days to build.",
torkDesc:"A car engine simulation I built in about a week, inspired by my interest in automotive and mechanical systems.",
visit:"Visit project",contactTitle:"Drop me a hello.",
contactSub:"If you'd like to talk about a project or just say hello, you can send me an email.",
contactNote:"My inbox is open for new ideas and good conversations."
}};
let lang=localStorage.getItem("portfolio-lang")==="en"?"en":"tr";
function setLang(next){lang=next;document.documentElement.lang=next;document.querySelectorAll("[data-i18n]").forEach(el=>{const key=el.dataset.i18n;if(copy[next][key])el.textContent=copy[next][key]});document.querySelectorAll(".language").forEach(btn=>btn.textContent=next==="tr"?"EN":"TR");localStorage.setItem("portfolio-lang",next)}
document.querySelectorAll(".language").forEach(btn=>btn.addEventListener("click",()=>setLang(lang==="tr"?"en":"tr")));
const menu=document.querySelector(".menu"),links=document.querySelector(".links");if(menu&&links)menu.addEventListener("click",()=>{const open=links.classList.toggle("open");menu.setAttribute("aria-expanded",String(open))});
document.querySelectorAll(".year").forEach(el=>el.textContent=new Date().getFullYear());setLang(lang);