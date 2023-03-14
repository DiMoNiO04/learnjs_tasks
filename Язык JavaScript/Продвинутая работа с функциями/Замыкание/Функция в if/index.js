'use strict';

let phrase = "Hello";

if (true) {
  let user = "John";

  function sayHi() {
    alert(`${phrase}, ${user}`);
  }
}

sayHi();

//Будет ошибка так как функция sayHi объявлена в блоке if, 
// она видна и выполняется только в блоке if, за его пределами нет
// "все что создано в Вегасе остается в Вегасе"