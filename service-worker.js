const CACHE_NAME = "kochorakel-v0.1.5";
const SUPABASE_CDN = "https://cdn.jsdelivr.net/npm/@supabase/supabase-js@2";
const APP_FILES = [
  "./kochorakel.html",
  "./manifest.webmanifest",
  "./icons/icon-192.png",
  "./icons/icon-512.png",
  "./icons/apple-touch-icon.png"
];

self.addEventListener("install", function(event) {
  event.waitUntil(caches.open(CACHE_NAME).then(function(cache) {
    return cache.addAll(APP_FILES).then(function() {
      return fetch(SUPABASE_CDN).then(function(response) {
        if (response.ok) return cache.put(SUPABASE_CDN, response);
      }).catch(function() {});
    });
  }).then(function() {
    return self.skipWaiting();
  }));
});

self.addEventListener("activate", function(event) {
  event.waitUntil(caches.keys().then(function(keys) {
    return Promise.all(keys.filter(function(key) {
      return key !== CACHE_NAME;
    }).map(function(key) {
      return caches.delete(key);
    }));
  }).then(function() {
    return self.clients.claim();
  }));
});

self.addEventListener("fetch", function(event) {
  if (event.request.method !== "GET") return;
  const url = new URL(event.request.url);
  if (event.request.url === SUPABASE_CDN) {
    event.respondWith(caches.match(SUPABASE_CDN).then(function(cached) {
      return cached || fetch(event.request);
    }));
    return;
  }
  if (url.origin !== self.location.origin) return;

  if (event.request.mode === "navigate" || url.pathname.endsWith("/kochorakel.html")) {
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

  event.respondWith(caches.match(event.request).then(function(cached) {
    return cached || fetch(event.request).then(function(response) {
      if (response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function(cache) { cache.put(event.request, copy); });
      }
      return response;
    });
  }));
});
