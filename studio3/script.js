(function(){
    'use strict';
  
    console.log('loaded');

    const header = document.querySelector('h1');
  
    AOS.init();

    const granimInstance = new Granim({
        element: '#gradient-canvas',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#FD1D1D', '#FCB045'],
                    ['#FF6D33', '#DEC312'],
                ],
                transitionSpeed: 10000
            },
            "violet-state": {
                gradients: [
                    ['#A8A8FF', '#090979'], 
                    ['#6281F0', '#8C2222']
                ],
                transitionSpeed: 4000
            },
            "green-state": {
                gradients: [
                    ['#51C997', '#EDDD53'],
                    ['#48DB63', '#1894BA']
                ],
                transitionSpeed: 2000
            }
        }
    });
    $('#default-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('default-state');
        setClass('#default-state-cta');

        header.style.color = '#F2F2F2';
    });
    $('#violet-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('violet-state');
        setClass('#violet-state-cta');

        header.style.color = '#3DD7E8';
    });
    $('#green-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('green-state');
        setClass('#green-state-cta');

        header.style.color = '#ECF502';
    });
    function setClass(element){
        $('#toggleCircleGroup div').removeClass('active');
        $(element).addClass('active');
    }



  })();
  