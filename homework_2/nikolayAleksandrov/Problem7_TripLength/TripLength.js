'use strict';

function printTripLength() {

    let print = "";
    let coordinates = getArray('area', ",");
    let sortedTrippleSides;

    if (!areAllNumeric(coordinates) || !checkNumberRange(6, 6, coordinates.length)) {

        if (!areAllNumeric(coordinates)) {
            alert("Some of coordinates " + coordinates + 'are not a number');
        }
        return;
    }


    sortedTrippleSides = calculateAllTripleSides(coordinates);
    print = printSortedSides(coordinates) + (sortedTrippleSides[0] + sortedTrippleSides[1]);
    printResults(print);

}

function calculateAllTripleSides(coordinates) {

    let xy = calculateOneTripleSide(coordinates[0], coordinates[2], coordinates[1], coordinates[3]);
    let xz = calculateOneTripleSide(coordinates[0], coordinates[4], coordinates[1], coordinates[5]);
    let zy = calculateOneTripleSide(coordinates[4], coordinates[2], coordinates[5], coordinates[3]);
    return sortedArray([xy, xz, zy])
}

function calculateOneTripleSide(x1, x2, y1, y2) {
    return Math.sqrt((x2 - x1) * (x2 - x1) + (y2 - y1) * (y2 - y1));
}

function isFirstDotBiggerThanSecond(x1, x2, y1, y2) {
    if ((x1 + x2) >= (y1 + y2)) {
        return true;
    }
    return false;
}

function printSortedSides(coordinates) {
    let print = '';
    if (isFirstDotBiggerThanSecond(coordinates[0], coordinates[1], coordinates[2], coordinates[3])
        && isFirstDotBiggerThanSecond(coordinates[0], coordinates[1], coordinates[4], coordinates[5])
        && isFirstDotBiggerThanSecond(coordinates[2], coordinates[3], coordinates[4], coordinates[5])) {
        print = "3->2->1:  "
    } else if (isFirstDotBiggerThanSecond(coordinates[2], coordinates[3], coordinates[0], coordinates[1])
        && isFirstDotBiggerThanSecond(coordinates[2], coordinates[3], coordinates[0], coordinates[1])
        && isFirstDotBiggerThanSecond(coordinates[0], coordinates[1], coordinates[4], coordinates[5])) {
        print = "3->1->2:  "
    } else if (isFirstDotBiggerThanSecond(coordinates[4], coordinates[5], coordinates[0], coordinates[1])
        && isFirstDotBiggerThanSecond(coordinates[4], coordinates[5], coordinates[2], coordinates[3])
        && isFirstDotBiggerThanSecond(coordinates[0], coordinates[1], coordinates[2], coordinates[3])) {
        print = "2->1->3:  "
    } else if (isFirstDotBiggerThanSecond(coordinates[4], coordinates[5], coordinates[0], coordinates[1])
        && isFirstDotBiggerThanSecond(coordinates[4], coordinates[5], coordinates[2], coordinates[3])
        && isFirstDotBiggerThanSecond(coordinates[2], coordinates[3], coordinates[0], coordinates[1])) {
        print = "1->2->3:  "
    } else if (isFirstDotBiggerThanSecond(coordinates[4], coordinates[5], coordinates[0], coordinates[1])
        && isFirstDotBiggerThanSecond(coordinates[2], coordinates[3], coordinates[4], coordinates[5])) {
        print = "1->3->2:  "
    }
    return print;
}

