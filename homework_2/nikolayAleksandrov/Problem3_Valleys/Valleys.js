'use strict';

function printingValleys() {

    let print = "";
    let steps = getNumber('firstNum');
    let arrayOfSequences = getArray('arrayih', "");


    if (!checkNumberRange(1, 100, arrayOfSequences.length) || !isNumeric(steps) || !checkNumberRange(2, pow(10, 6), steps)) {
        if (!isNumeric(steps)) {
            alert(n + 'is not a number');
        }
        return;
    }

    arrayOfSequences = getArrayWithOnlyUandD(arrayOfSequences);

    print = countingValleys(arrayOfSequences);
    printResults(print);
}


function getArrayWithOnlyUandD(array) {

    return array.filter(word => word == 'U' || word == 'D');
}

function countingValleys(array) {

    let currPosition = 0;
    let countingValleys = 1

    for (let i = 1; i < array.length - 1; i++) {

        if (currPosition == 0 && array[i + 1] == "U" && array[i] != "D") {
            countingValleys++;
        }

        if (array[i] == "D") {
            currPosition--;
        } else {
            currPosition++;
        }

    }

    return countingValleys;

}






