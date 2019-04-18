function printResults() {

    let hour = parseInt(document.getElementById("firtNum").value);
    let money = parseFloat(document.getElementById("secondNum").value);
    let isFeelWellRaw = document.getElementById("thirdNum").value;
    var isFeelWell = true;
    let messageNotFeelWell;

    if (isFeelWellRaw.trim().toLowerCase() == 'true') {
        isFeelWell = true;
    } else {
        isFeelWell = false;
    }



    if (!isFeelWell) { // ако съм болен няма да излизам

        messageNotFeelWell="Няма да излизам.";


        if (money != 0) {// ако имам пари ще си купя лекарства

            document.getElementById("resultValue").innerHTML =  `${messageNotFeelWell}  Болен съм и ще си купя лекарства. Имам ${money} лв`;

        } else { // - ако нямам – ще стоя вкъщи и ще пия чай

            document.getElementById("resultValue").innerHTML =  `${messageNotFeelWell}  Болен съм ама нямам и пари. Ще пия чай"`;

        }

    } else { // ако съм здрав

        if (money < 10) {// - ако имам по-малко от 10 лв ще отида на кафе и т.н

            document.getElementById("resultValue").innerHTML = "Ще отида на кафе щот имам под 10 лв";

        } else if (money == 0) {

            document.getElementById("resultValue").innerHTML = "Здрав съм ама нямам пари ще ходя само на разходка";

        } else {

            document.getElementById("resultValue").innerHTML = "Ще си купя кола";

        }

    }


}

