'use strict';

function print() {
    
    let firstCompared = getArray('firtNum', ",");

    if (!checkNumberRange(1, 5, firstCompared.length)) {
        return;
    }
    let min = allSumExceptOne(firstCompared, 0);
    let max = allSumExceptOne(firstCompared, 0);

    for (let i = 0; i < firstCompared.length; i++) {

        if (min > allSumExceptOne(firstCompared, i)) {
            min = allSumExceptOne(firstCompared, i);
        } else {
            max = allSumExceptOne(firstCompared, i);
        }
    }

    // firstCompared = firstCompared.sort((a, b) => (a - b));
    // for (let i=0; i<firstCompared.length ;i++) {
    //     if (i < firstCompared.length - 1  ){
    //         firstCompared[i]=+firstCompared[i];
    //         firstCompared[i+1]=+firstCompared[i+1]
    //         min = min + firstCompared[i];
    //         max=max +firstCompared[i+1];
    // }}

    printResults("Min is " + min + "<br>" + "Max is " + max)
}

function allSumExceptOne(array, exceptOneIndex) {
    let sum = 0;
    for (let i = 0; i < array.length; i++) {

        if (i == exceptOneIndex) {
            continue;
        }
        array[i] = +array[i]
        sum = sum + array[i];
    }
    return sum;
}
