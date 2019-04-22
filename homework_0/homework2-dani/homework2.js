function sumOfValueinArray(input){
    let total = 0;
    for (let i=0; i<input.length; i++){
        if (isNaN(input[i])){
            continue;
        }
        total += Number(input[i]);
    }
  return 'The sume of the elements in the array is: ' + total;
 }
console.log(sumOfValueinArray([1,2,3,100,29876]));

function minMaxSum(numbs) {
    let sortArr = numbs.sort();
    var minSum = numbs.slice(0, -1).reduce(function (a,b){
        return a+b;
    });
    var maxSum = numbs.slice(1).reduce(function(a,b){
        return a+b;
    });
    console.log(minSum + " "+  maxSum);
  }
  minMaxSum([1,2,3,4,5]);

  function reduceString(str){
      let arr0 = str.slice('');
      for (let i = 0; i<arr0.length;i++){
          if (arr0[i]===arr0[i+1]){
              arr0.slice(i,2);
              
            }        
      } 
      if (arr0.length ===0){
        console.log("Empty string");
    } else{
        console.log(arr0);
    }  
  }reduceString("aaabccddd");

    

