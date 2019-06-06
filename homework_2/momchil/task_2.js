function sockMerchant(n, arr) {
arr.sort((a, b) => a - b);
    let count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === arr[i + 1]) {
            count ++;
            i = i+ 1;
        }
    }
    return count;
}