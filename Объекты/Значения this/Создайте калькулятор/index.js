let calculator = {
	
	read() {
		this.firstNumber = +prompt('a: ', '');
		this.secondNumber = +prompt('b: ', '');
	},

	sum() {
		return this.firstNumber + this.secondNumber;
	},

	mul() {
		return this.firstNumber * this.secondNumber;
	}
}