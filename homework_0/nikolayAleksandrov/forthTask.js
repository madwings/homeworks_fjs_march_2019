function printResults() {

    let firstNum = parseFloat(document.getElementById("firtNum").value);
    let secNum = parseFloat(document.getElementById("secondNum").value);

    if (firstNum > secNum) {
        document.getElementById("resultValue").innerHTML = `${secNum}  <br> ${firstNum}`;
    } else {
        document.getElementById("resultValue").innerHTML = `${firstNum} <br> ${secNum}`;

    }
}

