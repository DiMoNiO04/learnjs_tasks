'use strict';

//Через цикл
function sumToFor(x) {
	let result = 0;
	for(let i = 1; i <= x; i++) {
		result += i;
	}
	return result
}

console.log(sumToFor(4))


//Через рекурсию
function sumToRec(x) {
	if(x == 1) {
		return x;
	}else{
		return x + sumToRec(x - 1);
	}
}

console.log(sumToRec(4))


//Через прогрессию
function sumToProgg(x) {
	return x * (x + 1) / 2;
}

console.log(sumToProgg(4))

//Самый быстрый sumToProg т.к. функция выполняет три действия сложения, умножение и деление
//Второй по скорости вариант через цикл , так как он выполнятся x раз, но если x<=3 , то он будет самым быстрым
//Самый медленный вариант рекурсия