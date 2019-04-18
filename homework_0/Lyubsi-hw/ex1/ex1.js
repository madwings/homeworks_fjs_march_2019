function whereIsC() {
    let a = document.getElementById("firstnumber").value;
    // console.log(a);
    let b = document.getElementById("secondnumber").value;
    // console.log(b);
    let c = document.getElementById("thirdnumber").value;
    // console.log(c);
  
    if ( isNaN(a) || isNaN(b) || isNaN(c)) {
      console.log ('  One of the fields is not a number')
    } else if(a < b && c > a && c < b)  { 
        console.log ('C = ' +(c)+ '  is between ' +(a)+  ' and ' + (b));
    } else {
      console.log ('C = ' +(c)+ '  is not between ' +(a)+  ' and ' + (b));
    }
  }