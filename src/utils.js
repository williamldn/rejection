'use strict';

export const loop = (element, body, fnTest, fnUpdate) => {
	const test = fnTest || (value) => value > element.length;
	const update = fnUpdate || (value) => value - 1;
	
	while (test(value)) {
		result = fnBody(value);
		value = fnUpdate(value);
	}

	return result;
}