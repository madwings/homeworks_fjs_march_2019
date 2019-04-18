function replaceN (){
    let num1 = prompt("Enter first number");
    let num2 = prompt("Enter second number");
    let num3;
    if (num1 != num2 && num2 != num1){
        num3 = num1;
        num1 = num2;
        num2 = num3;
        console.log("First number " + num1 +  '\n' + " Second number " + num2);
    }
    else{
        console.log("The numbers are equal");
    }
    //document.getElementById("click").innerHTML = num3;
}