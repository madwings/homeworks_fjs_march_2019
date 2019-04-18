function increase(){
    let numA = prompt("Enter number A");
    let numB = prompt("Enter number B");

    if (numA > numB && numB < numA){
        console.log(numB);
        console.log(numA);
    
    }else if (numA < numB && numB>numA){
        console.log(numA);
    console.log(numB);

    } else{
        console.log("number A is equal to numer B");
    }
    
    }
