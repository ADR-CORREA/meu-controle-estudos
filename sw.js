/* Service Worker — Meu Controle de Estudos (offline) */
const CACHE = 'rumo-pgm-v9';
const CORE = [
  './',
  './index.html',
  './manifest.webmanifest',
  './icon-192.png',
  './icon-512.png',
  './apple-touch-icon.png',
  'https://cdn.tailwindcss.com',
  'https://cdn.jsdelivr.net/npm/dexie@4.0.8/dist/dexie.min.js',
];

self.addEventListener('install', e => {
  e.waitUntil((async () => {
    const c = await caches.open(CACHE);
    // adiciona um a um para um CDN offline não derrubar todo o cache
    await Promise.allSettled(CORE.map(u => c.add(new Request(u, { mode: 'no-cors' }))));
    self.skipWaiting();
  })());
});

self.addEventListener('activate', e => {
  e.waitUntil((async () => {
    const keys = await caches.keys();
    await Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)));
    self.clients.claim();
  })());
});

self.addEventListener('fetch', e => {
  const req = e.request;
  if (req.method !== 'GET') return;
  e.respondWith((async () => {
    const cached = await caches.match(req);
    if (cached) return cached;
    try {
      const res = await fetch(req);
      // guarda em cache respostas válidas (inclui opacas de CDN)
      if (res && (res.ok || res.type === 'opaque')) {
        const c = await caches.open(CACHE);
        c.put(req, res.clone());
      }
      return res;
    } catch (err) {
      // offline: para navegação, devolve o app
      if (req.mode === 'navigate') return caches.match('./index.html');
      throw err;
    }
  })());
});
