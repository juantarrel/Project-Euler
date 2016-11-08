(function () {
  var mults,
      multi,
      palindrome = [];
  for (let x=100; x<=999; x++) {
    for (let y=100; y<=999; y++) {
      multi = x * y ;
      mults = (multi + "").split("");
      if (mults.length === 6 &&
          mults[0] === "9" &&
          mults[0] === mults[5] &&
          mults[1] === mults[4] &&
          mults[2] === mults[3]) {
        palindrome.push(mults.toString());
      }
      
    }
  }
  console.log(palindrome);
})();
