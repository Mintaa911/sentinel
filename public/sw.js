const CACHE_NAME = 'sentinel-v1';
const urlsToCache = [
  '/',
  '/offline.html',
  '/assets/Sentinel_logo.png',
  '/about',
  '/products',
  '/blog',
  '/contact',
  '/about/about-sentinel-standards',
  '/about/about-dr-anthony-prudden',
  '/products/n-glycans'

];

// Install event - cache resources
self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then((cache) => {
        return cache.addAll(urlsToCache);
      })
  );
});

// Fetch event: Cache-first, then network (stale-while-revalidate)
self.addEventListener('fetch', (event) => {
    if (event.request.method !== 'GET') return;
  
    event.respondWith(
      caches.match(event.request).then((cachedResponse) => {
        const fetchAndUpdate = fetch(event.request)
          .then((networkResponse) => {
            // Only cache successful (status 200) responses
            if (networkResponse.ok) {
              caches.open(CACHE_NAME).then((cache) => {
                cache.put(event.request, networkResponse.clone());
              });
            }
            return networkResponse;
          })
          .catch(() => {
            // If fetch fails (e.g., offline), and no cached version, return fallback
            if (event.request.mode === 'navigate') {
              return caches.match('/offline.html');
            }
          });
  
        // Return cached version if available, else wait for fetch
        return cachedResponse || fetchAndUpdate;
      })
    );
  });

// Activate event - clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames.map((cacheName) => {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 