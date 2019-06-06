'use strict';

function printResults(anyThing) {
    document.getElementById('resultValue').innerHTML = anyThing;
}

function isNumeric(num) {
    if (isNaN(+num == num)) {
        
        return false;
    }
    return true;
}

function areAllNumeric(array) {
    let areNumeric = true;
    for (let i = 0; i < array.length; i++) {
        if (isNumeric(array[i])) {
            continue;
        }
        areNumeric = false;
        break;
    }
    return areNumeric;
}


function isContainLetter(sequenceForCHeck) {

    if (/[a-zA-Z]/.test(sequenceForCHeck)) {
        return true;
    }
    return false;
}

function getNumber(id) {

    let numb = document.getElementById(id).value;

    if (isNumeric(numb)) {

        return numb = +numb;
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

    let array = getString(id);
    return array.split(spritValue);
}

function getString(id) {

    let sampleString = (document.getElementById(id).value);
    sampleString = sampleString.trim().replace(" ", "");
    sampleString = replacecSpace(sampleString);
    return sampleString;
}

function replacecSpace(stringValue) {
    let returnString = "";
    for (let i = 0; i < stringValue.length; i++) {
        if (stringValue[i].localeCompare(" ") != 0) {
            returnString = returnString + stringValue[i];
        }
    }
    return returnString;
}


function pow(x, n) {
    var result = x;

    for (var i = 1; i < n; i++) {
        result *= x;
    }

    return result;
}

function sortedArray(array) {
    return array.sort(function (b, a) { return b - a });
}


