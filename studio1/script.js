(function(){
    'use strict';

    console.log('loaded');

    const fs = document.querySelector('.fa-expand');
    const troubleshoot = document.querySelector('#troubleshoot');
    const video = document.querySelector('#mainContent');
    const lines = document.querySelectorAll('.loopParagraph');
    const loading = document.querySelector('#loadingText');
    let shade = 50;
    let lastTime = 0;



    //troubleshoot text
    troubleshoot.addEventListener('mouseover', function(){
        troubleshoot.className = 'showing';
    });
    troubleshoot.addEventListener('mouseout', function(){
        troubleshoot.className = 'hidden';
    });



    //fullscreen
    fs.addEventListener('click', function(){
        if (!document.fullscreenElement){
            document.documentElement.requestFullscreen();
        }
        else{
            document.exitFullscreen();
        }
    });

/*
    //loadingText animation
    video.addEventListener('playing', function(){
        loading.style.display = 'none';
    });



    //interactive element: more click, video becomes pale, like we become a zombie
    video.addEventListener('click', function(){
        shade += 10;
        console.log(`cliker: ${shade}`);
        if (shade > 200){
            shade = 50;
        }
        video.style.filter = `grayscale(${shade}%)`;
    });



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
*/
video.addEventListener('click', function(){
    shade += 10;
    console.log(`cliker: ${shade}`);
    if (shade > 200){
        shade = 50;
    }
    video.style.filter = `grayscale(${shade}%)`;
});


//loadingText animation
video.addEventListener('playing', function(){
    loading.style.display = 'none';



    //the looping text starts after the video actually starts

    //interactive element: more click, video becomes pale, like we become a zombie




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