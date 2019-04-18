function task7(){
    let hour = prompt("What time is it? ");
    let money = prompt("How much money do you have: ");
    let health = prompt("Are you heаlthy? Answer with yes/no ");

    if (hour <= 24){
        console.log("The time is: "+ hour + "h");
        } else{
            console.log("Invalid hour");
        }
              

    if (health == "yes"){
        console.log("I am healty. I am going to out :)");
    }
    else{
        console.log("I'm not feeling well :(. I will stay at home.")
    }
    /*
    switch (money){
        case 1:        
        if (money == 0){
            console.log("No money! I will drink tea at home alone.");          
        }
        break;

        case 2:
        if(money < 10){
            console.log("Im goinng to walk ");
        }
        break;

        case 3: 
        if (money > 10){
            console.log("I will buy medicines");
        }
        break;

        default:
        console.log("Click again!");
        
    }*/

    if (money < 10){
        console.log("Im goinng to walk ");

    } else if (money ==0){
        console.log("No money! I will drink tea at home alone.");
    } else {
        console.log("I will buy medicines");
    }
    //document.getElementById("Click").innerHTML = hour;
    document.getElementById("Click").innerHTML =money;
    //document.getElementById("Click").innerHTML = health;
}