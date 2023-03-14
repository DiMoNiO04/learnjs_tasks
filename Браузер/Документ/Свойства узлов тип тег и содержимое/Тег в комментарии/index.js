let body = document.body;

body.innerHTML = "<!--" + body.tagName + "-->";

console.log( body.firstChild.data ); // что выведет?


// 1. Заменяем содержимое body  на комментарий. body.tagName == "BODY" в верхнем регистре, поэтому вид <!--BODY-->
// 2. Этот комментарий теперь является первым потомков body.firstChild
// 3. Значение свойства data является его содержимое внутри =>

// Ответ: BODY