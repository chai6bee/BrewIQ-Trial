// BrewIQ service worker — caches the app shell so it loads instantly and
// works offline, while making sure a new deploy actually reaches the owner
// instead of getting stuck behind an old cache forever.
//
// ============================================================================
// HOW TO SHIP AN UPDATE (read this before every deploy)
// ============================================================================
// Bump CACHE_VERSION below by 1 (or to today's date) EVERY TIME you push new
// index.html / script.js / styles.css / images to GitHub Pages. This is the
// ONLY thing that makes the browser notice anything changed — a service
// worker byte-for-byte identical to the one already installed is treated as
// "no update" and silently skipped, even if every file it CACHES changed.
//
// What happens after you bump it and push:
//   1. The owner's browser notices this sw.js file itself changed (browsers
//      re-check it on every navigation), downloads the new version, and
//      runs it in the background as the "waiting" worker.
//   2. index.html's inline script sees that waiting worker and shows the
//      "Update Now" banner immediately — no need to wait for a natural
//      next-day reload.
//   3. Tapping "Update Now" tells this worker to activate now; the old
//      cache (previous CACHE_VERSION) is deleted, the new one takes over,
//      and the page reloads once automatically.
// Nothing above ever touches localStorage, the in-app state, or the Cloud
// Database — only the cached copies of the app's own files are replaced.
// ============================================================================

const CACHE_VERSION = 'brewiq-v1';

// The app shell: the minimum set of files needed to render the app with no
// network at all. Everything else (charts CDN script, Google Fonts) is
// fetched normally and simply won't load offline — that's an acceptable
// trade-off for a café-ops tool that mainly needs to work for data entry,
// not for pulling in a chart library with no connection.
const SHELL_FILES = [
  './',
  './index.html',
  './styles.css',
  './script.js',
  './manifest.json',
  './images/favicon.png',
  './images/logo.png'
];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_VERSION).then((cache) => {
      // addAll fails the whole install if even ONE file 404s (e.g. a typo'd
      // image path) — each file is added individually instead, so a single
      // missing image never breaks offline support for everything else.
      return Promise.all(
        SHELL_FILES.map((url) =>
          cache.add(url).catch((err) => {
            console.warn('[BrewIQ SW] could not cache', url, err);
          })
        )
      );
    })
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) =>
      Promise.all(
        keys
          .filter((key) => key !== CACHE_VERSION)
          .map((key) => caches.delete(key))
      )
    )
  );
});

// Lets index.html's "Update Now" button skip the normal wait-for-all-tabs-
// to-close behavior and activate the new worker right away.
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

self.addEventListener('fetch', (event) => {
  const req = event.request;
  if (req.method !== 'GET') return; // never cache POSTs (e.g. Cloud sync writes)

  const url = new URL(req.url);

  // Cross-origin requests (Google Fonts, the ApexCharts CDN script, and —
  // critically — the owner's own Cloud/Server connection URL, which is a
  // different origin like script.google.com) are NEVER intercepted here.
  // They must always hit the real network so sales/stock/staff data is
  // always current; caching them would silently show stale café data.
  if (url.origin !== self.location.origin) return;

  // Same-origin app-shell files: try the network first (so a connected
  // owner always gets the latest HTML/CSS/JS the instant it's available),
  // falling back to the cached copy only when offline or the request fails.
  // This is deliberately network-first, not cache-first — a cache-first
  // strategy is what causes the classic PWA complaint of "I updated the
  // site but my phone still shows the old version."
  event.respondWith(
    fetch(req)
      .then((networkResponse) => {
        const copy = networkResponse.clone();
        caches.open(CACHE_VERSION).then((cache) => cache.put(req, copy));
        return networkResponse;
      })
      .catch(() => caches.match(req))
  );
});
