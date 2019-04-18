var num1 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
if (isNaN(num1)) {
	console.log('First enter is not a number!');
} else if (isNaN(num2)) {
	console.log('Second enter is not number!');
} else {
	var holder = num1;
	num1 = num2;
	num2 = holder;
	console.log ('First number is ' + num1 + ' and second number is ' + num2);
}