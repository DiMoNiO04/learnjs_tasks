'use strict';

let animal = {
	eat() {
	  this.full = true;
	}
 };
 
 let rabbit = {
	__proto__: animal
 };
 
 rabbit.eat();

// Rabbit, так как this унаследует то что стоит перед точкой