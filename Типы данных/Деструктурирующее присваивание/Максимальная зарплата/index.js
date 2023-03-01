'use strict';

let salaries = {
	"John": 100,
	"Pete": 300,
	"Mary": 250
};

function topSalary(salaries) {
	
	if(Object.entries(salaries).length === 0) return null;

	let maxSalary = 0;
	let nameResult;

	for (let [name, salary] of (Object.entries(salaries))){
		if(maxSalary < salary) {
			maxSalary = salary;
			nameResult = name;
		}
	}

	return nameResult;
}

alert(topSalary(salaries))