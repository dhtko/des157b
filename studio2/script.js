(function(){
    'use strict';

    console.log('loaded');

    const circle1 = document.querySelector('#ball1');
    const circle2 = document.querySelector('#ball2');
    const circle3 = document.querySelector('#ball3');
    const circle4 = document.querySelector('#ball4');
    const circle5 = document.querySelector('#ball5');
    const circle6 = document.querySelector('#ball6');
    const circle7 = document.querySelector('#ball7');
    const circle8 = document.querySelector('#ball8');
    const circle9 = document.querySelector('#ball9');
    const circle10 = document.querySelector('#ball10');
    const circle11 = document.querySelector('#ball11');
    const circle12 = document.querySelector('#ball12');
    const circle13 = document.querySelector('#ball13');
    const circle14 = document.querySelector('#ball14');


    async function getData(){
        const matchHistory = await fetch('./data.json');
        const data = await matchHistory.json();
        console.log(data);
    }
    getData();



    circle1.addEventListener('mouseover', function(){
        console.log('hello');
    });
    circle2.addEventListener('mouseover', function(){
        console.log('hello2');
    });
    circle3.addEventListener('mouseover', function(){
        console.log('hello3');
    });
    circle4.addEventListener('mouseover', function(){
        console.log('hello4');
    });
    circle5.addEventListener('mouseover', function(){
        console.log('hello5');
    });
    circle6.addEventListener('mouseover', function(){
        console.log('hello6');
    });
    circle7.addEventListener('mouseover', function(){
        console.log('hello7');
    });
    circle8.addEventListener('mouseover', function(){
        console.log('hello8');
    });
    circle9.addEventListener('mouseover', function(){
        console.log('hello9');
    });
    circle10.addEventListener('mouseover', function(){
        console.log('hello10');
    });
    circle11.addEventListener('mouseover', function(){
        console.log('hello11');
    });
    circle12.addEventListener('mouseover', function(){
        console.log('hello12');
    });
    circle13.addEventListener('mouseover', function(){
        console.log('hello13');
    });
    circle14.addEventListener('mouseover', function(){
        console.log('hello14');
    });

})();