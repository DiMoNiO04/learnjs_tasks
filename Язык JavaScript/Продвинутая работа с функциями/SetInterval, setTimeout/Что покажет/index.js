'use strict';

let i = 0;

setTimeout(() => alert(i), 100); // ?

// предположим, что время выполнения этой функции >100 мс
for(let j = 0; j < 100000000; j++) {
  i++;
}



//Функция покажет 100000000, т.к. любой вызов setTimeout будет выполнен после завершения текущего кода