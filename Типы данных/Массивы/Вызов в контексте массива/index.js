let arr = ["a", "b"];

arr.push(function() {
  alert( this );
});

arr[2](); // ?



// Изначально массив содержит два элемента
// Мы добавляем в конец третий элемент функцию
// Функция выведет весь массив: a, b, function