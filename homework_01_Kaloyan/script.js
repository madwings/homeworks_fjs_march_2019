// Task One
function taskOne() {

    // Get the user input values
    let calcA = document.getElementsByClassName('input-task-1')[0].value;
    let calcB = document.getElementsByClassName('input-task-1')[1].value;
    let calcC = document.getElementsByClassName('input-task-1')[2].value;

    // Convert String to Number
    let a = Number(calcA);
    let b = Number(calcB);
    let c = Number(calcC);

    // Print Results
    if ( c > a && c < b || c < a && c > b ) {
        let resultOne = document.getElementById('results-one').innerHTML = 'Числото ' + c + ' е между ' + a + ' и ' + b;
        console.log(resultOne);
        return true;
    } else if ( a == b && a == c && b == c ) {
        let resultOneEqual = document.getElementById('results-one').innerHTML = 'Числата са равни';
        console.log(resultOneEqual);
    } else {
        let resultOneFail = document.getElementById('results-one').innerHTML = 'Числото ' + c + ' не е между ' + a + ' и ' + b;
        console.log(resultOneFail);
    }

};

// Task Two
function taskTwo() {

    // Get the user input values
    let numA = document.getElementsByClassName('input-task-2')[0].value;
    let numB = document.getElementsByClassName('input-task-2')[1].value;

    // Convert String to Number and do the Math
    let addResult = Number(numA) + Number(numB);
    let subResult = Number(numA) - Number(numB);
    let multiResult = Number(numA) * Number(numB);
    let modResult = Number(numA) % Number(numB);

    // Print Results
    let doTheMath = document.getElementById('results-two').innerHTML = 'Сборът е ' + Math.round(addResult) + 
    '<br>' + 'Разликата е ' + Math.round(subResult) + '<br>' + 'Произведението е ' + Math.round(multiResult) + 
    '<br>' + 'Остатък от деление е ' + Math.round(modResult);

    console.log('Сборът е ' + Math.round(addResult) + ' Разликата е ' + Math.round(addResult) + 
    ' Произведението е ' + Math.round(multiResult) + ' Остатък от деление е ' + Math.round(modResult));

};

// Task Three
function taskThree() {

    // Get the user input values
    let toSwapA = document.getElementsByClassName('input-task-3')[0].value;
    let toSwapB = document.getElementsByClassName('input-task-3')[1].value;

    // Swap values
    let swapAB = [toSwapA, toSwapB] = [toSwapB, toSwapA];

    // Print result
    document.getElementById('results-three').innerHTML = 'Числото А е: ' + swapAB[0] + '<br>' + ' Числото В е: ' + swapAB[1];
    console.log('Числото А е: ' + swapAB[0] + ' Числото В е: ' + swapAB[1]);

};

// Task Four
function taskFour() {

    // Get the user input values
    let sortA = document.getElementsByClassName('input-task-4')[0].value;
    let sortB = document.getElementsByClassName('input-task-4')[1].value;

    // Sort values
    if ( sortA > sortB ) {
        document.getElementById('results-four').innerHTML = 'Нарастващ ред: ' + sortA + ', ' + sortB;
        console.log(sortA, sortB);
    } else if ( sortB > sortA ) {
        document.getElementById('results-four').innerHTML = 'Нарастващ ред: ' + sortB + ', ' + sortA;
        console.log(sortB, sortA)
    } else {
        document.getElementById('results-four').innerHTML = 'Числата са равни!';
        console.log('Числото ' + sortA + ' е равно на числото ' + sortB)
    }

};

// Task Five
function taskFive() {

    // Get the user input values
    let descA = document.getElementsByClassName('input-task-5')[0].value;
    let descB = document.getElementsByClassName('input-task-5')[1].value;
    let descC = document.getElementsByClassName('input-task-5')[2].value;

    // Convert String to Number
    let xA = Number(descA);
    let yB = Number(descB);
    let zC = Number(descC);

    // Sort Values in Descending Order
    if ( xA > yB && xA > zC && yB > zC ) {
        // A B C
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + xA + ', ' + yB + ', ' + zC;
        console.log(xA, yB, zC);
    } else if ( xA > yB && yB < zC && xA > zC  ) {
        // A C B
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + xA + ', ' + zC + ', ' + yB;
        console.log(xA, zC, yB); 
    } else if ( yB > xA && yB > zC && xA > zC ) {
        // B A C
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + yB + ', ' + xA + ', ' + zC;
        console.log(yB, xA, zC); 
    } else if ( yB > xA && yB > zC && xA < zC ) {
        // B C A
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + yB + ', ' + zC + ', ' + xA;
        console.log(yB, zC, xA); 
    } else if ( zC > xA && zC > yB && xA > yB ) {
        // C A B
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + zC + ', ' + xA + ', ' + yB;
        console.log(zC, xA, yB); 
    } else if ( zC > yB && zC > xA && yB > xA ) {
        // C B A
        document.getElementById('results-five').innerHTML = 'Низходящ ред: ' + zC + ', ' + yB + ', ' + xA;
        console.log(zC, yB, xA);
    } else {
        document.getElementById('results-five').innerHTML = 'Грешка!';
        console.log(false);
    }

};

// Task Six
function taskSix() {

    // Get the user input values
    let takeA = document.getElementsByClassName('input-task-6')[0].value;
    let takeB = document.getElementsByClassName('input-task-6')[1].value;
    let takeC = document.getElementsByClassName('input-task-6')[2].value;

    // Change values
    let chA = takeB;
    let chB = takeC;
    let chC = takeA;
    // Create an Array
    let combineValues = [chA, chB, chC]

    document.getElementById('results-six').innerHTML = 'A -> ' + combineValues[0] + '<br>' + ' B -> ' + combineValues[1] + '<br>' + ' C -> ' + combineValues[2];
    console.log('A -> ' + combineValues[0] + ' B -> ' + combineValues[1] + ' C -> ' + combineValues[2]);

};

// Task Seven
function taskSeven() {

    // Get the user input values
    let time = parseInt(document.getElementsByClassName('input-task-7')[0].value);
    let money = parseFloat(document.getElementsByClassName('input-task-7')[1].value);

    // Select Health
    let health = document.getElementById("checkbox-health");

    if ( health.checked == true && money >= 10 && time > 10 && time <= 19 ) {
        document.getElementById('results-seven').innerHTML = 'Зле ми е, с ' + money + 'лв' + ' ще отида да си купя лекарства. Аптеката е отворена в ' + time + ' часа!';
    } else if ( health.checked == true && money >= 10 && time <= 10 || health.checked == true && money >= 10 && time > 19 ) {
        document.getElementById('results-seven').innerHTML = 'Зле ми е, но аптеката е затворена в ' + time + ' часа!';
    } else if ( health.checked == true && money <=10 ) {
        document.getElementById('results-seven').innerHTML = 'Зле ми е, но с ' + money + 'лв, не мога да си купя лекарства!' + ' Ще пия чай :)';
    } else if ( time > 7 && money <= 10 ) {
        document.getElementById('results-seven').innerHTML = 'Не съм болен, но имам пари само за кафе ;(';
    } else if ( money > 10 ) {
        document.getElementById('results-seven').innerHTML = 'Часът е ' + time + '. Имам ' + money + 'лв, ще отида да се забавлявам, докато не съм се разболял!'
    } else {
        console.log('End Of program');
    }

};
