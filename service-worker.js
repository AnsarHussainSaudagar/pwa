self.addEventListener('install', event => {
    event.waitUntil(
      caches.open('pwa-cache').then(cache => {
        return cache.addAll([
          '/',
          '/index.html',
          '/app.js',
          '/Icon_Bird_512x512.png'
        ]);
      })
    );
  });
  
  self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then(response => {
        return response || fetch(event.request);
      })
    );
  });
  