const VERSION = 'v1';
const APP_SHELL = [
  '/', './index.html', './style.css', './app.js', './manifest.json',
  '/icons/icon-192.png', '/icons/icon-512.png'
];
const STATIC_CACHE = `static-${VERSION}`;
const IMG_CACHE = `images-${VERSION}`;
const CDN_CACHE = `cdn-${VERSION}`;
const IMAGE_PATH = '/images/';
const EXTERNAL_RESOURCES = [
  'https://cdnjs.cloudflare.com',
  'https://fonts.googleapis.com',
  'https://unpkg.com',
  'https://cdn.jsdelivr.net',
  'https://api.emailjs.com'
];

self.addEventListener('install', (e) => {
  e.waitUntil(
    caches.open(STATIC_CACHE)
      .then((cache) => cache.addAll(APP_SHELL))
      .then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(
        keys.filter(k => ![STATIC_CACHE, IMG_CACHE, CDN_CACHE].includes(k))
          .map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', (e) => {
  const req = e.request;
  const url = new URL(req.url);

  // Handle CDN resources: stale-while-revalidate
  if (isCDN(url)) {
    e.respondWith(
      caches.open(CDN_CACHE)
        .then(cache => cache.match(req)
          .then(res => {
            const fetchPromise = fetch(req).then(networkRes => {
              cache.put(req, networkRes.clone());
              return networkRes;
            });
            return res || fetchPromise;
          })
        )
    );
    return;
  }

  // Handle images: cache-first
  if (url.pathname.startsWith(IMAGE_PATH)) {
    e.respondWith(
      caches.open(IMG_CACHE)
        .then(cache => cache.match(req)
          .then(res => {
            if (res) return res;
            return fetch(req).then(networkRes => {
              cache.put(req, networkRes.clone());
              return networkRes;
            });
          })
        )
    );
    return;
  }

  // Handle navigation: network-first with fallback
  if (req.mode === 'navigate') {
    e.respondWith(
      fetch(req)
        .catch(() => caches.match('/index.html'))
    );
    return;
  }

  // Default strategy: network-first with cache fallback
  e.respondWith(
    fetch(req)
      .catch(() => caches.match(req))
  );
});
