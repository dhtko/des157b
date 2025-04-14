(function(){
    'use strict';

    console.log('loaded');

    const fs = document.querySelector('.fa-expand');
    const troubleshoot = document.querySelector('#troubleshoot');

    troubleshoot.addEventListener('mouseover', function(){
        troubleshoot.className = 'showing';
    });
    troubleshoot.addEventListener('mouseout', function(){
        troubleshoot.className = 'hidden';
    });

    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });
})();