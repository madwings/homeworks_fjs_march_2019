function print() {
 let a =  document.getElementsByName('a')[0].value;;
    // console.log(a);
if(Number(a)){
    for (let i = 1; i <= a; i++){ 
        console.log(' '.repeat(a - i) + '#'.repeat(i)) 
    }
}  else{
    console.log('A is not a number!!! -_-')
}

}