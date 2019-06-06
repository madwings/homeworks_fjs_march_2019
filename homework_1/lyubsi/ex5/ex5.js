  let arr = [12,3,4,5,7,2]
  
  arr.sort((a, b) => a - b);
  let min = 0;
  let max = 0;
  let i = arr.length;
  while (i--) {
      if (i < arr.length - 1) min += arr[i];
      if (i > 0) max += arr[i];
  }
  console.log(min, max)


