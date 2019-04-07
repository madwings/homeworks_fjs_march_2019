function printResults() {

    let firstNum = parseFloat(document.getElementById("firtNum").value);
    let secNum = parseFloat(document.getElementById("secondNum").value);
    let thirdNum = parseFloat(document.getElementById("thirdNum").value);
    let result ="";
    var points = [firstNum, secNum, thirdNum];

    points.sort(function(b, a){return a - b});

    for(var i in points) {

        result=result+`<br> ${points[i]}`;
    
    }
    document.getElementById("resultValue").innerHTML  = result;
}
   
