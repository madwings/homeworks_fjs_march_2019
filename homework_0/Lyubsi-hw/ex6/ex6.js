function changeNumber() {
    let a =  document.getElementsByName('a')[0].value;;
    console.log(a);
    let b = document.getElementsByName('b')[0].value;;
    console.log(b);
    let c = document.getElementsByName('c')[0].value;;
    console.log(c);

    if ( isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log (' One of the fields is not a number')
    } else { 
     let help = a;
      a = b;
      b = c;
      c = help;
    console.log ('Now A = ' +(a));
    console.log ('Now B = ' +(b));
    console.log ('Now C = ' +(c));
    }

  }