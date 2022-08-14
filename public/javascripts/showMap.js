mapboxgl.accessToken = mapToken;
const map = new mapboxgl.Map({
    container: 'map', // container ID
    style: 'mapbox://styles/mapbox/streets-v11', // style URL
    center: campground.geometry.coordinates, // starting position [lng, lat]
    zoom: 7, // starting zoom
    projection: 'globe', // display the map as a 3D globe
    cooperativeGestures: true
});

map.addControl(new mapboxgl.NavigationControl());
map.addControl(new mapboxgl.FullscreenControl(), 'bottom-left');

new mapboxgl.Marker()
    .setLngLat(campground.geometry.coordinates)
    .setPopup(
        new mapboxgl.Popup({ offset: 25 })
            .setHTML(
                `<h4 class="font-weight-bold">${campground.title}</h4><p class="text-center text-muted">${campground.location}</p>`
            )
    )
    .addTo(map)