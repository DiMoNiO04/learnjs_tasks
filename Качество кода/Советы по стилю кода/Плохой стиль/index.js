'use strict';

// function pow(x,n)   // аргументы функции должны быть разделены пробелом после запятой
// {  // скобка должна находится на предыдущей строке
//   let result=1;  // знак равно должен отделятся с обоих сторон пробелам
//   // должен находится вертикальный оступ
//   for(let i=0;i<n;i++) {result*=x;}  // после for должен стоять пробел и все данные в скобках разделены пробелом. Тело функции должно находится на другой строке
// 	//должен находится вертикальный отступ
//   return result;
// }

// let x=prompt("x?",''), n=prompt("n?",'') // знаки рано должны быть разделены запятой, аргументы функции отделены пробелам после запятой и не располагаться в одной строке, единый стиль написания скобок
// if (n<=0) // должно быть разделено пробелами
// { // скобка должна быть на строчку выше
//   alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
// }
// else // на строку выше
// { // на строкку выше
//   alert(pow(x,n)) // функция pow в скобках должна быть разделена пробелами
// }



// Правильный код
function pow(x, n) {
	let result = 1;

	for (let i = 0; i < n; i++) {
		result *= x;
	}

	return result;
}

let x = prompt("x?", "");
let n = prompt("n?", "");

if (n <= 0) {
	alert(`Степень ${n} не поддерживается, введите целую степень, большую 0`);
} else {
	alert( pow(x, n) );
}


