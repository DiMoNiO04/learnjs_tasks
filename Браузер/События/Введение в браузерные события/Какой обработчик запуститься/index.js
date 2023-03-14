button.addEventListener("click", () => alert("1"));

button.removeEventListener("click", () => alert("1"));

button.onclick = () => alert(2);


//Запуститься и ответ будет 1 и 2, так как удаление не сработает , так как необходимо передавать именно ту функцию которую вызываем
// код идентичен , но передается другая функция