function countingValleys(n, s) {
    let nValley = 0, down = 0, up = 0;
    for (let i = 0; i < n; i++) {
        if (s[i] == "D")  {
            down++;
        } else {
            up++;
        }
        if (down - up == 0 && s[i] == "U") { 
            nValley++;
        }
    }
    return (nValley);
}