'use strict';

function caesarCipher() {


    let n = getNumber('firstNum');
    let k = getNumber('secNum');

    n = +n;
    k = +k;
    let text = document.getElementById('textArea').value;
    let print;


    if (!isNumber(n) || !isNumber(k) || !checkNumberRange(1, 100, n) || !checkNumberRange(0, 100, k)) {

        if (!isNumber(n)) {
            alert(n + 'is not a number');
        }
        if (!isNumber(k)) {
            alert(k + 'is not a number');
        }
        return;
    } else {
        print = encryptText(n, text, k)
    }


    printResults(print);

}

function encryptText(n, text, k) {
    let encryptext = "";
    let num = 0;
    for (let i = 0; i <= n; i++) {

        num = getAsciCodeIfzReached(text[i]);

        if (isContainLetter(text[i])) {
            encryptext = encryptext + String.fromCharCode(num + k);
        } else {
            encryptext = encryptext + (text[i]);
        }

    }
    return encryptext;
}


function getAsciCodeIfzReached(letter) {

    if (letter == "z") {
        return ('a'.charCodeAt() - 1);
    } else if (letter == "Z") {
        return ('A'.charCodeAt() - 1);
    } else {
        return (letter.charCodeAt());
    }

}