function Calculator() {
	
	this.read = function() {
		this.firstNumber = +prompt('a: ', '');
		this.secondNumber = +prompt('b: ', '');
	};

	this.sum = function() {
		return this.firstNumber + this.secondNumber;
	};

	this.mult = function() {
		return this.firstNumber * this.secondNumber;
	}
}

let calculator = new Calculator();