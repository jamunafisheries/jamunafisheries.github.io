const CACHE_NAME = 'jamuna-fisheries-v2';
const urlsToCache = [
  '/',
  '/index.html',
  '/assets/css/styles.min.css',
  '/assets/js/script.min.js',
  '/assets/js/translations.min.js',
  '/assets/js/config.js',
  '/assets/images/business-card.webp',
  '/assets/images/owner.webp',
  '/assets/images/fish/rohu-carp.webp',
  '/assets/images/fish/katla-carp.webp',
  '/assets/images/fish/silver-carp.webp',
  '/assets/images/fish/grass-carp.webp',
  '/assets/images/fish/common-carp.webp',
  '/assets/images/fish/japani-puti.webp',
  '/assets/images/slider/slide-1.webp',
  '/assets/images/slider/slide-2.webp',
  '/assets/images/slider/slide-3.webp',
  '/assets/images/slider/slide-4.webp',
  '/assets/images/slider/slide-5.webp',
  'https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap',
  'https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0/css/all.min.css'
];

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }
        return fetch(event.request);
      }
    )
  );
});

self.addEventListener('activate', function(event) {
  event.waitUntil(
    caches.keys().then(function(cacheNames) {
      return Promise.all(
        cacheNames.map(function(cacheName) {
          if (cacheName !== CACHE_NAME) {
            return caches.delete(cacheName);
          }
        })
      );
    })
  );
}); 