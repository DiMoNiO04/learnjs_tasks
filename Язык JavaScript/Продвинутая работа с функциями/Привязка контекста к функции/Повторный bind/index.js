'use strict';

function f() {
	alert(this.name);
 }
 
 f = f.bind( {name: "Вася"} ).bind( {name: "Петя"} );
 
 f(); 


// Итог будет "Вася", так как функция возвращает первый объект при вызове создания
// следующий bind будет создан для преддыщего bind