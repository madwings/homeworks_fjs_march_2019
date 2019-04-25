'use strict';

// First task - compare the triplets

function errorInput(arrayArgs) {
    
    if (arrayArgs.length !== 3) return false;
    
    for (let i = 0; i < arrayArgs.length; i++) {
        
        if (Number.isNaN(arrayArgs[i])) return true;
        if (arrayArgs[i] < 0 || arrayArgs[i] > 100) return true;
    }
    return false;
}

function compareTriplets(a, b) {
    let result = [0, 0];

    for (var i = 0; i < a.length; i++) {
        if (a[i] > b[i]) {
            result[0]++;
        } else if (a[i] < b[i]) {
            result[1]++;
        }
    }
    return result;
}

function firstTask() {
    
    const alicePoints = prompt('Please input Alices points', '3 numbers, separated with space');
    const bobPoints = prompt('Please input Bobs points', '3 numbers, separated with space');
    
    let a = alicePoints.replace(/\s+$/g, '').split(' ').map(aTemp => parseInt(aTemp, 10));
    let b = bobPoints.replace(/\s+$/g, '').split(' ').map(bTemp => parseInt(bTemp, 10));                                               
    
    let isErrorInputA = errorInput(a);
    let isErrorInputB = errorInput(b);
    
    if (isErrorInputA || isErrorInputB) {
        console.log(compareTriplets(a, b))
    } else {
        console.log('Input error');
    }   
}


// Second task - camel case

function secondTask() {
    
    
}