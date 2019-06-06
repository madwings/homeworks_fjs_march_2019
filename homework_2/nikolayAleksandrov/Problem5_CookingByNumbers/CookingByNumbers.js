'use strict';

function printCooking() {

    let print = "";
    let currCook = getNumber('firstNum');
    let area = getArray('area', ",");
    let arrayOfOperatins =
    {
        "chop": 0,
        "dice": 0,
        "spice": 0,
        "bake": 0,
        "fillet": 0
    }

    if (!areAllOperationsExist(area, arrayOfOperatins) || !isNumeric(currCook)) {
        if (!isNumeric(currCook)) {
            alert(n + 'is not a number');
        }
        return;
    }

    print = getCookMessage(area, currCook);
    printResults(print);
}


function areAllOperationsExist(area, arrayOfLimits) {
    let isEqual = false;
    for (const key1 in area) {
        isEqual = false;
        for (let key in arrayOfLimits) {

            if (key == area[key1]) {
                isEqual = true;
                break;
            }

        }
        if (!isEqual) {
            alert(area[key1] + ' is not valid cook sequence. List of valid areas are:chop,dice,spice,bake,fillet');
            return false;
        }

    }
    return true;
}

function getCookMessage(area, currCook) {
    let print = "";

    for (let i = 0; i < area.length; i++) {

        if (area[i] == "chop") {
            currCook = currCook / 2;
            print = print + (currCook) + "<br>";

        } else if (area[i] == "dice") {
            currCook = Math.sqrt(currCook)
            print = print + (currCook) + "<br>";

        } else if (area[i] == "spice") {
            currCook++;
            print = print + (currCook) + "<br>";

        } else if (area[i] == "bake") {
            currCook = currCook * 3;
            print = print + (currCook) + "<br>";

        } else if (area[i] == "fillet") {
            currCook = currCook - (currCook * 0.20);
            print = print + (currCook) + "<br>";
        }

    }

    return print;

}







