function print() {
    let a1 =  document.getElementsByName('a1')[0].value;;
    // console.log(a1);
    let b1 = document.getElementsByName('b1')[0].value;;
    // console.log(b1);
     let a2 =  document.getElementsByName('a2')[0].value;;
    // console.log(a2);
    let b2 = document.getElementsByName('b2')[0].value;;
    // console.log(b2);
    let a3 =  document.getElementsByName('a3')[0].value;;
    // console.log(a3);
    let b3 = document.getElementsByName('b3')[0].value;;
    // console.log(b3);

    let alice = [];
    alice.push (a1,a2,a3);
    console.log (alice);

    let bob = [];
    bob.push(b1,b2,b3);
    console.log(bob);

    let bobresult = 0;
    let aliceresult = 0;

    for( let i = 0; i < alice.length; i++){
      if(alice[i]>bob[i]){
        aliceresult++;
        console.log('Point for Alice ' + aliceresult);
      }if (alice[i]<bob[i]){
        bobresult++;
        console.log('Point for Bob ' + bobresult);
      }
    }
    return[aliceresult,bobresult];
   
  }
