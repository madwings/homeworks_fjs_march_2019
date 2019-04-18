function NumberActions() {
  let number1 = prompt("Моля въведете число", "");
  let number2 = prompt("Моля въведете второ число", "");
  let sum  = Number(number1) + Number(number2);
  let subtraction  = Number(number1) - Number(number2);
  let multiplication  = Number(number1) * Number(number2);
  let division  = Number(number1) % Number(number2);

  if (number1 != null) {
    document.getElementById("num1").innerHTML =
    "Първото въведено число е: " + number1;
  }
  
  if (number2 != null) {
    document.getElementById("num2").innerHTML =
    "Второто въведено число е: " + number2;
  }

     document.getElementById("sum").innerHTML =
    "Сборът на числата е: " + sum;
     document.getElementById("subtraction").innerHTML =
    "Разликата на числата е: " + subtraction;
    document.getElementById("multiplication").innerHTML =
    "Произведението на числата е: " + multiplication;
    document.getElementById("division").innerHTML =
    "Остатъкът от деление на числата е: " + division;

    console.log("Сборът на числата е: " + sum);
    console.log("Разликата на числата е: " + subtraction);
    console.log("Произведението на числата е: " + multiplication);
    console.log("Остатъкът от деление на числата е: " + division);
}