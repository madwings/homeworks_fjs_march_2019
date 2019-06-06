function camelCase(){
    let ch = readLine();
    let count = 0;
    for (let i = 0; i < ch.length; i++) {

        if(ch[i]>= 'A' && ch[i]<= 'Z')  {
                count++
            }
    }
        console.log(count);
}
    