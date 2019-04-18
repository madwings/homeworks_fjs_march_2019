function compareNum (){
    var text;
    var numA = prompt("Enter Number A ");
    var numB = prompt("Enter Number B ");
    var numC = prompt("Enter Number C");

    if (numC > numA && numC < numB){
        text = prompt("The number C is between A and B");
    }
    else {
        text = prompt("The number C is not between A and B");

    }
    document.getElementById("click").inerHTML = text;
}