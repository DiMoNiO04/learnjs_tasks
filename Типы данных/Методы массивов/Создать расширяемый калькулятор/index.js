'use strict';

function Calculator() {

	this.methods = {
	  "-": (firstNumber, secondNumber) => firstNumber - secondNumber,
	  "+": (firstNumber, secondNumber) => firstNumber + secondNumber
	};
 
	this.calculate = function(str) {
 
	  	let split = str.split(' ');
		let firstNumber = +split[0];
		let operator = split[1];
		let secondNumber = +split[2];
 
	  	if (!this.methods[operator] || isNaN(firstNumber) || isNaN(secondNumber)) {
		 	return 'Ошибка!';
	  	}
 
	  return this.methods[operator](firstNumber, secondNumber);
	}
 
	this.addMethod = function(name, func) {
	  this.methods[name] = func;
	};
 }



let calc = new Calculator;
alert( calc.calculate("3 + 7") ); 



let powerCalc = new Calculator;
powerCalc.addMethod("*", (a, b) => a * b);
powerCalc.addMethod("/", (a, b) => a / b);
powerCalc.addMethod("**", (a, b) => a ** b);
let result = powerCalc.calculate("2 ** 3");
alert( result ); // 8