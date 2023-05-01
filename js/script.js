
let map = L.map('map').setView([51.5, -0.09], 1).setZoom(13);
console.log(L);
console.log(map);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Hhso0s6oSrWdJpRprViR', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let leafletIcon = L.icon({
  iconUrl: 'https://leafletjs.com/examples/custom-icons/leaf-green.png',
  shadowUrl: 'https://leafletjs.com/examples/custom-icons/leaf-shadow.png',
  iconSize: [38, 95],
  iconAnchor: [22, 94],
  shadowAnchor: [4, 62],
  popupAnchor: [12, -90]
});

let marker = L.marker([51.5, -0.09], {icon: leafletIcon}).addTo(map);

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