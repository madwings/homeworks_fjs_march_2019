function superReducedString(s) {
let s = readLine().split('');
    for (let i = 0; i < s.length; i++) {
        if (s[i] === s[i + 1]) {
            s.splice(i, 2);
            i = -1;
        }
    }
    if (s.length === 0) {
        console.log('Empty String');
    } else {
    console.log(s.join(''));
    }
}    