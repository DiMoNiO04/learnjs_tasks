'use strict';

let count = prompt('Введите число ', "");

nextPrime:
for(let i = 2; i <= count; i++){
	for(let j = 2; j < i; j++){
		if( i % j ==0 ) continue nextPrime;
	}
	alert(`Простое число ${i}`)
}