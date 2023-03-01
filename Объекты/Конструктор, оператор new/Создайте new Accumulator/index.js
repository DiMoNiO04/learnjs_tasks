function Accumulator(startingValue) {
	
	this.value = startingValue;

	this.read = function(){
		this.value += +prompt('Добавить число: ', '');
	};
}

let accumulator = new Accumulator(5);