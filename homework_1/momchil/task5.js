function miniMaxSum(arr) {
     arr.sort();
    let minSum = sum(arr.slice(0, -1))
    let maxSum = sum(arr.slice(1))
    console.log(minSum, maxSum)
}

function sum(subArr) {
    return subArr.reduce(function(a, b) {
        return a + b;
    }, 0);
}

    miniMaxSum([1, 4, 2, 5, 3])
    miniMaxSum([42, 24, 12, 57, 3])
    miniMaxSum([100, 102, 101, 103, 104])
