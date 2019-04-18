var num1 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
var num2 = parseFloat(prompt('Enter a number: ').replace(',', '.'));
if ( num1 > num2) {
	console.log(num2 + ',' + num1);
} else {
	console.log(num1 + ',' + num2);
}