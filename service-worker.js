const CACHE_NAME = "kochorakel-v6";
const APP_SHELL = [
  "./", "./index.html", "./kochorakel.html", "./manifest.webmanifest",
  "./icons/icon-192.png", "./icons/icon-512.png", "./icons/apple-touch-icon.png"
];
const SUPABASE_CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(async function(cache) {
    await cache.addAll(APP_SHELL);
    try {
      const response = await fetch(SUPABASE_CDN);
      if (response.ok || response.type === "opaque") await cache.put(SUPABASE_CDN, response);
    } catch (error) {}
  }).then(function() { return self.skipWaiting(); }));
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(key) { return key !== CACHE_NAME; }).map(function(key) {
      return caches.delete(key);
    }));
  }).then(function() { return self.clients.claim(); }));
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (event.request.mode === "navigate") {
    event.respondWith(fetch(event.request).then(function(response) {
      const copy = response.clone();
      caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
      return response;
    }).catch(function() {
      return caches.match(event.request).then(function(cached) {
        return cached || caches.match("./kochorakel.html");
      });
    }));
    return;
  }
  if (url.origin === self.location.origin || url.href === SUPABASE_CDN) {
    event.respondWith(caches.match(event.request).then(function(cached) {
      const network = fetch(event.request).then(function(response) {
        if (response.ok || response.type === "opaque") {
          const copy = response.clone();
          caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
        }
        return response;
      }).catch(function() { return cached; });
      return cached || network;
    }));
  }
});
