'use strict';

function compareTriplets() {

    let firstCompared = [0, 0, 0];
    let secondCompared = [0, 0, 0];
    let results = [0, 0];

    firstCompared = getArray('firtNum');
    secondCompared = getArray('secondNum');

    results = [results[0] + (compareTwoNumber(firstCompared[0], secondCompared[0]))[0], results[1] + (compareTwoNumber(firstCompared[0], secondCompared[0]))[1]];
    results = [results[0] + (compareTwoNumber(firstCompared[1], secondCompared[1]))[0], results[1] + (compareTwoNumber(firstCompared[1], secondCompared[1]))[1]];
    results = [results[0] + (compareTwoNumber(firstCompared[2], secondCompared[2]))[0], results[1] + (compareTwoNumber(firstCompared[2], secondCompared[2]))[1]];

    printResults(results);
}

function getArray(id) {

    let num = document.getElementById(id).value;
    let array1 = num.split(",");

    if (array1.length < 3) {
        alert("please add array with 3 number example: 13,15,17.Current one is  " + array1)
    } else if (array1.length > 3) {
        alert("please add array with 3 number example: 13,15,17.Current one is  " + array1)
    } else {

        return checkArrayNumbers(1, 100, array1);

    }
}


function compareTwoNumber(first, second) {
    let countFirst = 0;
    let countSec = 0;

    if (first > second) {
        countFirst++;
    } else if (first < second) {
        countSec++;
    } else {
        return [0, 0];
    }

    return [countFirst, countSec];
}

function checkArrayNumbers(firstRangeNum, secRangeNumn, array) {
    let curNum;
    let curr1 = [0, 0, 0];

    for (let key in array) {
        curNum = 0;
        curNum = + array[key];
        if (isNaN(curNum)) {
            alert(array[key] + " is not a number at " + array)
            return;
        }
        if (firstRangeNum <= curNum && curNum <= secRangeNumn) {
            curr1[key] = curNum;
        } else {
            alert(curNum + " is not a number bwn  " + firstRangeNum + "-" + secRangeNumn + " at " + array);
        }
    }

    return curr1;
}