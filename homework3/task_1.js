function hackerrankInString () {
    let str = {
        "0" : "h",
        "1" : "a",
        "2" : "c",
        "3" : "k",
        "4" : "e",
        "5" : "r",
        "6" : "r",
        "7" : "a",
        "8" : "n",
        "9" : "k"
    }
    for (let i = 0; i < s.length(); i++) {
        if (q <= str.length()){ 
            if(s.charAt(i) == str.charAt(q)) {
                q++;
            } else {
                return "YES";
            }
        }
    }   
    return "NO";
}