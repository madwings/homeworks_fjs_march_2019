
            let number = [40, 60, 30, 50, 10]
            function aVeryBigSum(number) {
                let sum = 0;
                let count = number.length;
                for (let n = 0; n < count; n++) {
                    sum = sum + number[n];
                }
                return sum / count;
            }
