'use strict';

function isNumber(num) {
    if (Number.isNaN(num)) {
        return true;
    } 
    else {
        const message = `${num} is not a number!`;
        console.log(message);
        return false;
    }
}

function isBetween(num1, num2, num3) {
    if (((c > a) && (c < b)) || ((c < a) && (c > b))) {
        const message = `${num3} is between ${num1} and ${num2}`;
    } else {
        const message = `${num3} is not between ${num1} and ${num2}`;
    }
    console.log(message);
}

// First task
function firstTask() {
    const a = prompt('Please input A', 'Some number');
    const b = prompt('Please input B', 'Some number');
    const c = prompt('Please input C', 'Some number');

    console.log(a, b, c);

    if (isNumber(a) && isNumber(b) && isNumber(c)) {
        console.log('All are numbers');
        console.log(isBetween(a, b, c));
    } else {
        console.log('Try again! Some of the inputs are not numbers');
    }
}

// Second task

function secondTask() {
    let num1 = prompt('Please input A', 'Some number');
    let num2 = prompt('Please input B', 'Some number');
    
    let a = parseInt(num1);
    let b = parseInt(num2);

    let sumResult = `Sum = ${a + b}`;
    let subResult = `Substr = ${a - b}`;
    let mulResult = `Multiplication = ${a * b}`;
    let divResult = `Division = ${a % b}`;

    console.log(sumResult, subResult, mulResult, divResult); 
}
