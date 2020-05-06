var mapboxgl = require("mapbox-gl/dist/mapbox-gl.js");

mapboxgl.accessToken =
  "pk.eyJ1IjoibXluYW1laXNyZWlseSIsImEiOiJjanllcTVwMXAxNDk1M2Nyd2FkMHozaDQ2In0.MRkRrmN1B2Xn7ckwPchduA";
var map = new mapboxgl.Map({
  container: "mapbox",
  style: "mapbox://styles/mapbox/streets-v11",
});
