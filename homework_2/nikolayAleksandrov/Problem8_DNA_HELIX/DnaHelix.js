'use strict';

function printDNA() {

    let print = "";
    let col = getNumber('area');
    let dna = "ATCGTTAGGG";

    if (!isNumeric(col)) {
        alert(col + ' is not a number');
        return;
    }

    print = getDna(col, dna);
    printResults(print);
}

function getDna(col, dnaArray) {

    let print = "";
    let countDNA = 0;

    for (let j = 0; j < col; j++) {

        let dna1 = dnaArray[countDNA]
        let dna2 = dnaArray[countDNA + 1]

        if (j == 0 || j % 4 == 0) {
            print = print + "* *" + dna1 + dna2 + "* *" + "<br>";
        } else if (j % 2 != 0) {
            print = print + "* " + dna1 + "- -" + dna2 + " *" + "<br>";
        } else if (j == 2 || j % 3 == 0) {
            print = print + dna1 + " - - - - " + dna2 + "<br>";
        } else {
            print = print + dna1 + " - - - - " + dna2 + "<br>";
        }

        countDNA = countDNA + 2;

        if (countDNA >= dnaArray.length) {
            countDNA = 0;
        };
    }

    return print;
}





