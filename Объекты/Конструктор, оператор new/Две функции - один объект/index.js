// function A() { ... }
// function B() { ... }

// let a = new A();
// let b = new B();

// alert( a == b ); // true





// Да возможно, если функция возвращает объект

let obj = {};

function A() { return obj; }
function B() { return obj; }

alert( new A() == new B() );