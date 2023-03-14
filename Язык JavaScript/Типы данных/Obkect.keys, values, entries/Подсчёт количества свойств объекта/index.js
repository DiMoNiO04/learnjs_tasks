'use strict';

let user = {
	name: 'John',
	age: 30
};

const count = (object) => Object.keys(object).length;
 
alert( count(user) ); 