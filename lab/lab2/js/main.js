// Leaflet map setup
var map = L.map('map', {
  center: [40.7128, -74.0059],
  zoom: 11
});

var Stamen_TonerLite = L.tileLayer('http://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}.png', {
  attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>',
  subdomains: 'abcd',
  minZoom: 0,
  maxZoom: 20,
  ext: 'png'
}).addTo(map);

// To add your Carto visualization, change cartoUserName and cartoVizId to your username and
// project ID. These values can be found in the URL of your map on Carto:
// - https://[cartoUserName].carto.com/[cartoVizId]

// Unfortunately, only some visualizations styles are available in this method:
//
// - None
// - Animated
// - Pixel
//
// This is a bummer. But don't worry, we'll learn about how to do more powerful visualizations
// with Carto next week when we learn about SQL

// To add visualizations created with the Analysis feature, you will need to export the data to a
// GeoJSON. From there, you can either import the GeoJSON to Carto or use Leaflet's L.geoJson.
//CARTO API: 194647cf6156009e54c0d86b7b58cbdd4c79c275

/*
CARTO
upload dataset
data | style
toggle between table and map
modify datset
put in
var cartoUserName = "estheroid" and
var cartoVizId =
*/
//https://estheroid.carto.com/builder/54a45b8a-13f2-11e7-b72a-0ecd1babdde5/embed

var cartoUserName = 'estheroid';
var cartoVizId = '75ff5378-13f9-11e7-9d84-0e3ebc282e83';

var layerUrl = 'https://'+cartoUserName+'.carto.com/api/v2/viz/'+cartoVizId+'/viz.json';

cartodb.createLayer(map, layerUrl)
  .on('done', function(layer) {
    layer.addTo(map);
  }).on('error', function(err) {
    console.log(err);
  });
