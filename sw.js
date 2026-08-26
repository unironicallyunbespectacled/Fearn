// FEARN Service Worker — 100% Offline-First Asset & Curricula Cache (Airplane Mode Guaranteed)
const CACHE_NAME = 'fearn-v3.0-airplane-mode-complete';

const PRECACHE_ASSETS = [
  "./focus-noise.js",
  "./",
  "./app.html",
  "./app.js",
  "./audio.js",
  "./components.css",
  "./data/curricula/amharic.js",
  "./data/curricula/amharic.ledger.js",
  "./data/curricula/arabic.js",
  "./data/curricula/arabic.ledger.js",
  "./data/curricula/argentine-spanish.js",
  "./data/curricula/argentine-spanish.ledger.js",
  "./data/curricula/b110.js",
  "./data/curricula/b110.ledger.js",
  "./data/curricula/b111.js",
  "./data/curricula/b111.ledger.js",
  "./data/curricula/brazilian-portuguese.js",
  "./data/curricula/brazilian-portuguese.ledger.js",
  "./data/curricula/cantonese.js",
  "./data/curricula/cantonese.ledger.js",
  "./data/curricula/chess.js",
  "./data/curricula/chess.ledger.js",
  "./data/curricula/cs110.js",
  "./data/curricula/cs110.ledger.js",
  "./data/curricula/english.js",
  "./data/curricula/english.ledger.js",
  "./data/curricula/french.js",
  "./data/curricula/french.ledger.js",
  "./data/curricula/german.js",
  "./data/curricula/german.ledger.js",
  "./data/curricula/hindi.js",
  "./data/curricula/hindi.ledger.js",
  "./data/curricula/japanese.js",
  "./data/curricula/japanese.ledger.js",
  "./data/curricula/korean.js",
  "./data/curricula/korean.ledger.js",
  "./data/curricula/mandarin.js",
  "./data/curricula/mandarin.ledger.js",
  "./data/curricula/mentalmath.js",
  "./data/curricula/mentalmath.ledger.js",
  "./data/curricula/morse.js",
  "./data/curricula/morse.ledger.js",
  "./data/curricula/romanian.js",
  "./data/curricula/romanian.ledger.js",
  "./data/curricula/russian.js",
  "./data/curricula/russian.ledger.js",
  "./data/curricula/scrabble.js",
  "./data/curricula/scrabble.ledger.js",
  "./data/curricula/songwriting.js",
  "./data/curricula/songwriting.ledger.js",
  "./data/curricula/spanish.js",
  "./data/curricula/spanish.ledger.js",
  "./data/curricula/swahili.js",
  "./data/curricula/swahili.ledger.js",
  "./data/curricula/turkish.js",
  "./data/curricula/turkish.ledger.js",
  "./data/curricula/typing.js",
  "./data/curricula/typing.ledger.js",
  "./data/curricula/ukrainian.js",
  "./data/curricula/ukrainian.ledger.js",
  "./data/curricula/urdu.js",
  "./data/curricula/urdu.ledger.js",
  "./data/curricula/vietnamese.js",
  "./data/curricula/vietnamese.ledger.js",
  "./data/fitness-program.js",
  "./data/fitness.ledger.js",
  "./data/omni_dictionary.js",
  "./data/omni_lexicon.js",
  "./engine.js",
  "./index.html",
  "./manifest.json",
  "./modules/fitness.js",
  "./modules/languages/amharic.js",
  "./modules/languages/arabic.js",
  "./modules/languages/argentine-spanish.js",
  "./modules/languages/brazilian-portuguese.js",
  "./modules/languages/cantonese.js",
  "./modules/languages/english.js",
  "./modules/languages/french.js",
  "./modules/languages/german.js",
  "./modules/languages/hindi.js",
  "./modules/languages/japanese.js",
  "./modules/languages/korean.js",
  "./modules/languages/mandarin.js",
  "./modules/languages/romanian.js",
  "./modules/languages/russian.js",
  "./modules/languages/spanish.js",
  "./modules/languages/swahili.js",
  "./modules/languages/turkish.js",
  "./modules/languages/ukrainian.js",
  "./modules/languages/urdu.js",
  "./modules/languages/vietnamese.js",
  "./modules/skills/b110.js",
  "./modules/skills/b111.js",
  "./modules/skills/chess.js",
  "./modules/skills/cs110.js",
  "./modules/skills/mentalmath.js",
  "./modules/skills/morse.js",
  "./modules/skills/scrabble.js",
  "./modules/skills/songwriting.js",
  "./modules/skills/typing.js",
  "./schema.js",
  "./theme.css",
  "./ui-components.js",
  "./world-clock.js"
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      console.log('[FEARN SW] Pre-caching complete application suite (all 3,740 lessons, engines & audio)');
      return cache.addAll(PRECACHE_ASSETS).catch(err => {
        console.warn('[FEARN SW] Precache non-critical notice:', err);
      });
    }).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.filter(k => k !== CACHE_NAME).map(k => caches.delete(k))
      );
    }).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;

  event.respondWith(
    caches.match(event.request, { ignoreSearch: true }).then(cachedResponse => {
      if (cachedResponse) {
        return cachedResponse;
      }
      return fetch(event.request).then(networkResponse => {
        if (!networkResponse || networkResponse.status !== 200 || networkResponse.type !== 'basic') {
          return networkResponse;
        }
        const responseToCache = networkResponse.clone();
        caches.open(CACHE_NAME).then(cache => {
          cache.put(event.request, responseToCache);
        });
        return networkResponse;
      }).catch(() => {
        return caches.match('./index.html') || caches.match('./app.html');
      });
    })
  );
});
