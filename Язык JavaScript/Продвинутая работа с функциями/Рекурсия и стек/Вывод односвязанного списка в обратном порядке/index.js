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
 

 function printReverseListRec(list) {
	if(list.next) {
		printReverseListRec(list.next)
	}

	console.log(list.value)
}

console.log(printReverseListRec(list))


function printReverseListWhile (list) {
	let arr = [];
	let tmp = list;

	while(tmp) {
		arr.push(tmp.value);
		tmp = tmp.next
	}

	for(let i = arr.length; i != 0; i--){
		console.log(arr[i])
	}
}

console.log(printReverseListRec(list))

