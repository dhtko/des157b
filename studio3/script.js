(function(){
    'use strict';
  
    console.log('loaded');
  
    const granimInstance = new Granim({
        element: '#gradient-canvas',
        direction: 'diagonal',
        isPausedWhenNotInView: true,
        states: {
            "default-state": {
                gradients: [
                    ['#ff9966', '#ff5e62'],
                    ['#00F260', '#0575E6'],
                    ['#e1eec3', '#f05053']
                ],
                transitionSpeed: 10000
            },
            "violet-state": {
                gradients: [
                    ['#9D50BB', '#6E48AA'], 
                    ['#4776E6', '#8E54E9']
                ],
                transitionSpeed: 2000
            },
            "orange-state": {
                gradients: [
                    ['#0f2027', '#203a43']
                ],
                transitionSpeed: 500
            }
        }
    });

    $('#default-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('default-state');
        setClass('#default-state-cta');
    });
    $('#violet-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('violet-state');
        setClass('#violet-state-cta');
    });
    $('#orange-state-cta').on('click', function(event){
        event.preventDefault();
        granimInstance.changeState('orange-state');
        setClass('#orange-state-cta');
    });

    function setClass(element){
        $('#toggleCircleGroup div').removeClass('active');
        $(element).addClass('active');
    }

  })();
  