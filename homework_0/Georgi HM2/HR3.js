function aVeryBigSum(ar) {
    let sum = ar.reduce((a, b) => a + b);
    return sum
}

//Може и по двата начина, вторият е възможно най-опростен.//

function aVeryBigSum(ar) {
    return ar.reduce((a, b) => a+b);
}