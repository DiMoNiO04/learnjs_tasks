'use strict';

function extractCurrencyValue(str) {
	return +str.substring(1);
}

alert(extractCurrencyValue('$120'));