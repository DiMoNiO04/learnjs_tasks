'use strict';

function sumInput() {
	let numbersArr = [];

	while(true) {
		let number = prompt("Введите число: ", "");

		if (number === "" || number === null || !isFinite(number)) break;

		numbersArr.push(+number);
	}

	let sum = 0;
	for (let number of numbersArr) {
		sum += number;
	}

	return sum;
}

alert(sumInput())