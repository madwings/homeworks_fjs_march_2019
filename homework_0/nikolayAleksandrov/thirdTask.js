function printResults() {

    let firstNum = parseFloat(document.getElementById("firtNum").value);
    let secNum = parseFloat(document.getElementById("secondNum").value);

    [firstNum, secNum] = [secNum, firstNum]

    document.getElementById("resultValue").innerHTML = `
    Първото число след размяната е : ${firstNum} 
    <br>Второто число след размяната е : ${secNum}`;

}

