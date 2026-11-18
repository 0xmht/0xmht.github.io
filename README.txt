MEHMET PORTFOLIO
================

Dosya yapisi:
  index.html
  assets/css/style.css
  assets/js/main.js
  deploy.sh
  README.txt

Termux:
  pkg install gh unzip coreutils zip -y
  gh auth login

ZIP'ten cikarma:
  mkdir -p ~/portfolio
  unzip -o /sdcard/Download/mehmet-portfolio-rebuilt.zip -d ~/portfolio
  cd ~/portfolio

Deploy:
  chmod +x deploy.sh
  ./deploy.sh

ZIP yedegi olusturma:
  cd ~
  zip -r mehmet-portfolio-backup.zip portfolio

Hedef repo: 0xmht/0xmht.github.io
Site: https://0xmht.github.io/

Deploy betigi index.html, CSS, JS, deploy.sh ve README.txt dosyalarini
tek tek gunceller. Diger repo klasorlerine dokunmaz.
