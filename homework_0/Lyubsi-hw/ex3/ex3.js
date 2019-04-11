function changeNumber() {
    let a =  document.getElementsByName('a')[0].value;;
    console.log(a);
    let b = document.getElementsByName('b')[0].value;;
    console.log(b);
    

    if ( isNaN(a) || isNaN(b)) {
      console.log ('  One of the fields is not a number')
    } else{
      let c = b;
      b = a;
      a = c;
    console.log ('Now A = ' +(a));
    console.log ('Now B = ' +(b));

    }

  }