(function(){
    'use strict';

    console.log('loaded');

    const fs = document.querySelector('.fa-expand');
    const video = document.querySelector('#mainContent');
    const lines = document.querySelectorAll('.loopParagraph');
    const loading = document.querySelector('#loadingText');
    //let shade = 50;
    let lastTime = 0;




    //fullscreen
    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });


    
    //interactive element: video becomes pale as cursor eaches the right end of the window (like how we get tired and sverything start looking gray and empty)
    video.addEventListener('mousemove', function(event){
        const xPos = event.clientX;
        const windowWidth = window.innerWidth;
        const numberize = Math.floor(xPos / windowWidth * 100);
        const grayscaleValue = numberize + 30;

        video.style.filter = `grayscale(${grayscaleValue}%)`;
    });


    //loadingText animation
    video.addEventListener('playing', function(){
        loading.style.display = 'none';

        //the looping text starts after the video actually starts
        //text looping
        video.addEventListener('timeupdate', function(){
            if (video.currentTime < lastTime){
                //when the loop happens the currentTime becomes 0, leaving the lastTime is higher than 0 (for sure)
                //by catching the difference, we can detect the autoloop
                resetParagraph();
            }
            lastTime = video.currentTime;
            //marking the current video play time
        });
        //show paragraph
        function showParagraph(){
            for (let i = 0; i < lines.length; i++){
                setTimeout(function(){
                    lines[i].className = 'loopParagraph showing';
                }, 6000 * (i + 1));
                //delay the appearence on each paragraph after 6s
            }
        }
        //looping the paragraph
        function resetParagraph(){
            //hide all paragraphs
            lines.forEach(p => p.className = 'loopParagraph hidden');

            //restart loop
            showParagraph();
        }
        showParagraph();
    });
})();