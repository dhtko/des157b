(function(){
    'use strict';

    // add your script here
    
    //setting up map
    const map = L.map('map').setView([49.1880, -122.7988], 16); //x cord, y cord, zoom in/out

    L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
        maxZoom: 19,
        attribution: '&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>'
    }).addTo(map);
    //setting up map



    //adding visual objects (marker, circle, polygon)
    const townCentre = L.marker([49.189633, -122.803820]).addTo(map);

    const marker2 = L.marker([49.191775, -122.796488]).addTo(map);

    const park = L.circle([49.188960, -122.793462], {
        color: 'green',
        fillColor: '#a1d4ae',
        fillOpacity: 0.5,
        radius: 180
    }).addTo(map);
    //adding visual objects (marker, circle, polygon)


    //adding popup
    townCentre.bindPopup("<b>Guildford Town Centre</b><br>The go-to place for hangouts").openPopup();
    marker2.bindPopup("<b>Hannam Supermarket</b><br>My first work.");
    park.bindPopup("<b>Guildford Heights Park</b><br>A peaceful park for my morning run"); 
    //adding popup directly to the visual objects





    
}());