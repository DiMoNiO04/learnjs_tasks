// function makeUser() {
// 	return {
// 	  name: "John",
// 	  ref: this
// 	};
//  }
 
//  let user = makeUser();
 
//  alert( user.ref.name );



// Будет ошибка, так как вызывается как функция а не как метод

function makeUser() {
	return {
	  name: "John",
	  ref() {
		 return this;
	  }
	};
 }
 
 let user = makeUser();
 
 alert( user.ref().name );