(function(){
    'use strict';

    console.log('loaded');

    let globalData;

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
    let yearRaw = document.querySelector('#year');



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
    let theWasteData = {
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
    }
    let lineGraph = new Chart(ctx, theWasteData);
    //console.log(lineGraph.data.datasets[0].data[0]);

    async function getData(){
        const totalData = await fetch('./data.json');
        const data = await totalData.json();
        //console.log(data);

        globalData = data;
    }
    getData();

    selectCountry.addEventListener('click', function(){
        let selectElement = document.querySelector('#countries');
        let output = selectElement.options[selectElement.selectedIndex].value;
        //console.log(output);

        for (let i = 0; i < document.querySelector('#countries').length; i++){
            if (output == document.querySelector('#countries')[i].value){
                //console.log(`Internal match: ${output} = ${document.querySelector('#countries')[i].value}`);
                updateValue(output);
            }
        }

        lineGraph.update();
    });
    function updateValue(name){
        if (name == 'US'){
            const americaWasteData = globalData.america.wasteMass;
            const americaRecycleData = globalData.america.recycleability;
            for (let j = 0; j < test1.length; j++){
                lineGraph.data.datasets[0].data[j] = americaWasteData[j];
                lineGraph.data.datasets[1].data[j] = americaRecycleData[j];
            }
        }

        else if (name == 'CN'){
            const chinaWasteData = globalData.china.wasteMass;
            const chinaRecycleData = globalData.china.recycleability;
            for (let j = 0; j < test2.length; j++){
                lineGraph.data.datasets[0].data[j] = chinaWasteData[j];
                lineGraph.data.datasets[1].data[j] = chinaRecycleData[j];
            }
        }

        else if (name == 'RU'){
            const russiaWasteData = globalData.russia.wasteMass;
            const russiaRecycleData = globalData.russia.recycleability;
            for (let j = 0; j < test3.length; j++){
                lineGraph.data.datasets[0].data[j] = russiaWasteData[j];
                lineGraph.data.datasets[1].data[j] = russiaRecycleData[j];
            }
        }
    }
   

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
    let firstDoughtData = {
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
    };
    let firstDoughnut = new Chart(doughnut1, firstDoughtData);

    let secondDoughnutData = {
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
    }
    let secondDoughnut = new Chart(doughnut2, secondDoughnutData);

    let thirdDoughnutData = {
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
    }
    let thirdDoughnut = new Chart(doughnut3, thirdDoughnutData);
    
    document.addEventListener('DOMContentLoaded', function(){
        const yearInput = document.querySelector('#year');

        yearInput.addEventListener('input', function(event){
            const valueDisplay = document.querySelector('#currentValue');
            let currentYear = event.target.value;
            
            valueDisplay.textContent = currentYear;

            updateDoughnut(currentYear);

            firstDoughnut.update();
            secondDoughnut.update();
            thirdDoughnut.update();
        });
    });
    function updateDoughnut(theYear){
        let theDiff = theYear - yearRaw.min;
        console.log(theDiff);

        firstDoughnut.data.datasets[0].data[0] = 300 - (theDiff * 5);
        firstDoughnut.data.datasets[0].data[1] = 50 + (theDiff * 5);
        firstDoughnut.data.datasets[0].data[2] = 100 + (theDiff * 10);

        secondDoughnut.data.datasets[0].data[0] = 300 - (theDiff * 5);
        secondDoughnut.data.datasets[0].data[1] = 50 + (theDiff * 10);
        secondDoughnut.data.datasets[0].data[2] = 100 + (theDiff * 5);
        secondDoughnut.data.datasets[0].data[3] = 15 + (theDiff * 20);

        thirdDoughnut.data.datasets[0].data[0] = 300 + (theDiff * 5);
        firstDoughnut.data.datasets[0].data[1] = 500 - (theDiff * 10);
    }



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