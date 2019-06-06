const count = (x, y) => {
    return [].reduce.call(x, (count, letter) => {
        return letter == y ? ++count : count;
    }, 0);
}
const string = 'apple';
console.log('a');
console.log(count(string, 'a'));
console.log('b')
console.log(count(string, 'b'));
console.log('c')
console.log(count(string, 'c'));
console.log('d')
console.log(count(string, 'd'));
console.log('e')
console.log(count(string, 'e'));
 
 
//друго//


function letterCount(str) {
    var x = {},
        y = str.length;
    while (y--) x[str[y]] = x[str[y]] + 1 || 1;
    return x;
}
console.log(letterCount('apple'));