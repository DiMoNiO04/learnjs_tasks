'use strict';

function makeCounter() {
	let count = 0;

	function counter() {
		return count++;
	}

	counter.set = value => count = value;
	counter.descrease = () => count--;

	return counter;
}