function printResults() {

    let a1Num = parseFloat(document.getElementById("firtNum").value);
    let a2Num = parseFloat(document.getElementById("secondNum").value);
    let a3Num = parseFloat(document.getElementById("thirdNum").value);
    let varA1andA2 = a1Num;

    a1Num = a2Num; // а1 да има стойността на а2
    a2Num = a3Num; // а2 да има стойността на а3,
    a3Num = varA1andA2; // а3 да има старата стойност на а1

    document.getElementById("resultValue").innerHTML = `
    Първото число след размяната е : ${a1Num} 
    <br>Второто число след размяната е : ${a2Num}
    <br>Третото число след размяната е : ${a3Num}`;

}

