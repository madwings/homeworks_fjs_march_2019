'use strict';

function printLocator() {

    let print = "";
    let coordinates = getArray('area', ",");

    print = checkAllTreasures(coordinates);
    printResults(print);

}

function isTreasureReatched(coordinates, treasureCoordinates) {

    if (treasureCoordinates[0][0] <= coordinates[0] && treasureCoordinates[0][1] >= coordinates[0]
        && (treasureCoordinates[1][0] <= coordinates[1] && treasureCoordinates[1][1] >= coordinates[1])) {
        return true;
    }
    return false
}

function checkAllTreasures(coordinates) {

    let print = '';

    let tonga = [
        [0, 2],
        [6, 8]
    ];
    let tuvalu = [
        [1, 3],
        [1, 3]
    ];

    let samoa = [
        [5, 7],
        [3, 6]
    ];

    let cook = [
        [4, 9],
        [7, 8]
    ];

    let tokelau = [
        [8, 9],
        [0, 1]
    ];


    for (let i = 0; i < coordinates.length; i = i + 2) {

        if (isTreasureReatched([coordinates[i], coordinates[i + 1]], tuvalu)) {

            print = print + "Tuvalu" + "<br>";

        } else if (isTreasureReatched([coordinates[i], coordinates[i + 1]], samoa)) {

            print = print + "Samoa" + "<br>";

        } else if (isTreasureReatched([coordinates[i], coordinates[i + 1]], cook)) {

            print = print + "Cook" + "<br>";

        } else if (isTreasureReatched([coordinates[i], coordinates[i + 1]], tokelau)) {

            print = print + "Tokelau" + "<br>";

        } else if (isTreasureReatched([coordinates[i], coordinates[i + 1]], tonga)) {

            print = print + "Tonga" + "<br>";

        } else {

            print = print + "On the bottom of the ocean" + "<br>";

        }

    }

    return print;

}

