function replaceValue(){
    let a1 = prompt("Enter first number a1");
    let a2 =prompt("Enter second number a2");
    let a3 = prompt("Enter third number a3");
    let num;

    num = a1;
    a1 = a2;
    a2 = a3;
    a3 = num;

    console.log("a1 = " + a1);
    console.log("a2 = " + a2);
    console.log("a3 = " + a3);


}