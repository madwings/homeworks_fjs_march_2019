function countingValleys(n, s) {
    let altitude = 0;
    let valleys = 0;

    for (var i = 0; i < n; i++) {
        if (s.charAt(i) === "D" && altitude == 0) {
            valleys++;
            altitude--;
        } else if (s.charAt(i) === "D" && altitude !== 0) {
            altitude--;
        } else if (s.charAt(i) === "U") {
            altitude++;
        }
    }
    return valleys;
}