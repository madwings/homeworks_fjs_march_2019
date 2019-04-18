var a = prompt('Въведете число A: ');
var b = prompt('Въведете число B: ');
var c = prompt('Въведете число C: ');
if ((a < b && c > a && c < b) || (a > b && c < a && c > b )){
    alert('Числото ' + c + ' е между ' + a + ' и ' + b);
} else {
    alert('Числото ' + c + ' не е между ' + a + ' и ' + b);
}