if ('serviceWorker' in navigator) {
    navigator.serviceWorker.register('./sw.js')
        .then(() => navigator.serviceWorker.ready.then((worker) => {
            worker.sync.register('syncdata');
        }))
        .catch((err) => console.log(err));
}

mapboxgl.accessToken = 'pk.eyJ1IjoidHJ1ZmkiLCJhIjoiY2lrcW1pdzU4MDEyanUwbTIwZzJ1bmY4dSJ9.5qW-pRcgah2nQIWpGKwHRg';
const map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/trufi/cjil6e9qp146w2sozewzwzlnk',
    center: [83.09598, 54.85404],
    zoom: 14,
    attributionControl: false,
});

map.addControl(new mapboxgl.NavigationControl({
    showZoom: false,
}), 'top-right');

map.addControl(new mapboxgl.GeolocateControl({
    positionOptions: {
        enableHighAccuracy: true,
    },
    trackUserLocation: true,
}), 'bottom-right');

map.addControl(new mapboxgl.ScaleControl({
    maxWidth: 80,
    unit: 'metric',
}), 'top-left');
