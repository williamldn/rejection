function getEntries (source, parse, fnSort) {
	const entries = [];
	for (var i = source.length - 1; i >= 0; i--) {
		entries.push(
			parse(source, i)
		);
	}

	return fnSort ? entries.sort(fnSort) : entries;
}

function calculateStore (entries) {
	const total = entries.filter(({status}) => status)
		.reduce((prev, {status}) => {
		if (status === "rejected") {
			return prev + 10;
		} else {
			return prev + 1;
		}
	}, 0);
	return total;
}

/*function calculateStreak (entries) {
	
}
*/

function remRepeatingItems (items) {
	
	/*remove repeating elements from an iterable*/
	if (!items.length) {
		return null;
	}
	if (!items.entries) throw 'expected an iterable';
	return  Array.from(...(new Set(items)));
}

const countConsecItems = function countOfTheConsecutiveItems (items, fnTest) {
	/* reduces an iterable to an array containing the last 
	consecutive elements with respect to a criterion */
	if (!items.entries) {throw 'expected an iterable';}
	if (!fnTest) {throw 'expected a test function';}
	let count = 0;
	for(let [index, item] of items.entries()) {
		const test = fnTest(item, index, items);
		if (!test) {
			count = 1;
		} else if (test > 0){
			count++
		} else {
			break;
		}
	}
	
	return count;
}

/*for (let i = 0, prev = date; i < arr.length; i++) {
  const {date, status} = arr[i];
  if (status === 'rejected') {
    if (!i) {count++;}
    else if (date === prev - DAY) {count++;}
    else {break}
  } else {break}
    prev = date
}*/

/*function sum (addends) {
	if (!addends || !addends.values) return NaN; 
	let result = 0;
	for(let addend of addends.values()) {
		if (typeof addend !== 'number') return NaN;
		rescd reult += addend;
	}
	return result;
}*/

export  {getEntries, calculateStore, remRepeatingItems, countConsecItems}