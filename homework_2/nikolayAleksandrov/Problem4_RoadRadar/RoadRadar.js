'use strict';

function printingSpeed() {

    let print = "";
    let currSpeed = getNumber('firstNum');
    let area = getString('area').toLowerCase();
    let arrayOfLimits =
    {
        "city": 40,
        "motorway": 130,
        "interstate": 90,
        "residential": 20
    }

    if (!isAreaExist(area, arrayOfLimits) || !isNumeric(currSpeed) || !checkNumberRange(0, 350, currSpeed)) {
        if (!isNumeric(currSpeed)) {
            alert(n + 'is not a number');
        }
        return;
    }

    print = getSpeedMessage(area, arrayOfLimits, currSpeed);
    printResults(print);
}


function isAreaExist(area, arrayOfLimits) {

    for (let key in arrayOfLimits) {

        if (key == area) {
            return true;
        }
    }

    alert(area + ' is not valid area. List of valid areas are:motorway,interstate,city,residential');
    return false;
}

function getSpeedMessage(area, arrayOfLimits, currSpeed) {

    if (arrayOfLimits[area] >= currSpeed) {
        return "";
    } else if (arrayOfLimits[area] < currSpeed && currSpeed <= arrayOfLimits[area] + 20) {
        return "speeding";
    } else if (arrayOfLimits[area] + 20 < currSpeed && currSpeed <= arrayOfLimits[area] + 40) {
        return "excessive speeding";
    } else if (arrayOfLimits[area] + 40 < currSpeed) {
        return "reckless  speeding";
    }
}







