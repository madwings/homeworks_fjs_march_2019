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

function getArray(id, spritValue) {

    let array =(document.getElementById(id).value);
    return array.split(spritValue);
}