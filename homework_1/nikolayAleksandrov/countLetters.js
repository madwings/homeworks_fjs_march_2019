'use strict';

function countLetters() {

    let mappedArray = {};
    let print = "";
    let array1=(document.getElementById('arrayih').value).trim();


    if (!checkNumberRange(1, 100, array1.length)) {

        return;
    }
    
    for (let i = 0; i < array1.length; i++) {

        if (mappedArray[array1[i]] != undefined) {
            mappedArray[array1[i]] = mappedArray[array1[i]] + 1;
        } else {
            mappedArray[array1[i]] = 1;
        }
    }

    for (let key in mappedArray) {
        print = print + `${key} -> ${mappedArray[key]}` + "<br>";
    }

    printResults(print);

}
