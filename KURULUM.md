# Mutluluk Köşesi: telefona kurulum

Bu klasör, telefona kurulabilen bir web uygulaması (PWA). Kurulunca ana ekranda kalp simgesiyle durur, tam ekran açılır ve **internetsiz** de çalışır.

## 1) İnternete koy (bir kerelik, ücretsiz): GitHub Pages
1. github.com'da yeni bir **public** repo aç (ör. `mutluluk`).
2. "Add file → Upload files" ile **bu klasörün içindeki her şeyi** (index.html, sw.js, manifest.webmanifest, fonts/, icons/) sürükle bırak → Commit.
3. Repo → **Settings → Pages** → Source: `Deploy from a branch`, Branch: `main` / `(root)` → Save.
4. 1-2 dakika sonra adres hazır: `https://KULLANICI_ADIN.github.io/mutluluk/`

> HTTPS şart: uygulama olarak kurulma ve internetsiz çalışma sadece https adreslerde olur. GitHub Pages bunu otomatik sağlar.

## 2) Telefona kur
- **Android (Chrome):** adresi aç → ana sayfadaki **"📲 Ana ekrana ekle"** düğmesine bas (ya da ⋮ menü → *Uygulamayı yükle*).
- **iPhone (Safari):** adresi Safari'de aç → alttaki **Paylaş** simgesi → **Ana Ekrana Ekle**.

## Bilmen gerekenler
- Notlar ve tercihler **telefonun kendisinde** saklanır, başka cihaza geçmez. Uygulamayı silerse notlar da gider.
- Güncelleme yaparsan `sw.js` içindeki `mutluluk-v3` sürümünü bir artır (`v4` gibi). Böylece telefondaki uygulama yeni hali indirir.
