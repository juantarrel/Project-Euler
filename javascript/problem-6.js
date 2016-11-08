(function () {
  var sumSquares,
      squareSum,
      sumSquaresNum = 0,
      squareSumNum = 0;
      
  sumSquares = function (n) {
    for (let x=1; x<=n; x++) {
      sumSquaresNum += x * x;
    }
    return sumSquaresNum;
  };
  
  squareSum = function (n) {
    for (let x=1; x<=n; x++) {
      squareSumNum += x;
    }    
    return squareSumNum * squareSumNum;
  };
  
  getSquareSumDiference = function (n) {
    return squareSum(n) - sumSquares(n);
  };
  
  console.log(getSquareSumDiference(100));
})();
