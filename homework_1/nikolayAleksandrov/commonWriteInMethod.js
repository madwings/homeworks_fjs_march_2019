'use strict';

function printResults(anyThing) {
    document.getElementById('resultValue').innerHTML = anyThing;
}

function isNumber(num) {
    if (isNaN(num)) {

        return false;

    }
    return true;
}

function isContainLetter(num) {

    if (/[a-zA-Z]/.test(num)) {
        return true;
    }
    return false;
}

function getNumber(id) {

    const numb = document.getElementById(id).value;

    if (isNumber(numb)) {

        return numb;
    }
    return 0;
}

function checkArrayLengh(firstRangeNum, secRangeNumn, array) {

    if (firstRangeNum <= array.length && array.length <= secRangeNumn) {
        return true;
    }
    alert(array.length + " is  longer bwn  " + firstRangeNum + "-" + secRangeNumn + " at " + array);

}

function checkNumberRange(firstRangeNum, secRangeNumn, num) {

    if (firstRangeNum <= num && num <= secRangeNumn) {
        return true;
    }
    alert(num + " is not bwn  " + firstRangeNum + "-" + secRangeNumn);
    return false;

}

function getArray(id, spritValue) {

    let array = document.getElementById(id).value;
    return array.split(spritValue);
}

function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}