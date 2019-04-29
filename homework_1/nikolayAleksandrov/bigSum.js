'use strict';

function results() {


    let n = getNumber('firstNum');
    let arrayoFNumbers = getArray('arrayih', " ");
    n = +n;
    let sum = 0;
    let countElement = 0;


    if (!checkNumberRange(1, pow(10, 10), arrayoFNumbers.length) || !isNumber(n) || !checkNumberRange(1, 10, n)) {
        if (!isNumber(n)) {
            alert(n + 'is not a number');
        }
        return;
    }


    for (let i = 0; i < arrayoFNumbers.length; i++) {
        let n1 = 0;
        n1 = +arrayoFNumbers[i];
        let isZero = (n1 == 0);

        if (isNumber(n1) && !isZero) {
            sum = sum + n1;
            countElement++;
        }

        if (countElement >= n) {
            break;
        }

    }
    printResults(sum);

}
