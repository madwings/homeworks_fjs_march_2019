'use strict';
const processData = input => {
    const line = input;
    const words = line.split(/[A-Z]/g);   // В този код, всеки път щом бива прочетена нова главна буква на реда за кода започва нова дума. 
    console.log(words.length);
};
let _input = "";
process.stdin.on("data", input => _input += input);
process.stdin.on("end", () => processData(_input));






//
'use strict';

const processData = input => {
    const line = input;
    const words = line.split(/[A-Z]/g);
    console.log(words.length);
};
let _input = "" ;
process.stdin.on("data", input => _input += input);
process.stdin.on("end", input => processData(_input));
//