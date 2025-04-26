(function(){
    'use strict';

    // add your script here
    
    //setting up map
    const map = L.map('map').setView([51.505, -0.09], 13); //x cord, y cord, zoom in/out

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //setting up map



    //adding visual objects (marker, circle, polygon)
    const marker = L.marker([51.5, -0.09]).addTo(map);

    const circle = L.circle([51.508, -0.11], {
        color: 'red',
        fillColor: '#f03',
        fillOpacity: 0.5,
        radius: 500
    }).addTo(map);

    const polygon = L.polygon([
        [51.509, -0.08],
        [51.503, -0.06],
        [51.51, -0.047]
    ]).addTo(map);
    //adding visual objects (marker, circle, polygon)


    //adding popup
    marker.bindPopup("<b>Hello world!</b><br>I am a popup.").openPopup();
    circle.bindPopup("I am a circle.");
    polygon.bindPopup("I am a polygon."); //adding popup directly to the visual objects

    



    
}());