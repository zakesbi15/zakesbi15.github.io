function collatz(x) {
	var l = 0;
	while (x > 1) {
		if (x % 2 == 0) {
			x = x / 2
		}
		else {
			x = 3*x + 1
		}
		console.log(x)
		l +=1
	}
	return l
}

var number = 1333;
l = collatz(number)
console.log("The length is...")
console.log(l)

