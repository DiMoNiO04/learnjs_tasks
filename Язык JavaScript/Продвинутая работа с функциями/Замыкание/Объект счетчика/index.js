'use strict';


function Counter() {
	let count = 0;
 
	this.up = function() {
	  return ++count;
	};
	this.down = function() {
	  return --count;
	};
 }
 
 let counter = new Counter();
 
 alert( counter.up() ); // 1
 alert( counter.up() ); // 2
 alert( counter.down() ); // 1



 //Двум функциям соответствует одно и тоже внешнее лексическое значение 
 // которое содержит обшую для них переменную
