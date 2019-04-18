var num1 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
var num3 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
var holder = num3;
num3 = num1;
num1 = num2;
num2 = holder;
console.log('first: ' + num1 + ', second:' + num2 + ', third: ' + num3);