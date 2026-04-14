const CACHE_NAME = 'yosi-intro-v1';

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return fetch('./').then((response) => {
        // Cache the main page
        cache.put('./', response.clone());
        // Parse HTML to find asset URLs
        return response.text();
      }).then((html) => {
        const assetUrls = [];
        // Match all src and href attributes pointing to local assets
        const matches = html.matchAll(/(?:src|href)=["']([^"']*?)["']/g);
        for (const match of matches) {
          const url = match[1];
          if (url && !url.startsWith('http') && !url.startsWith('//')) {
            assetUrls.push(url);
          }
        }
        return cache.addAll(assetUrls.filter((v, i, a) => a.indexOf(v) === i));
      }).catch(() => {
        // Fallback: just cache the index
        return cache.add('./');
      });
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((names) =>
      Promise.all(
        names
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      )
    )
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  // Only handle GET requests
  if (event.request.method !== 'GET') return;

  event.respondWith(
    // Network first, fallback to cache
    fetch(event.request)
      .then((response) => {
        // Cache successful responses
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => {
        // Offline: serve from cache
        return caches.match(event.request).then((cached) => {
          return cached || new Response('Offline', { status: 503 });
        });
      })
  );
});
