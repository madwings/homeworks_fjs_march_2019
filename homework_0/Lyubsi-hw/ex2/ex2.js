function calCulate() {
    let a =  document.getElementsByName('a')[0].value;;
    // console.log(a);
    let b = document.getElementsByName('b')[0].value;;
    // console.log(b);
    
   
    if ( isNaN(a) || isNaN(b)) {
      console.log ('  One of the fields is not a number')
    } else {

   let sum=+a + +b;
    console.log ('Sum: ' +(sum));
    let difference = a - b;
    console.log('Difference: ' +(difference));
    let multiplication = a * b;
    console.log('Multiplication: ' + (multiplication));
    let division = a / b;
    console.log('Division: ' +(division));
    }
      
  }