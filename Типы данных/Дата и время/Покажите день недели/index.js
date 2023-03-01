'use strict';

function getWeekDay(date) {
	let days = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];

	return days[date.getDay()];
}

let date = new Date(2023, 2, 21);
alert(getWeekDay(date));