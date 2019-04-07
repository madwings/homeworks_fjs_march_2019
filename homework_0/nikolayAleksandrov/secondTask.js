function printResults() {

    let firstNum = parseFloat(document.getElementById("firtNum").value);
    let secNum = parseFloat(document.getElementById("secondNum").value);


    let sum = firstNum + secNum;
    let sumMinus = secNum - firstNum;
    let multyply = secNum * firstNum;
    let divideWithLeftValue =secNum % firstNum;
    let divideWithoutLeftValue = secNum / firstNum;

    document.getElementById("resultValue").innerHTML = `
    "Сумата е : ${sum} 
    "<br>"Разликата е : ${sumMinus}
    "<br>"Произведението е : ${multyply}
    "<br>"Деленето без остатък е : ${divideWithLeftValue};
    "<br>"Деленето със остатък е : ${divideWithoutLeftValue}`;




}


