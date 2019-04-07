function compareNums() {

    let firstNum = document.getElementById("firtNum").value;
    let secNum = document.getElementById("secondNum").value;
    let checkNum = document.getElementById("checkedNum").value;
  

    if (firstNum > secNum) {
        
        [firstNum,secNum]=[secNum,firstNum]
    }

    if (firstNum < checkNum && checkNum < secNum) {

        document.getElementById("resultValue").innerHTML=`Числото  ${checkNum}  е между  ${firstNum}  и  ${secNum}`;

    } else if (firstNum > checkNum) {

        document.getElementById("resultValue").innerHTML=`Числото ${checkNum}  е по - малко от  ${firstNum} и ${secNum}`;

    } else if (firstNum == checkNum && checkNum ==secNum) {

        document.getElementById("resultValue").innerHTML=`Числото  ${checkNum}  е еднакво с другите `;

    } else {

        document.getElementById("resultValue").innerHTML=`Числото ${checkNum}  е по- голямо от  ${secNum}`;
    }

}


