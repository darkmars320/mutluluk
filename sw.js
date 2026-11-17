const CACHE='mutluluk-v3';
const FILES=[
  "./",
  "fonts/caveat-latin-500-normal.woff2",
  "fonts/caveat-latin-700-normal.woff2",
  "fonts/caveat-latin-ext-500-normal.woff2",
  "fonts/caveat-latin-ext-700-normal.woff2",
  "fonts/fonts.css",
  "fonts/nunito-latin-400-normal.woff2",
  "fonts/nunito-latin-600-normal.woff2",
  "fonts/nunito-latin-700-normal.woff2",
  "fonts/nunito-latin-800-normal.woff2",
  "fonts/nunito-latin-ext-400-normal.woff2",
  "fonts/nunito-latin-ext-600-normal.woff2",
  "fonts/nunito-latin-ext-700-normal.woff2",
  "fonts/nunito-latin-ext-800-normal.woff2",
  "icons/apple-touch-icon.png",
  "icons/favicon.png",
  "icons/icon-192.png",
  "icons/icon-512.png",
  "icons/maskable-512.png",
  "index.html",
  "manifest.webmanifest",
];
self.addEventListener('install',e=>{e.waitUntil(caches.open(CACHE).then(c=>c.addAll(FILES)).then(()=>self.skipWaiting()));});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(ks=>Promise.all(ks.filter(k=>k!==CACHE).map(k=>caches.delete(k)))).then(()=>self.clients.claim()));});
self.addEventListener('fetch',e=>{if(e.request.method!=='GET')return;e.respondWith(caches.match(e.request,{ignoreSearch:true}).then(r=>r||fetch(e.request).then(res=>{const cp=res.clone();caches.open(CACHE).then(c=>c.put(e.request,cp));return res;}).catch(()=>caches.match('./'))));});
