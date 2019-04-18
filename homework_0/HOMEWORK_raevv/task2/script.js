function calc() {
    let firstNum = document.getElementsByName('num1')[0].value;
    let secondNum = document.getElementsByName('num2')[0].value;
    
    let sum=+firstNum + +secondNum;
    let difference = firstNum - secondNum;
    let multiplication = firstNum * secondNum;
    let division = firstNum / secondNum;

    document.getElementById("demo1").innerHTML ="SUM: " + sum;
    document.getElementById("demo2").innerHTML ="Diff:" + difference;
    document.getElementById("demo3").innerHTML ="Multiplication:" + multiplication;
    document.getElementById("demo4").innerHTML ="Divison:" + division;

  }
  
 