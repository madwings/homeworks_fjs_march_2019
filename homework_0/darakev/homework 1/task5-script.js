function DescOrder() {
  let num1 = prompt("Моля въведете число.", "");
  let num2 = prompt("Моля въведете второ число, различно от първото.", "");
  let num3 = prompt("Моля въведете трето число, различно от първите две.", "");
  let a = Number(num1);
  let b = Number(num2);
  let c = Number(num3);
  let arr = [a, b, c];

    if (num1 != null) {
    document.getElementById("num1").innerHTML =
    "Първото въведено число е: " + num1;
  }
  
  if (num2 != null) {
    document.getElementById("num2").innerHTML =
    "Второто въведедно число е: " + num2;
  }

   if (num3 != null) {
    document.getElementById("num3").innerHTML =
    "Третото въведедно число е: " + num3;
  }

  document.getElementById("result").innerHTML =
    "Низходящия ред на числата е: " + arr.sort().reverse();

  console.log(arr.sort().reverse());
}