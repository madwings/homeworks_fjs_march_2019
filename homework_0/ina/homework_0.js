'use strict';

function isNumber(num) {
    if (typeof(num) === 'number') {
        return true;
    }
    const message = `${num} is not a number!`;
    console.log(message);
    return false;
}

function isBetween(num1, num2, num3) {
    if (((num3 > num1) && (num3 < num2)) || ((num3 < num1) && (num3 > num2))) {
        const message = `${num3} is between ${num1} and ${num2}`;
        console.log(message);
    } else {
        const message = `${num3} is not between ${num1} and ${num2}`;
        console.log(message);
    }
}

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
    const num1 = prompt('Please input A', 'Some number');
    const num2 = prompt('Please input B', 'Some number');

    const a = parseInt(num1, 0);
    const b = parseInt(num2, 0);

    const sumResult = `Sum = ${a + b}`;
    const subResult = `Substr = ${a - b}`;
    const mulResult = `Multiplication = ${a * b}`;
    const divResult = `Division = ${a / b}`;

    console.log(sumResult, subResult, mulResult, divResult);
}
