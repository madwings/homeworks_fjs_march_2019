function print() {
    let a1 =  document.getElementsByName('a1')[0].value;;
    console.log(a1);
   
    let counter = 0;
    for(let i = 0; i < a1.length; i++){
      if(a1.charAt(i) === a1.charAt(i).toUpperCase()){
        counter++
        //charAt:  charAt() method returns a new string consisting of the single UTF-16 code unit
        // located at the specified offset into the string.
    }
   
  }
  console.log(counter);
  return counter
 
  }
