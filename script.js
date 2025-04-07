(function(){
    'use strict';

    console.log("loaded");

    let clickCount = 1; //odd for angel theme, even for devil theme
    const bannerImg = document.querySelector('#bannerImage');
    const CSSLink = document.querySelector('#theme');

    const sunMoon = document.querySelector('#sunAndmoon');
    sunMoon.addEventListener('click', function(){
        clickCount++;
        console.log(clickCount);

        if (clickCount % 2 === 0){ //even
            CSSLink.href = "stylesDevil.css";
            bannerImg.src = "./images/devilMochi.png";
            sunMoon.src = "./images/moon.png";
        }
        else{ //odd
            CSSLink.href = "stylesAngel.css";
            bannerImg.src = "./images/angelMochi.png";
            sunMoon.src = "./images/sun.png";
        }
    });
})();