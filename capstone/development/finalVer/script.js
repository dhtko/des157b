(function(){
    'use strict';

    console.log('loaded');

    let globalData;

    const introHeader = document.querySelector('header');
    const bags = document.querySelectorAll('.garbageBag');
    const centerText = document.querySelector('#centerText');
    let counter = 0;
    const headToMain = document.querySelector('#headToMain');
    const insturction = document.querySelector('#headInstruction');

    let currentSection = -1;
    const sections = document.querySelectorAll('section');
    const section0 = document.querySelector('#elaboration');
    const section1 = document.querySelector('#impactPoint');
    const section2 = document.querySelector('#transition');
    const section3 = document.querySelector('#productInfo');
    const section4 = document.querySelector('#productImpact');
    const section5 = document.querySelector('#speculativeWorld');
    const section6 = document.querySelector('#ending');

    const ctx = document.querySelector('#myChart');
    const selectCountry = document.querySelector('#selectCountry');

    const speed = 200;
    const counters = document.querySelectorAll('.points');

    new Textify({}, gsap);

    const scannerCircle = document.querySelector('#scanner');
    const displayCircle = document.querySelector('#display');
    const dispenseExitCircle = document.querySelector('#dispenseExit');
    const garbageDoorCircle = document.querySelector('#garbageDoor');
    const scannerDetailInfo = document.querySelector('#scannerDetail');
    const displayDetailInfo = document.querySelector('#displayDetail');
    const dispenseExitDetailInfo = document.querySelector('#dispenseExitDetail');
    const garbageDoorDetailInfo = document.querySelector('#garbageDoorDetail');

    const doughnut1 = document.querySelector('#doughnut1');
    const doughnut2 = document.querySelector('#doughnut2');
    const doughnut3 = document.querySelector('#doughnut3');
    let yearRaw = document.querySelector('#year');

    const slideshowBefore = document.querySelector('#before');
    const slideshowAfter = document.querySelector('#after');
    const slideshowImage = document.querySelector('#slideshow');
    const caption = document.querySelector('#caption');
    let slideshowChecker = 0;
    const slideImages = ['narrativePic1.png', 'narrativePic2.png', 'narrativePic3.png', 'narrativePic4.png'];
    const slideImg = document.querySelector('#slideshowImg');
    let captionText = document.querySelector('#captionText');




    //introHeader
    //disableScroll();
    introHeader.addEventListener('click', function(){
        const bagGroup = bags.length;

        disableScroll();
        centerText.className = 'hidden';

        if (counter < bagGroup){
            document.querySelector(`#bag${counter+1}`).className = 'garbageBag showing';
            counter++;
        }
        else{
            centerText.innerHTML = 'THIS IS Our Future';
            centerText.style.color = 'white';
            centerText.style.fontSize = '75px';
            centerText.style.textShadow = '2px 2px 4px rgba(0,0,0,0.44);';
            centerText.className = 'showing';
            headToMain.className = 'showing';
            insturction.className = 'showing';
            enableScroll();
        }
    });
    function disableScroll(){
        document.body.classList.add('noScroll');
    }
    function enableScroll(){
        document.body.classList.remove('noScroll');
    }


    //scrollbySection
    window.addEventListener('keydown', (event) => {
        if (event.code === 'ArrowDown'){
            event.preventDefault();
            
            currentSection++;
            console.log(currentSection);
            
            if (currentSection > sections.length){
                currentSection = sections.length - 1;
            }

            switch (currentSection){
                case 0:
                    section0.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 1:
                    section1.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 2:
                    section2.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 3:
                    section3.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 4:
                    section4.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 5:
                    section5.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 6:
                    section6.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
            }

            
            
        }
        else if (event.code === 'ArrowUp'){
            event.preventDefault();
            
            currentSection--;
            console.log(currentSection);
            
            switch (currentSection){
                case 0:
                    section0.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 1:
                    section1.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 2:
                    section2.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 3:
                    section3.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 4:
                    section4.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 5:
                    section5.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
                case 6:
                    section6.scrollIntoView( {behavior: 'smooth'} );
                    numCounter(currentSection);
                    break;
            }

            if (currentSection < 0){
                currentSection = 0;
            }
        }
    });


    //recyclability+wasteProduction    
    let theWasteData = {
        type: 'line',
        data: {
            labels: ['2009', '2011', '2013', '2015', '2017', '2019', '2021'],
            datasets: [
                {
                    label: 'Total Waste Produced (Mt)',
                    data: [243.0, 250.4, 254.1, 262.1, 267.8, 292.4, 292.4],
                    fill: false,
                    borderColor: 'rgb(75, 192, 192)',
                    tension: 0.1
                },
                {
                    label: 'Recycling Rate (%)',
                    data: [33.8, 34.7, 34.3, 34.7, 35.2, 32.1, 32.1],
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
            for (let j = 0; j < americaWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = americaWasteData[j];
                lineGraph.data.datasets[1].data[j] = americaRecycleData[j];
            }
        }

        else if (name == 'CN'){
            const chinaWasteData = globalData.china.wasteMass;
            const chinaRecycleData = globalData.china.recycleability;
            for (let j = 0; j < chinaWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = chinaWasteData[j];
                lineGraph.data.datasets[1].data[j] = chinaRecycleData[j];
            }
        }

        else if (name == 'RU'){
            const russiaWasteData = globalData.russia.wasteMass;
            const russiaRecycleData = globalData.russia.recycleability;
            for (let j = 0; j < russiaWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = russiaWasteData[j];
                lineGraph.data.datasets[1].data[j] = russiaRecycleData[j];
            }
        }

        else if (name == 'DE'){
            const germanyWasteData = globalData.germany.wasteMass;
            const germanyRecycleData = globalData.germany.recycleability;
            for (let j = 0; j < germanyWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = germanyWasteData[j];
                lineGraph.data.datasets[1].data[j] = germanyRecycleData[j];
            }
        }

        else if (name == 'FR'){
            const franceWasteData = globalData.france.wasteMass;
            const franceRecycleData = globalData.france.recycleability;
            for (let j = 0; j < franceWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = franceWasteData[j];
                lineGraph.data.datasets[1].data[j] = franceRecycleData[j];
            }
        }

        else if (name == 'CA'){
            const canadaWasteData = globalData.canada.wasteMass;
            const canadaRecycleData = globalData.canada.recycleability;
            for (let j = 0; j < canadaWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = canadaWasteData[j];
                lineGraph.data.datasets[1].data[j] = canadaRecycleData[j];
            }
        }

        else if (name == 'JP'){
            const japanWasteData = globalData.japan.wasteMass;
            const japanRecycleData = globalData.japan.recycleability;
            for (let j = 0; j < japanWasteData.length; j++){
                lineGraph.data.datasets[0].data[j] = japanWasteData[j];
                lineGraph.data.datasets[1].data[j] = japanRecycleData[j];
            }
        }
    }


    //largeImpactNumber
    function numCounter(currentSection){
        
        if (currentSection === 1){
            counters.forEach( counter => {
                const animate = () => {
                    const value =+ counter.getAttribute('akhi');
                    const data =+ counter.innerText;
        
                    const time = value / speed;
                    if(data < value) {
                        counter.innerText = Math.ceil(data + time);
                        setTimeout(animate, 1);
                    }
                    else{
                        counter.innerText = value;
                    }
                }
            
                animate();
            });
        }

        else{
            counters.forEach(counter => {
                counter.innerHTML = 0;
            });
        }
    }


    //transition
    new Textify({
        el: "[data-test2]",
        animation: {
            stagger: 0.025,
            duration: 0.7,
            delay: 2.0,
            ease: 'expo.inOut',
            animateProps: {
                "opacity": 0,
                "scale": 0
            }
        }
    }, gsap);
   
 
    //productInformation
    scannerCircle.addEventListener('click', function(){
        scannerDetailInfo.className = 'detailInfo showing'
    });
    scannerDetailInfo.addEventListener('click', function(){
        scannerDetailInfo.className = 'detailInfo hidden';
    });
    scannerCircle.addEventListener('mouseover', function(){
        scannerCircle.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    scannerCircle.addEventListener('mouseout', function(){
        scannerCircle.style.backgroundColor = 'rgb(236, 236, 236)';
    });

    displayCircle.addEventListener('click', function(){
        displayDetailInfo.className = 'detailInfo showing';
    });
    displayDetailInfo.addEventListener('click', function(){
        displayDetailInfo.className = 'detailInfo hidden';
    });
    displayCircle.addEventListener('mouseover', function(){
        displayCircle.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    displayCircle.addEventListener('mouseout', function(){
        displayCircle.style.backgroundColor = 'rgb(236, 236, 236)';
    });

    dispenseExitCircle.addEventListener('click', function(){
        dispenseExitDetailInfo.className = 'detailInfo showing';
    });
    dispenseExitDetailInfo.addEventListener('click', function(){
        dispenseExitDetailInfo.className = 'detailInfo hidden';
    });
    dispenseExitCircle.addEventListener('mouseover', function(){
        dispenseExitCircle.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    dispenseExitCircle.addEventListener('mouseout', function(){
        dispenseExitCircle.style.backgroundColor = 'rgb(236, 236, 236)';
    });

    garbageDoorCircle.addEventListener('click', function(){
        garbageDoorDetailInfo.className = 'detailInfo showing';
    });
    garbageDoorDetailInfo.addEventListener('click', function(){
        garbageDoorDetailInfo.className = 'detailInfo hidden';
    });
    garbageDoorCircle.addEventListener('mouseover', function(){
        garbageDoorCircle.style.backgroundColor = 'rgb(128, 128, 128)';
    });
    garbageDoorCircle.addEventListener('mouseout', function(){
        garbageDoorCircle.style.backgroundColor = 'rgb(236, 236, 236)';
    });

    
    //productImpact
    let firstDoughtData = {
        type: 'doughnut',
        data: {
            labels: ['Printed Food Adoption (%)', 'Traditional Farming Products (%)', 'Industrial Processed Foods (%)'],
            datasets: [
                {
                    label: 'Food Source Composition',
                    data: [5, 30, 30],
                    backgroundColor: [
                        'rgb(236, 64, 122)',
                        'rgb(120, 144, 156)',
                        'rgb(64, 64, 64)'
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
            labels: ['Waste Recycled into Food (%)', 'Landfilled Waste (%)', 'Incinerated Waste (%)'],
            datasets: [
                {
                    label: 'Waste Stream Composition',
                    data: [5, 30, 65],
                    backgroundColor: [
                        'rgb(255, 179, 0)',
                        'rgb(149, 147, 146)',
                        'rgb(21, 21, 21)'
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
            labels: ['Land Returned to Nature (%)', 'Land Used for Agriculture (%)', 'Land Used for Landfills (%)'],
            datasets: [
                {
                    label: 'Land Use Distribution',
                    data: [0, 30, 70],
                    backgroundColor: [
                        'rgb(104, 159, 56)',
                        'rgb(87, 53, 24)',
                        'rgb(48, 55, 59)'
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

        firstDoughnut.data.datasets[0].data[0] = 5 + (theDiff * 1.5);
        firstDoughnut.data.datasets[0].data[1] = 35 - (theDiff * 0.2);
        firstDoughnut.data.datasets[0].data[2] = 60 - (theDiff * 1.05);

        secondDoughnut.data.datasets[0].data[0] = 5 + (theDiff * 1.5);
        secondDoughnut.data.datasets[0].data[1] = 30 - (theDiff * 0.75);
        secondDoughnut.data.datasets[0].data[2] = 60 - (theDiff * 1.1);

        thirdDoughnut.data.datasets[0].data[0] = 0 + (theDiff * 1.4);
        thirdDoughnut.data.datasets[0].data[1] = 30 - (theDiff * 0.5);
        thirdDoughnut.data.datasets[0].data[2] = 70 - (theDiff * 0.9);
    }


    //narrativeSpeculativeWorld
    slideshowBefore.addEventListener('click', function(){
        slideshowChecker--;
        if (slideshowChecker < 0){
            slideshowChecker = slideImages.length - 1;
        }

        slideImg.src = `images/${slideImages[slideshowChecker]}`;

    });
    slideshowBefore.addEventListener('mouseover', function(){
        slideshowBefore.style.borderColor = 'transparent rgba(0, 255, 234, 0.97) transparent transparent';
    });
    slideshowBefore.addEventListener('mouseout', function(){
        slideshowBefore.style.borderColor = 'transparent #434343a1 transparent transparent';
    });

    slideshowAfter.addEventListener('click', function(){
        slideshowChecker++;
        if (slideshowChecker > slideImages.length - 1){
            slideshowChecker = 0;
        }

        slideImg.src = `images/${slideImages[slideshowChecker]}`;
    });
    slideshowAfter.addEventListener('mouseover', function(){
        slideshowAfter.style.borderColor = 'transparent transparent transparent rgba(0, 255, 234, 0.97)';
    });
    slideshowAfter.addEventListener('mouseout', function(){
        slideshowAfter.style.borderColor = 'transparent transparent transparent #434343a1';
    });

    slideshowImage.addEventListener('mouseover', function(){
        caption.className = 'showing';

        switch (slideshowChecker){
            case 0:
                captionText.innerHTML = 'Detailed sketch of the food packet produced by FlavorNeutral5000. The back of the container has a straw, and the inside is a gray liquid with nutrient capsules that are catered to individuals.'
                break;
            case 1:
                captionText.innerHTML = 'Detailed sketch of a citizen consuming the packet. Note how the one uses the straw to drink the liquid. Also, observe the facial expression: depressed and gloomy.'
                break;
            case 2:
                captionText.innerHTML = 'Detailed sketch of the world where FlavorNetural5000 becomes popular. The key characteristic of this sketch is the grey tone because the constant consumption from the food packet induced various mental distresss like depression and lethargy.'
                break;
            case 3:
                captionText.innerHTML = 'Detailed sketch of a possible crime scene. This particular sketch depicted how the people are eagered to steal the garbage from a person in order to acquire the food from flavorNeutral5000. The white eyes compared to the dark enviroment captures their will to steal the garbage bag for their survival.'
                break;
        }
    });
    slideshowImage.addEventListener('mouseout', function(){
        caption.className = 'hidden';
        console.log('something is out');
    });


    //ending
    new Textify({
        el: "[data-test]",
        animation: {
            stagger: 0.025,
            duration: 0.7,
            delay: 2.0,
            ease: 'expo.inOut',
            animateProps: {
                "opacity": 0,
                "scale": 0
            }
        }
    }, gsap);


})();