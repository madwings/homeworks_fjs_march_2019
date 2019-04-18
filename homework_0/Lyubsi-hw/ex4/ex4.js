function print() {
    let a =  document.getElementsByName('a')[0].value;;
    // console.log(a);
    let b = document.getElementsByName('b')[0].value;;
    // console.log(b);
    

    if (isNaN(a)){
      console.log ((a) + ' is not a number')
    } else if (isNaN(b)){
      console.log ((b) + ' is not a number')
    } else if (a >= b){
     console.log ('B = ' +(b));
       console.log ('A = ' +(a));
    } else {
     console.log ('A = ' +(a));
    console.log ('B = ' +(b));
    }

  }