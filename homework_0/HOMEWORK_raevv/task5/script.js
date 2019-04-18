let firstNum = parseFloat(prompt("Please enter a number"));
let secondNum = parseFloat(prompt("Please enter a number"));
let thirdNum = parseFloat(prompt("Please enter a number"));
if(firstNum > secondNum && firstNum > thirdNum) {
    if(secondNum > thirdNum) {
        console.log(firstNum + ' ' + secondNum + ' ' + thirdNum);
    } else {
        console.log(firstNum + ' ' + thirdNum + ' ' + secondNum);
    }
}
if(secondNum > firstNum && secondNum > thirdNum) {
    if(firstNum > thirdNum) {
        console.log(secondNum + ' ' + firstNum + ' ' + thirdNum);
    } else {
        console.log(secondNum + ' ' + thirdNum + ' ' + firstNum);
    }
}
if(thirdNum > firstNum && thirdNum > secondNum) {
    if(firstNum > secondNum) {
        console.log(thirdNum + ' ' + firstNum  + ' ' + secondNum);
    } else {
        console.log(thirdNum + ' ' + secondNum + ' ' + firstNum);
    }
}