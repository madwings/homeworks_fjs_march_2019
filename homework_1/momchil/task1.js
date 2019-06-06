
            let alice = [40, 50, 60]
            let bob = [20, 25, 60]

            function compareTriplets(a, b) {
                let aPoint = 0;
                let bPoint = 0;
                for(let i = 0; i <= 2; i++) {
                    if(a[i] > b[i]) {
                        aPoint++    
                    } else if(a[i] < b[i]) {
                        bPoint++
                    }
                }
                return [aPoint, bPoint]
            } 

            console.log(compareTriplets(alice, bob))
            
            let rates = [
                [],
                []
            ]

            for(let n = 0; n <= 1; n++) { 
                if(n === 0) {
                    alert("Enter a number for Alice")
                } else {
                    alert("Enter a number for Bob")
                }               
                for(let i = 0; i <= 2; i++) {
                     rates[n].push(parseInt(prompt("enter a number:")))
                } 
            }

            console.log(compareTriplets(rates[0], rates[1]))
