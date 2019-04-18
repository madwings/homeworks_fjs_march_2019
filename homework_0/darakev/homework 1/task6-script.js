function swap3() {
  let num1 = prompt("Моля въведете число a1:");
  let num2 = prompt("Моля въведете число a2:");
  let num3 = prompt("Моля въведете число a3:");

    document.getElementById("num1").innerHTML =
    "Входната стойност на a1: " + num1;
  
    document.getElementById("num2").innerHTML =
    "Входната стойност на a2: " + num2;

    document.getElementById("num3").innerHTML =
    "Входната стойност на a3: " + num3;

    let temp = num1;
    num1 = num2;
    num2 = num3;
    num3 = temp;

  alert('Изходни стойности на променливите --> ' + 'a1: ' + num1 + ' ; a2: ' + num2 + ' ; a3: ' + num3);

 console.log('a1: ' + num1 + ', a2: ' + num2 + ', a3: ' + num3);
}