'use strict';

function camelize(str) {
	return str.split('-') //Разбиваем строку на массив
		.map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
		.join("")
}

alert(camelize('background-color'))