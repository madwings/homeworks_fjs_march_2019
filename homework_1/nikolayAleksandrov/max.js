'use strict';

function print() {


    let array1 = getArray('firstNum', ",");
    let max = array1[0];
    let negativeMax = array1[0];

    negativeMax = +negativeMax;
    max = +max;

    for (let i = 0; i < array1.length; i++) {

        array1[i] = +array1[i];

        if (max <= array1[i] && !isNegative(array1[i]) && isNumber(+array1[i])) {
            max = array1[i];
        } else if (isNegative(array1[i]) && negativeMax <= array1[i] && isNumber(array1[i])) {

            negativeMax = array1[i];
        }

    }

    if (max <= 0) {
        max = negativeMax;
    }

    printResults("Max is " + max)
}

function isNegative(num) {
    if (num <= 0) {
        return true;
    } else if (num > 0) {
        false;
    }
}
