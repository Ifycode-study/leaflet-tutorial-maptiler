
let map = L.map('map').setView([51.5, -0.09], 1).setZoom(13);
console.log(L);
console.log(map);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Hhso0s6oSrWdJpRprViR', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);

let circle = L.circle([51.508, -0.11], {
  color: 'red',
  fillColor: '#f03',
  fillOpacity: 0.5,
  radius: 500
}).addTo(map);

let polygon = L.polygon([
  [51.509, -0.08],
  [51.503, -0.06],
  [51.51, -0.047]
]).addTo(map);

marker.bindPopup('<b> Maps are awesome! Markers too. </b>').openPopup();
circle.bindPopup('<b> Circle? Cool too! </b>');
polygon.bindPopup('<b> Nice polygon! </b>');