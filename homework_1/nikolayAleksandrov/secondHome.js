'use strict';

function countCamelCase() {
    let firstCompared = ['0'];

    firstCompared = getArrayOfChars('firtNum');
    printResults(countForUpperCase(firstCompared));

}

function getArrayOfChars(id) {

    let array = document.getElementById(id).value;

    if (checkArrayLengh(1, 10000, array) === true) {
        return array;
    } else {

        return 0;
    }
}

function checkArrayLengh(firstRangeNum, secRangeNumn, array) {

    if (firstRangeNum <= array.length && array.length <= secRangeNumn) {
        return true;
    } else {
        alert(array.length + " is  longer bwn  " + firstRangeNum + "-" + secRangeNumn + " at " + array);
        return false;
    }
}
function countForUpperCase(arrayChar) {
    let counter = 1;
    let indexNext = 1;
    for (let index = 0; index < arrayChar.length - 2; index++) {
        if ((arrayChar[index] !== ' ') && (isCharUpperCase(arrayChar[index]) && ! (isCharUpperCase(arrayChar[indexNext])))) {

            counter++;
        }
        indexNext++;
    }
    return counter;
}
function isCharUpperCase(singleChar) {

    if (singleChar === singleChar.toUpperCase()) {
        return true;
    }
    return false;
}
