'use strict';

const getDateAgo = (date, days) => {

	let newDate = new Date(date);

	date.setDate(date.getDate() - days)
	return date.getDate()
}


let date = new Date(2023, 2, 21);
alert( getDateAgo(date, 45) ); 