
let map = L.map('map').setView([0, 0], 1);
console.log(map);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Hhso0s6oSrWdJpRprViR', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);
