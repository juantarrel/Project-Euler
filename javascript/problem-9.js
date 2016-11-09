(function(){
    "use strict";
    var prime,
        pythagoreanTriplet;

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

    pythagoreanTriplet = function (level) {
        var primeNum = 1,
            x = 1,
            y = 1,
            z = 1;
        for (let i=1; i<=level; i++) {
            primeNum = prime(i);
            if (primeNum !== 0 && primeNum !== 2) {
                y = (primeNum * primeNum - 1) / 2;
                z = (primeNum * primeNum + 1) / 2;
                x = Math.sqrt((z * z) - (y * y));
                console.log("X: " + x + " Y: " + y + " Z: " + z);
                if ( (x + y + z) === 1000) {
                    console.log("X: " + x + " Y: " + y + " Z: " + z);
                    break;
                }
            }
        }
    };
    pythagoreanTriplet(1000);
})();
