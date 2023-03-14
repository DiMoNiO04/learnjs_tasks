'use strict';

function makeCounter() {
	let count = 0;
 
	return function() {
	  return count++;
	};
 }
 
 let counter = makeCounter();
 let counter2 = makeCounter();
 
 alert( counter() ); // 0
 alert( counter() ); // 1
 
 alert( counter2() ); // ?
 alert( counter2() ); // ?


 //Два счетчика являются независимыми друг от друга, при вызове у них создаемтся разное
 // лексическое окружениее со своей собственной переменной
 // ответ 0 и 1