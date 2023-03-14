'use strict';

let list = {
	value: 1,
	next: {
	  value: 2,
	  next: {
		 value: 3,
		 next: {
			value: 4,
			next: null
		 }
	  }
	}
 };


 function printListWhile(list) {
	let tmp = list;

	while(tmp) {
		console.log(tmp.value);
		tmp = tmp.next;
	}
 }

 printListWhile(list)

 

function printListRec(list) {
	console.log(list.value);

	if(list.next){
		printListRec(list.next)
	}
}

console.log(printListRec(list))

//Метод через рекурсию более понятен, но через цикл более эффиктивен