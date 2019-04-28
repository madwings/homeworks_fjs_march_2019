'use strict';

function results() {

    let print = "";
    let socks = getNumber('firstNum');
    let arrayOfSequences = getArray('arrayih', ",");

    if (!checkNumberRange(1, 100, arrayOfSequences.length) || !isNumeric(socks) || !checkNumberRange(1, 100, socks)) {
        if (!isNumeric(socks)) {
            alert(n + 'is not a number');
        }
        return;
    }

    arrayOfSequences = getMappedArray(arrayOfSequences);
    print = getPairs(arrayOfSequences);

    printResults(print);
}



function getMappedArray(array) {
    let mappedArray = {};

    for (let i = 0; i < array.length; i++) {

        if (mappedArray[array[i]] != undefined) {
            mappedArray[array[i]] = mappedArray[array[i]] + 1;
        } else {
            mappedArray[array[i]] = 1;
        }
    }
    return mappedArray;

}

function buildMappedArrayForPrint(mappedArray) {
    let print = "";
    for (let key in mappedArray) {

        print = print + key + " -> " + mappedArray[key] + "<br>";
    }

    return print;

}

function getPairs(mappedArray) {
    let pairs = 0;
    for (let key in mappedArray) {

        if (mappedArray[key] / 2 >= 0) {
            pairs = pairs + Math.trunc(mappedArray[key] / 2);
        }
    }

    return pairs;

}





