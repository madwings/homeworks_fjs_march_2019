'use strict';

function results() {

    let print = "";
    let sequences = getNumber('firstNum');
    let arrayOfSequences = getArray('arrayih', ",");

    if (!checkNumberRange(1, pow(10, 4), arrayOfSequences.length) || !isNumeric(sequences) || !checkNumberRange(2, 100, sequences)) {
        if (!isNumeric(sequences)) {
            alert(n + 'is not a number');
        }
        return;
    }


    for (let i = 0; i < arrayOfSequences.length; i++) {
        if ((filterSortedSeqFromOtherSequence("hackerrank", arrayOfSequences[i]) != 0) && filterSortedSeqFromOtherSequence("hackerrank", arrayOfSequences[i]).localeCompare("hackerrank") == 0) {
            print = print + "Yes <Br>"
            continue;
        }
        print = print + "No <Br>"
    }

    printResults(print);
}



function filterSortedSeqFromOtherSequence(shortSeq, longSeq) {
    let mappedArray = {};
    let shortSeqArray = {};
    let exportSeq = '';
    let currBigIndex = 0;

    longSeq = longSeq.toLowerCase();
    shortSeq = shortSeq.toLowerCase();

    mappedArray = getIndexedLetterArrays(longSeq);
    shortSeqArray = getIndexedLetterArrays(shortSeq);

    if (isFirstMappedArrayContainedToSecond(shortSeqArray, mappedArray)) {

        for (let i = 0; i < shortSeq.length; i++) {

            for (let key in mappedArray) {

                if (key.localeCompare(shortSeq[i]) == 0) {

                    for (let j = 0; j < mappedArray[key].length; j++) {

                        if (mappedArray[key][j] >= currBigIndex) {
                            exportSeq = exportSeq + key;
                            currBigIndex = mappedArray[key][j];
                            break;
                        }
                    }
                    break;
                }
            }
        }
        return exportSeq;
    } else {
        return 0;
    }
    //without mapping
    // let mappedArray = {};
    // longSeq = longSeq.toLowerCase();
    // shortSeq = shortSeq.toLowerCase();
    // mappedArray = getIndexedLetterArrays(longSeq);


    // for (let i = 0; i < mappedArray.length; i++) {

    //     if (mappedArray[i] == undefined) {
    //         mappedArray[i] = new Array();
    //         mappedArray[i].push(i)
    //     } else {
    //         mappedArray[i].push(i);
    //     }
    // }



    // let exportSeq = '';
    // let currBigIndex = 0;
    // longSeq = longSeq.toLowerCase();
    // shortSeq = shortSeq.toLowerCase();
    // for (let i = 0; i < shortSeq.length; i++) {

    //     for (let j = currBigIndex; j < longSeq.length; j++) {

    //         if (shortSeq[i].localeCompare(longSeq[j]) == 0 && currBigIndex <= j) {

    //             exportSeq = exportSeq + longSeq[j];
    //             currBigIndex = j;
    //             break;

    //         } else if (shortSeq[i].localeCompare(longSeq[j]) == 0) {
    //             let isFound = false;
    //             for (let y = longSeq.length; y > i; y--) {

    //                 if (shortSeq[i].localeCompare(longSeq[y]) == 0) {
    //                     exportSeq = exportSeq + longSeq[y];
    //                     isFound = true;
    //                     currBigIndex = y;
    //                     break;
    //                 }
    //             }
    //             if (!isFound) {
    //                 exportSeq = longSeq[j] + exportSeq;
    //                 currBigIndex = j;
    //                 break;
    //             }

    //             break;
    //         }

    //     }
    // }
    // return exportSeq;
}

function getIndexedLetterArrays(array) {
    let mappedArray = {};
    for (let i = 0; i < array.length; i++) {

        if (mappedArray[array[i]] == undefined) {
            mappedArray[array[i]] = new Array();
            mappedArray[array[i]].push(i)
        } else {
            mappedArray[array[i]].push(i);
        }
    }
    return mappedArray;

}

function isFirstMappedArrayContainedToSecond(arrayFirst, ArraySec) {

    for (let key in arrayFirst) {

        let isContained = false;

        for (let key1 in ArraySec) {
            if ((key.localeCompare(key1) == 0) && arrayFirst[key].length <= ArraySec[key1].length) {//&& arrayFirst[key].length <= ArraySec[key1].length
                isContained = true;
                break;
            }
        }
        if (!isContained) {
            return isContained;
        }
    }
    return true;
}


function sortIndexedArrays(mappedArray) {

    for (let key in mappedArray) {
        mappedArray[key] = sortedArray(mappedArray[key]);
    }
    return mappedArray;

}
