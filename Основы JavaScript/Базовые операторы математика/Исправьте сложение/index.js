//Ошибка в том что prompt возвращает строковые данные которые вел пользователь и нам их нужно привести к числу
'use strict';

let a = +prompt("Первое число?", 1);
let b = +prompt("Второе число?", 2);

alert(a + b); 