var problem10 = (function () {
    "use strict";
    var prime,
        sumPrimes;

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
    
    sumPrimes = function (n) {
      var x = 1,
          solution = 0;
      while (x<=n) {
        if (prime(x) !== 0) {
          solution += x;
        }
        x++;
      }
      return solution;
    };
    
    return {
        isPrime: function (n) {
          return prime(n);
        },
        findSumPrimes: function (n) {
          return sumPrimes(n);
        }
    };    
})();
problem10.findSumPrimes(2000000);
