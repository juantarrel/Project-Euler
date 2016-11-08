var problem7 = (function () {
    
    var prime,
        primeNumber;

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

    primeNumber = function (n) {
      var position = 0,
          iteration = 1,
          thePrimeNumber;
      
      while (position !== n) {
        thePrimeNumber = prime(iteration);
        if (thePrimeNumber > 0) {
          position++;
        }
        iteration++;
      }
      console.log("Solution: " + thePrimeNumber);
    };

    return {
        isPrime: function (n) {
            return prime(n);
        },
        thePrimeNumber: function (n) {
            return primeNumber(n);
        }
    };
})();
problem7.thePrimeNumber(10001);

