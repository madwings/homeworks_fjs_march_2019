function sockMerchant(n, ar) {
    var totalPairs = 0;
    var sockPairing = {};

    for (var i = 0; i < n; i++) {
        if (ar[i] in sockPairing) {
            sockPairing[ar[i]] = sockPairing[ar[i]] + 1;
        } else {
            sockPairing[ar[i]] = 1;
        }
    }
    for (var j in sockPairing) {
        if (sockPairing.hasOwnProperty(j)) {
            totalPairs = totalPairs + ~~(sockPairing[j] / 2);
        }
    }

    return totalPairs;
}