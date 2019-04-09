function compare() {
  let a = document.getElementsByName('num_a')[0].value;
  let b = document.getElementsByName('num_b')[0].value;
  let c = document.getElementsByName('num_c')[0].value;

    if( (c <= b && c >= a) || (c >= b && c <= a)) {
        console.log(c + ' е в интервала ' + '[' + a + ' ; ' + b + ']');
        document.getElementById("result").innerHTML = c + ' е в интервала ' + '[' + a + ' ; ' + b + ']' ;
    } 
    else {
        console.log(c + 'не е в интервала ' + '[' + a + ' ; ' + b + ']');
        document.getElementById("result").innerHTML = c + ' не е в интервала ' + '[' + a + ' ; ' + b + ']';
    }
} 