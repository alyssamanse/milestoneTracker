// Minimal offline cache — lets the app open even with no signal, once you've
// loaded it at least once. Your tracked data itself lives in localStorage,
// not in this cache, so this doesn't affect your saved entries either way.
const CACHE_NAME = "starting-solids-v4";
const ASSETS = ["./", "./index.html", "./desktop.bundle.js", "./mobile.bundle.js", "./manifest.json", "./icon-192.png", "./icon-512.png"];

self.addEventListener("install", (event) => {
  event.waitUntil(caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)));
  self.skipWaiting();
});

self.addEventListener("activate", (event) => {
  event.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE_NAME).map((k) => caches.delete(k))))
  );
  self.clients.claim();
});

self.addEventListener("fetch", (event) => {
  event.respondWith(
    caches.match(event.request).then((cached) => cached || fetch(event.request))
  );
});
