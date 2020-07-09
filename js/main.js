

var myLines = [{
    "type": "LineString",
    "coordinates": [[-75.1904296875,
            39.95185892663005], [-75.15472412109375,
            39.98343393295322], [-75.14923095703125,
            39.95501708352986
]]
}, {
    "type": "LineString",
    "coordinates": [[-75.14923095703125,
            39.95501708352986], [-75.1904296875,
            39.95185892663005], [-76.1904296875,
            39.99185892663005]]
}];
      //  This is a geojson line. You can go to geojson.io to create unique geojson features.

var myStyle = {
    "color": "#ff7800",
    "weight": 5,
    "opacity": 0.65
};

        // This is a function to style geojson features


L.geoJSON(myLines, {
    style: myStyle
}).addTo(map);




var sampleSite = {
    radius: 8,
    fillColor: "red",
    color: "#000",
    weight: 1,
    opacity: 1,
    fillOpacity: 0.7
};


L.geoJson(lead, {
  pointToLayer: function(feature, latlng){
    return L.circleMarker(latlng, sampleSite);
  }
}).bindPopup(function (layer) {
    return ("Lead value: " + layer.feature.properties.Lead__ppm)
}).addTo(map);
