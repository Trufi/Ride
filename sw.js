const CACHE = 'cache-only-v1';

self.addEventListener('install', (evt) => {
    console.log('The service worker is being installed.');

    evt.waitUntil(precache());
});

self.addEventListener('fetch', (evt) => {
    console.log('The service worker is serving the asset.');
    evt.respondWith(fromCache(evt.request));
});

function precache() {
    return caches.open(CACHE).then((cache) => {
        return cache.addAll([
            './',
            './index.html',
            'https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.js',
            'https://api.tiles.mapbox.com/mapbox-gl-js/v0.45.0/mapbox-gl.css',
        ]);
    });
}

function fromCache(request) {
    return caches.open(CACHE).then((cache) => {
        return cache.match(request).then((matching) => {
            return matching || fetch(request);
        });
    });
}
