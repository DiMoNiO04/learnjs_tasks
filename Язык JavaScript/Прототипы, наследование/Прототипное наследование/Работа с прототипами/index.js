'use strict';

let animal = {
	jumps: null
 };
 let rabbit = {
	__proto__: animal,
	jumps: true
 };
 
 alert( rabbit.jumps ); // ? (1)
 
 delete rabbit.jumps;
 
 alert( rabbit.jumps ); // ? (2)
 
 delete animal.jumps;
 
 alert( rabbit.jumps ); // ? (3)


// (1) - выведет true, так как изначально это свойство есть у rabbit
// (2) - выведет null, так как мы удалили это свойство у rabbit и оно теперь ищет это свойство у прототипа
// (3) - выведет undefined , так как мы удалили у animal и теперь этого свойства нигде нету