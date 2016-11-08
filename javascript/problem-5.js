(function () {
  var solution = 1,
      end = 0,
      toEnd = 20;
  while(solution){
    for (let x=1; x<=toEnd; x++) {
      if (x === toEnd && solution % x === 0 ) {
        end = 1;
        break;
      } else if(solution % x !== 0){
        break;
      }
    }
    if (end === 1) {
      console.log("Solution: " + solution);
      break;
    }
    solution++;
  }
})();
