'use strict';

let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [ vasya, petya, masha ];

const getAverageAge = (arr) => arr
	.map(item => item.age)
	.reduce((prev, item) => prev + item, 0) / arr.length;

alert( getAverageAge(arr) ); 