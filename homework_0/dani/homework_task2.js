function arithmetics(){
    let firstN = prompt("Enter the first number");
    let secondN = prompt("Enter the second number");
    let sum = Number(firstN) + Number(secondN);
   // sum = prompt("The sum is: ",sum);
   console.log("The sum is: " + sum);

    let subtr = Number(firstN) - Number(secondN);
   // subtr = prompt("The subtract is: ", subtr);
   console.log("The subtract is: " + subtr);

    let multi = Number(firstN) * Number(secondN);
   // multi = prompt("The result after multiplication: ",multi);
   console.log("The result after multiplying: " + multi);

    let div = Number(firstN) / Number(secondN);
   // div= prompt("The result after devision is: ", div);
   console.log("The result after dividing is: " + div);
   

   document.getElementById("Click-sum").innerHTML = sum;
   document.getElementById("Click-sub").innerHTML = subtr;
   document.getElementById("Click-div").innerHTML = div;
   document.getElementById("Click-mul").innerHTML = multi;
}