function compareNums() {

    let firstNum = document.getElementById("firtNum").value;
    let secNum = document.getElementById("secondNum").value;
    let checkNum = document.getElementById("checkedNum").value;
  

    if (firstNum > secNum) {
        
        [firstNum,secNum]=[secNum,firstNum]
    }

    if (firstNum < checkNum && checkNum < secNum) {

        document.getElementById("resultValue").innerHTML=`"Number  ${checkNum}  between  ${firstNum}  and  ${secNum}"`;

    } else if (firstNum > checkNum) {

        document.getElementById("resultValue").innerHTML=`"Number ${checkNum}  is smaller than  ${firstNum} and "  ${secNum}`;

    } else if (firstNum == checkNum && checkNum ==secNum) {

        document.getElementById("resultValue").innerHTML=`"Checked Number ${checkNum}  is equal  to   ${firstNum} `;

    } else {

        document.getElementById("resultValue").innerHTML=`"Number ${checkNum}  is bigger than  " ${secNum}`;
    }

}


