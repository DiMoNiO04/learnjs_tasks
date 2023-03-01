'use strict';

let users = [
	{id: 'john', name: "John Smith", age: 20},
	{id: 'ann', name: "Ann Smith", age: 24},
	{id: 'pete', name: "Pete Peterson", age: 31},
 ];


 function groupById(users) {
	return users.reduce((object, item) => {
		object[item.id] = item;
		return object
	}, {});
 }
 
 let usersById = groupById(users);

alert(usersById)