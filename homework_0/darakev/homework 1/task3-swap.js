function swap() {
  let num1 = prompt("Въведете стойност за числото 'A'", "");
  let num2 = prompt("Въведете стойност за числото 'B'", "");

  if (num1 != null) {
    document.getElementById("num1").innerHTML =
    "Първоначалната стойност на 'A' е: " + num1;
  }
  
  if (num2 != null) {
    document.getElementById("num2").innerHTML =
    "Първоначалната стойност на 'B' е: " + num2;
  }

  let swap = num1;
  num1 = num2;
  num2 = swap;

    document.getElementById("swap").innerHTML =
    "След размяната 'A' има стойност: " + num1 + ", " + "а 'B' има стойност: " + num2;


  console.log("След размяната 'A' има стойност: " + num1 + ", " + "а 'B' има стойност: " + num2);
}
