function main() {
    const arr = readLine().split(' ').map(arrTemp => parseInt(arrTemp, 10));
    arr.sort();
    console.log((arr[0] + arr[1] + arr[2] + arr[3]) + ' ' + (arr[1] + arr[2] + arr[3] + arr[4]));
}