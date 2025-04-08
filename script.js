(function(){
    'use strict';

    console.log("loaded");

    let clickCount = 1; //odd for angel theme, even for devil theme
    const bannerImg = document.querySelector('#bannerImage');
    const CSSLink = document.querySelector('#theme');
    const hiddenMessage = document.querySelector('#hiddenText');

    const sunMoon = document.querySelector('#sunAndmoon');
    sunMoon.addEventListener('click', function(){
        clickCount++;
        console.log(clickCount);

        if (clickCount % 2 === 0){ //even (devil)
            CSSLink.href = "stylesDevil.css";
            bannerImg.src = "./images/devilMochi.png";
            sunMoon.src = "./images/moonIcon.png";
            hiddenMessage.innerHTML = "Let There BE Light";
        }
        else{ //odd (angel)
            CSSLink.href = "stylesAngel.css";
            bannerImg.src = "./images/angelMochi.png";
            sunMoon.src = "./images/sunIcon.png";
            hiddenMessage.innerHTML = "Let Darkness Fall Upon";
        }
    });
    sunMoon.addEventListener('mouseover', function(){
        hiddenMessage.className = 'showing';
    });
    sunMoon.addEventListener('mouseout', function(){
        hiddenMessage.className = 'hidden';
    })
})();