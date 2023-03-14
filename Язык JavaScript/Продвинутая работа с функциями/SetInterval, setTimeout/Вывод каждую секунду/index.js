'use strict';


function printNumbers(from, to) {
	let tmp = from;

	let timerId = setInterval(function() {
		console.log(tmp);
		if(tmp == to){
			clearInterval(timerId)
		}
		tmp++;
	}, 1000)
}

printNumbers(1, 10)



function printNumbersRec(from, to) {
	let tmp = from;

	setTimeout(function go(){
		console.log(tmp);
		if(tmp != to){
			setTimeout(go, 1000)
		}
		tmp++;
	}, 1000)
}

printNumbersRec(3, 7)