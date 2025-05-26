(function(){
    'use strict';

    console.log('loaded');

    const scannerCircle = document.querySelector('#scanner');
    const displayCircle = document.querySelector('#display');
    const dispenseExitCircle = document.querySelector('#dispenseExit');
    const garbageDoorCircle = document.querySelector('#garbageDoor');

    const scannerDetailInfo = document.querySelector('#scannerDetail');
    const displayDetailInfo = document.querySelector('#displayDetail');
    const dispenseExitDetailInfo = document.querySelector('#dispenseExitDetail');
    const garbageDoorDetailInfo = document.querySelector('#garbageDoorDetail');

    const slideshowBefore = document.querySelector('#before');
    const slideshowAfter = document.querySelector('#after');
    const slideshowImage = document.querySelector('#slideshow');

    const introHeader = document.querySelector('header');
    const bags = document.querySelectorAll('.garbageBag');
    const centerText = document.querySelector('#centerText');
    let i = 0;

    scannerCircle.addEventListener('click', function(){
        scannerDetailInfo.className = 'detailInfo showing'
    });
    scannerDetailInfo.addEventListener('click', function(){
        scannerDetailInfo.className = 'detailInfo hidden';
    });

    displayCircle.addEventListener('click', function(){
        displayDetailInfo.className = 'detailInfo showing';
    });
    displayDetailInfo.addEventListener('click', function(){
        displayDetailInfo.className = 'detailInfo hidden';
    });

    dispenseExitCircle.addEventListener('click', function(){
        dispenseExitDetailInfo.className = 'detailInfo showing';
    });
    dispenseExitDetailInfo.addEventListener('click', function(){
        dispenseExitDetailInfo.className = 'detailInfo hidden';
    });

    garbageDoorCircle.addEventListener('click', function(){
        garbageDoorDetailInfo.className = 'detailInfo showing';
    });
    garbageDoorDetailInfo.addEventListener('click', function(){
        garbageDoorDetailInfo.className = 'detailInfo hidden';
    });

    slideshowBefore.addEventListener('click', function(){
        slideshowImage.style.backgroundColor = getRandomRGB();
    });
    slideshowAfter.addEventListener('click', function(){
        slideshowImage.style.backgroundColor = getRandomRGB();
    });
    function getRandomRGB() {
        const r = Math.floor(Math.random() * 256); // 0 to 255
        const g = Math.floor(Math.random() * 256);
        const b = Math.floor(Math.random() * 256);
        return `rgb(${r}, ${g}, ${b})`;             
    }

    introHeader.addEventListener('click', function(){
        console.log(i);
        const bagGroup = bags.length;

        if (i < bagGroup){
            document.querySelector(`#bag${i+1}`).className = 'garbageBag showing';
            i++;
        }
        else{
            centerText.className = 'showing';
        }
    });

})();