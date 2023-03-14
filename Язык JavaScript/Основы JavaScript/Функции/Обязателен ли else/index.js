'use strict';

function checkAge(age) {
	if (age > 18) {
	  return true;
	} else {
	  // ...
	  return confirm('Родители разрешили?');
	}
 }

 function checkAge(age) {
	if (age > 18) {
	  return true;
	}
	// ...
	return confirm('Родители разрешили?');
 }


 // Оба варианта будут работать одинаково, так как в случае проверки в if
 // функция прервется и не дойдет до else