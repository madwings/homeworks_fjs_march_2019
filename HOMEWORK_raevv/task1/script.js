function between() {
  let firstNum = document.getElementsByName('A')[0].value;
  let secondNum = document.getElementsByName('B')[0].value;
  let thirdNum = document.getElementsByName('C')[0].value;
  
  if (firstNum < thirdNum && thirdNum <secondNum) {
    let message = alert("Is between");
    
  }
  else {
    let message = alert("Is out of the range");
  }

}
 