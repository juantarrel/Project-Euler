var problem3 = (function () {
    "use strict";
    var prime,
        primesFactor;

    prime = function (n) {
        if (n === 1) {
            return 0;
        }
        for (let x=2; x<=n-1; x++) {
            if (n % x === 0) {
                return 0;
            }
        }
        return n;
    };

    primesFactor = function (n) {
        var thePrimesFactor = [],
            posiblePrime,
            primeNum,isIntegerDiv = 1,
            divNum,
            resultDivPrim;
        for (let x=1, y=2; x<=n; x=x+2) {
            posiblePrime = x;
            if (x === 1) {
                posiblePrime = y;
                resultDivPrim = n;
            }

            primeNum = prime(posiblePrime);

            while (isIntegerDiv !== 0 && primeNum !== 0) {
                divNum = resultDivPrim / primeNum;
                if (Number.isInteger(divNum)) {
                    isIntegerDiv = 1;
                    resultDivPrim = divNum;
                    thePrimesFactor.push(primeNum);
                    if (divNum === 1) {
                        break;
                    }
                } else {
                    isIntegerDiv = 0;
                }

            }

            if(divNum === 1){
                break;
            }
            isIntegerDiv = 1;
        }
        console.log(thePrimesFactor);
    };

    return {
        isPrime: function (n) {
            return prime(n);
        },
        thePrimesFactor: function (n) {
            return primesFactor(n);
        }
    };
})();
problem3.thePrimesFactor(600851475143);










































