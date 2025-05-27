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
    let counter = 0;

    const ctx = document.querySelector('#myChart');
    const selectCountry = document.querySelector('#selectCountry');

    const doughnut1 = document.querySelector('#doughnut1');
    const doughnut2 = document.querySelector('#doughnut2');
    const doughnut3 = document.querySelector('#doughnut3');


    //introHeader
    introHeader.addEventListener('click', function(){
        console.log(counter);
        const bagGroup = bags.length;

        if (counter < bagGroup){
            document.querySelector(`#bag${counter+1}`).className = 'garbageBag showing';
            counter++;
        }
        else{
            centerText.className = 'showing';
        }
    });


    //recyclability+wasteProduction
    new Chart(ctx, {
        type: 'line',
        data: {
            labels: ['January', 'Feburary', 'March', 'April', 'May', 'June', 'July'],
            datasets: [
                {
                    label: 'My First Dataset',
                    data: [65, 59, 80, 81, 56, 55, 40],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'My Second Dataset',
                    data: [23, 13, 66, 46, 55, 65, 80],
                    fill: false,
                    borderColor: 'rgb(248, 202, 19)',
                    tension: 0.1
                }
            ]
        },
        options: {
            scales: {
                y: {
                beginAtZero: true
            }
        }
        }
    });


    selectCountry.addEventListener('click', function(){
        let selectElement = document.querySelector('#countries');
        let output = selectElement.options[selectElement.selectedIndex].value;
        console.log(output);

        for (let i = 0; i < document.querySelector('#countries').length; i++){
            if (output == document.querySelector('#countries')[i].value){
                console.log(`Internal match: ${output} = ${document.querySelector('#countries')[i].value}`);
            }
        }
    });
   
    //productInformation
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


    //productImpact
    new Chart(doughnut1, {
        type: 'doughnut',
        data: {
            labels: ['red', 'orange', 'yellow'],
            datasets: [
                {
                    label: 'First doughnut Chart',
                    data: [300, 50, 100],
                    backgroundColor: [
                        'rgb(251, 44, 0)',
                        'rgb(251, 122, 0)',
                        'rgb(251, 210, 0)'
                    ],
                    hoverOffset: 4
                }
            ]

        }
    });

    new Chart(doughnut2, {
        type: 'doughnut',
        data: {
            labels: ['green', 'purple', 'orange', 'skyblue'],
            datasets: [
                {
                    label: 'Second doughnut Chart',
                    data: [300, 50, 100, 15],
                    backgroundColor: [
                        'rgb(0, 193, 50)',
                        'rgb(128, 0, 193)',
                        'rgb(251, 122, 0)',
                        'rgb(73, 251, 239)'
                    ],
                    hoverOffset: 4
                }
            ]

        }
    });

    new Chart(doughnut3, {
        type: 'doughnut',
        data: {
            labels: ['yellow', 'blue'],
            datasets: [
                {
                    label: 'Third doughnut Chart',
                    data: [300, 500],
                    backgroundColor: [
                        'rgb(251, 210, 0)',
                        'rgb(79, 73, 251)'
                    ],
                    hoverOffset: 4
                }
            ]

        }
    });


    //narrativeSpeculativeWorld
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
})();