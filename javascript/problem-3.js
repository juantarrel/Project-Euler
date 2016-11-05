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
        primeNum;
    for (let x=1, y=2; x<=n; x=x+2) {
      posiblePrime = x;
      if (x === 1) {
        posiblePrime = y;
      } 
      primeNum = prime(posiblePrime);
      if (primeNum !== 0 && n % primeNum === 0) {
        thePrimesFactor.push(primeNum);
      }
    }
    console.log(thePrimesFactor);
  };
  
  return {
    isPrime: function (n) {
      return prime(n);
    },
    thePrimesFactor: function () {
      return primesFactor(n);
    }
  };
})();
