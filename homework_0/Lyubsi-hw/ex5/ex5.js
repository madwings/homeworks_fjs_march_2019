function print() {
    let a =  document.getElementsByName('a')[0].value;;
    // console.log(a);
    let b = document.getElementsByName('b')[0].value;;
    // console.log(b);
    let c = document.getElementsByName('c')[0].value;;
    // console.log(c);

    if ( isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log ('  One of the fields is not a number')
    } else if (a >= b) {
      if(a >= c) {
        if (b >= c) {
          console.log(a, b, c);
        } else {
             console.log(a, c, b);
        }
      } else {
        console.log(c, a, b);
      }
    } else if (b >= c) {
         if (a >= c) {
           console.log(b, a, c);
         } else {
           console.log(b, c, a);
         }
    } else {
      console.log(c, b, a);
    }

  }