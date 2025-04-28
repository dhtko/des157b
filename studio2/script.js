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

    const outBar1 = document.querySelector('#outBar1');
    const outBar2 = document.querySelector('#outBar2');
    const outBar3 = document.querySelector('#outBar3');
    const outBar4 = document.querySelector('#outBar4');
    const outBar5 = document.querySelector('#outBar5');
    const outBar6 = document.querySelector('#outBar6');
    const outBar7 = document.querySelector('#outBar7');
    const outBar8 = document.querySelector('#outBar8');
    const outBar9 = document.querySelector('#outBar9');
    const outBar10 = document.querySelector('#outBar10');
    const outBar11 = document.querySelector('#outBar11');
    const outBar12 = document.querySelector('#outBar12');
    const outBar13 = document.querySelector('#outBar13');
    const outBar14 = document.querySelector('#outBar14');
    
    const inBar1 = document.querySelector('#inBar1');
    const inBar2 = document.querySelector('#inBar2');
    const inBar3 = document.querySelector('#inBar3');
    const inBar4 = document.querySelector('#inBar4');
    const inBar5 = document.querySelector('#inBar5');
    const inBar6 = document.querySelector('#inBar6');
    const inBar7 = document.querySelector('#inBar7');
    const inBar8 = document.querySelector('#inBar8');
    const inBar9 = document.querySelector('#inBar9');
    const inBar10 = document.querySelector('#inBar10');
    const inBar11 = document.querySelector('#inBar11');
    const inBar12 = document.querySelector('#inBar12');
    const inBar13 = document.querySelector('#inBar13');
    const inBar14 = document.querySelector('#inBar14');

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

        outBar1.style.height = '0px';
        inBar1.style.height = '0px';

        outBar2.style.height = '0px';
        inBar2.style.height = '0px';
        
        outBar3.style.height = '0px';
        inBar3.style.height = '0px';
        
        outBar4.style.height = '0px';
        inBar4.style.height = '0px';

        outBar5.style.height = '0px';
        inBar5.style.height = '0px';

        outBar6.style.height = '0px';
        inBar6.style.height = '0px';

        outBar7.style.height = '0px';
        inBar7.style.height = '0px';

        outBar8.style.height = '0px';
        inBar8.style.height = '0px';

        outBar9.style.height = '0px';
        inBar9.style.height = '0px';

        outBar10.style.height = '0px';
        inBar10.style.height = '0px';

        outBar11.style.height = '0px';
        inBar11.style.height = '0px';

        outBar12.style.height = '0px';
        inBar12.style.height = '0px';

        outBar13.style.height = '0px';
        inBar13.style.height = '0px';

        outBar14.style.height = '0px';
        inBar14.style.height = '0px';
    }




    circle1.addEventListener('mouseover', function(){
        output1(globalData);
        outBar1.style.height = '145px';
        inBar1.style.height = '73px';
    });
    circle1.addEventListener('mouseout', function(){
        defaultData();
    });

    circle2.addEventListener('mouseover', function(){
        output2(globalData);
        outBar2.style.height = '0px';
        inBar2.style.height = '108px';
    });
    circle2.addEventListener('mouseout', function(){
        defaultData();
    });

    circle3.addEventListener('mouseover', function(){
        output3(globalData);
        outBar3.style.height = '84px';
        inBar3.style.height = '48px';
    });
    circle3.addEventListener('mouseout', function(){
        defaultData();
    });

    circle4.addEventListener('mouseover', function(){
        output4(globalData);
        outBar4.style.height = '121px';
        inBar4.style.height = '73px';
    });
    circle4.addEventListener('mouseout', function(){
        defaultData();
    });

    circle5.addEventListener('mouseover', function(){
        output5(globalData);
        outBar5.style.height = '85px';
        inBar5.style.height = '61px';
    });
    circle5.addEventListener('mouseout', function(){
        defaultData();
    });

    circle6.addEventListener('mouseover', function(){
        output6(globalData);
        outBar6.style.height = '73px';
        inBar6.style.height = '48px';
    });
    circle6.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle7.addEventListener('mouseover', function(){
        output7(globalData);
        outBar7.style.height = '109px';
        inBar7.style.height = '73px';
    });
    circle7.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle8.addEventListener('mouseover', function(){
        output8(globalData);
        outBar8.style.height = '97px';
        inBar8.style.height = '133px';
    });
    circle8.addEventListener('mouseout', function(){
        defaultData();
    });
    
    circle9.addEventListener('mouseover', function(){
        output9(globalData);
        outBar9.style.height = '97px';
        inBar9.style.height = '48px';
    });
    circle9.addEventListener('mouseout', function(){
        defaultData();
    });

    circle10.addEventListener('mouseover', function(){
        output10(globalData);
        outBar10.style.height = '121px';
        inBar10.style.height = '36px';
    });
    circle10.addEventListener('mouseout', function(){
        defaultData();
    });

    circle11.addEventListener('mouseover', function(){
        output11(globalData);
        outBar11.style.height = '145px';
        inBar11.style.height = '61px';
    });
    circle11.addEventListener('mouseout', function(){
        defaultData();
    });

    circle12.addEventListener('mouseover', function(){
        output12(globalData);
        outBar12.style.height = '73px';
        inBar12.style.height = '61px';
    });
    circle12.addEventListener('mouseout', function(){
        defaultData();
    });

    circle13.addEventListener('mouseover', function(){
        output13(globalData);
        outBar13.style.height = '145px';
        inBar13.style.height = '73px';
    });
    circle13.addEventListener('mouseout', function(){
        defaultData();
    });

    circle14.addEventListener('mouseover', function(){
        output14(globalData);
        outBar14.style.height = '97px';
        inBar14.style.height = '24px';
    });
    circle14.addEventListener('mouseout', function(){
        defaultData();
    });

})();