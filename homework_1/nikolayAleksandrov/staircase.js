'use strict';

function buildStaircase() {
    let size = getNumberOfStaircase('firstNum');
    let print = "";
    size = +size;

    let matric = new Array();

    for (let i = 0; i < size; i++) {

        let row = new Array();

        for (let j = 0; j < size; j++) {

            if (j <= i) {
                row.unshift("#");
            } else {

                row.unshift(" ");
            }
        }

        matric.push(row);
    }

    printResults(matric.map(row => row.join(' ')).join('<br>'));

}


function getNumberOfStaircase(id) {

    const numb = getNumber(id);

    if (checkNumberRange(1, 100, numb) === true) {

        return numb;
    }
    return 0;
}

