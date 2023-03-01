'use strict';

let x = prompt('Введите x ', '');
let n = prompt('Введите n ', '');

if(n < 1){
	alert("n должно быть целым числом (от 1 и больше)")
}else{
	alert(pow(x, n))
}

function pow(x, n){
	return x**n
}