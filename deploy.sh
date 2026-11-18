#!/data/data/com.termux/files/usr/bin/bash
set -euo pipefail

REPO="0xmht/0xmht.github.io"
BRANCH="main"

FILES=(
  "index.html"
  "assets/css/style.css"
  "assets/js/main.js"
  "deploy.sh"
  "README.txt"
)

command -v gh >/dev/null 2>&1 || { echo "gh bulunamadi"; exit 1; }
command -v jq >/dev/null 2>&1 || { echo "jq bulunamadi. pkg install jq"; exit 1; }

gh auth status >/dev/null 2>&1 || gh auth login

for FILE in "${FILES[@]}"; do
  [[ -f "$FILE" ]] || { echo "Eksik dosya: $FILE"; exit 1; }
done

for FILE in "${FILES[@]}"; do
  echo "GitHub'a yukleniyor: $FILE"

  SHA="$(gh api "repos/$REPO/contents/$FILE" --jq '.sha' 2>/dev/null || true)"
  CONTENT="$(base64 < "$FILE" | tr -d '\n')"

  if [[ -n "$SHA" && "$SHA" != "null" ]]; then
    jq -n \
      --arg message "Portfolio deploy: $FILE" \
      --arg content "$CONTENT" \
      --arg branch "$BRANCH" \
      --arg sha "$SHA" \
      '{message:$message, content:$content, branch:$branch, sha:$sha}' |
      gh api "repos/$REPO/contents/$FILE" -X PUT --input - >/dev/null
  else
    jq -n \
      --arg message "Portfolio deploy: $FILE" \
      --arg content "$CONTENT" \
      --arg branch "$BRANCH" \
      '{message:$message, content:$content, branch:$branch}' |
      gh api "repos/$REPO/contents/$FILE" -X PUT --input - >/dev/null
  fi

  echo "OK: $FILE"
done

echo "Tum dosyalar yuklendi."
echo "https://0xmht.github.io/"
