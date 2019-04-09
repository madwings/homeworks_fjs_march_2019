function order() {
  let num1 = prompt("Моля въведете число.", "");
  let num2 = prompt("Моля въведете второ число, различно от първото.", "");

  if (num1 != null) {
    document.getElementById("num1").innerHTML =
    "Първото въведено число е: " + num1;
  }
  
  if (num2 != null) {
    document.getElementById("num2").innerHTML =
    "Второто въведедно число е: " + num2;
  }

  if (Number(num1) < Number(num2)){
      document.getElementById("min").innerHTML =
      num1 + " е по-малкото число";
      document.getElementById("max").innerHTML =
      num2 + " е по-голямото число";
      console.log(num1 + " е по-малкото число");
      console.log(num2 + " е по-голямото число");
  }

   else {
      document.getElementById("min").innerHTML =
      num2 + " е по-малкото число";
      document.getElementById("max").innerHTML =
      num1 + " е по-голямото число";
      console.log(num2 + " е по-малкото число");
      console.log(num1 + " е по-голямото число");
   }
}