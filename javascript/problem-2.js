(function(){
	var fibonacci;
	fibonacci = function (n) {
		var a = 0,
			b = 1,
			f = 1,
			sum = 0;

		for (let i=2; i<=n; i++) {
			f = a + b;
			a = b;
			b = f;

			if (f % 2 === 0) {
				sum += f;
			}
			
			if (f >= 4000000) {
				return sum;
			}			
			
		}
	};
	console.log(fibonacci(10000));
})();
