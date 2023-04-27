// Idea about how to setView and zoom into view the place where you place your marker. Awesome!

let map = L.map('map').setView([51.5, -0.09], 1).setZoom(12);
console.log(L);
console.log(map);

L.tileLayer('https://api.maptiler.com/maps/streets-v2/{z}/{x}/{y}.png?key=Hhso0s6oSrWdJpRprViR', {
  attribution: '<a href="https://www.maptiler.com/copyright/" target="_blank">&copy; MapTiler</a> <a href="https://www.openstreetmap.org/copyright" target="_blank">&copy; OpenStreetMap contributors</a>'
}).addTo(map);

let marker = L.marker([51.5, -0.09]).addTo(map);
