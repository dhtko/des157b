(function(){
    'use strict';

    console.log('loaded');

    let globalData;

    const dateData = document.querySelector('#dateData');
    const gameData = document.querySelector('#gameData');
    const top4Data = document.querySelector('#top4Data');

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
        console.log('data');

        globalData = data;
    }
    getData();


    function output1(data){
        dateData.innerHTML = data.point1.Date;
        gameData.innerHTML = data.point1.Games;
        top4Data.innerHTML = data.point1.Wins;
    }
    function output2(data){
        dateData.innerHTML = data.point2.Date;
        gameData.innerHTML = data.point2.Games;
        top4Data.innerHTML = data.point2.Wins;
    }
    function output3(data){
        dateData.innerHTML = data.point3.Date;
        gameData.innerHTML = data.point3.Games;
        top4Data.innerHTML = data.point3.Wins;
    }
    function output4(data){
        dateData.innerHTML = data.point4.Date;
        gameData.innerHTML = data.point4.Games;
        top4Data.innerHTML = data.point4.Wins;
    }
    function output5(data){
        dateData.innerHTML = data.point5.Date;
        gameData.innerHTML = data.point5.Games;
        top4Data.innerHTML = data.point5.Wins;
    }
    function output6(data){
        dateData.innerHTML = data.point6.Date;
        gameData.innerHTML = data.point6.Games;
        top4Data.innerHTML = data.point6.Wins;
    }
    function output7(data){
        dateData.innerHTML = data.point7.Date;
        gameData.innerHTML = data.point7.Games;
        top4Data.innerHTML = data.point7.Wins;
    }
    function output8(data){
        dateData.innerHTML = data.point8.Date;
        gameData.innerHTML = data.point8.Games;
        top4Data.innerHTML = data.point8.Wins;
    }
    function output9(data){
        dateData.innerHTML = data.point9.Date;
        gameData.innerHTML = data.point9.Games;
        top4Data.innerHTML = data.point9.Wins;
    }
    function output10(data){
        dateData.innerHTML = data.point10.Date;
        gameData.innerHTML = data.point10.Games;
        top4Data.innerHTML = data.point10.Wins;
    }
    function output11(data){
        dateData.innerHTML = data.point11.Date;
        gameData.innerHTML = data.point11.Games;
        top4Data.innerHTML = data.point11.Wins;
    }
    function output12(data){
        dateData.innerHTML = data.point12.Date;
        gameData.innerHTML = data.point12.Games;
        top4Data.innerHTML = data.point12.Wins;
    }
    function output13(data){
        dateData.innerHTML = data.point13.Date;
        gameData.innerHTML = data.point13.Games;
        top4Data.innerHTML = data.point13.Wins;
    }
    function output14(data){
        dateData.innerHTML = data.point14.Date;
        gameData.innerHTML = data.point14.Games;
        top4Data.innerHTML = data.point14.Wins;
    }
    function defaultData(){
        dateData.innerHTML = '?';
        gameData.innerHTML = '?';
        top4Data.innerHTML = '?';
    }




    circle1.addEventListener('mouseover', function(){
        output1(globalData);
    });
    circle1.addEventListener('mouseout', function(){
        defaultData();
    });

    circle2.addEventListener('mouseover', function(){
        output2(globalData);
    });
    circle2.addEventListener('mouseout', function(){
        defaultData();
    });

    circle3.addEventListener('mouseover', function(){
        output3(globalData);
    });
    circle3.addEventListener('mouseout', function(){
        defaultData();
    });

    circle4.addEventListener('mouseover', function(){
        output4(globalData);
    });
    circle4.addEventListener('mouseout', function(){
        defaultData();
    });

    circle5.addEventListener('mouseover', function(){
        output5(globalData);
    });
    circle5.addEventListener('mouseout', function(){
        defaultData();
    });

    circle6.addEventListener('mouseover', function(){
        output6(globalData);
    });
    circle6.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle7.addEventListener('mouseover', function(){
        output7(globalData);
    });
    circle7.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle8.addEventListener('mouseover', function(){
        output8(globalData);
    });
    circle8.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle9.addEventListener('mouseover', function(){
        output9(globalData);
    });
    circle9.addEventListener('mouseout', function(){
        defaultData();
    });

    circle10.addEventListener('mouseover', function(){
        output10(globalData);
    });
    circle10.addEventListener('mouseout', function(){
        defaultData();
    });

    circle11.addEventListener('mouseover', function(){
        output11(globalData);
    });
    circle11.addEventListener('mouseout', function(){
        defaultData();
    });

    circle12.addEventListener('mouseover', function(){
        output12(globalData);
    });
    circle12.addEventListener('mouseout', function(){
        defaultData();
    });

    circle13.addEventListener('mouseover', function(){
        output13(globalData);
    });
    circle13.addEventListener('mouseout', function(){
        defaultData();
    });

    circle14.addEventListener('mouseover', function(){
        output14(globalData);
    });
    circle14.addEventListener('mouseout', function(){
        defaultData();
    });

})();