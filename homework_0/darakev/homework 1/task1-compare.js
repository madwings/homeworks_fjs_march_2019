function compare() {
  let a = document.getElementsByName('num_a')[0].value;
  let b = document.getElementsByName('num_b')[0].value;
  let c = document.getElementsByName('num_c')[0].value;

    if (Number(a) > Number(b)) {
      var d = a;
      a = b;
      b = d;
    }
    if(Number(c) >= Number(a) && Number(c) <= Number(b)) {
        console.log('Числото ' + c + ' е в интервала ' + '[' + a + ' ; ' + b + ']');
        document.getElementById("result").innerHTML = 'Числото ' + c + ' е в интервала ' + '[' + a + ' ; ' + b + ']' ;
    } 
    else {
        console.log('Числото ' + c + ' не е в интервала ' + '[' + a + ' ; ' + b + ']');
        document.getElementById("result").innerHTML = 'Числото ' + c + ' не е в интервала ' + '[' + a + ' ; ' + b + ']';
    }
} 