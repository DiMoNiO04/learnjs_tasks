'use strict';

const unique = (arr) => Array.from(new Set(arr))
 
let values = ["Hare", "Krishna", "Hare", "Krishna",
	"Krishna", "Krishna", "Hare", "Hare", ":-O"
];
 
alert( unique(values) );