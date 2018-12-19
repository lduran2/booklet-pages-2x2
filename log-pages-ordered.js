const data = {
	blank: 2,
	first: 1,
	last: 266
}

const pagesUnordered = [];
for (let k = data.first; k <= data.last; ++k) {
	pagesUnordered.push(k);
}

/* blank pages */
// pagesUnordered.splice(page-num, 0, data.blank);

console.log(pagesUnordered);

const pagesOrdered = [];

for (let left = (data.last >> 1), right = (left - 1); (right > 0); right -= 4, left += 4) {
	[0, -2].forEach((el, m, arr) => {
		pagesOrdered.push(pagesUnordered[right + el]);
		pagesOrdered.push(pagesUnordered[left - el]);
	});
	[1, 3].forEach((el, m, arr) => {
		pagesOrdered.push(pagesUnordered[left + el]);
		pagesOrdered.push(pagesUnordered[right - el]);
	});
}

console.log(pagesOrdered);

let lines = [];
for (let k = 0, len = pagesOrdered.length, step = 6*4; k < len; k += step) {
	lines.push(pagesOrdered.slice(k, k + step).join(','));
}
console.log(lines.join('\r\n'));

/*
 * [1,n] pages
 * 
 * 
 * front:
 * (n/2 + 6) (n/2 - 5)
 * (n/2 + 8) (n/2 - 7)
 * 
 * back:
 * (n/2 - 4) (n/2 + 5)
 * (n/2 - 6) (n/2 + 7)
 * 
 * 
 * front:
 * (n/2 + 2) (n/2 - 1)
 * (n/2 + 4) (n/2 - 3)
 * 
 * back:
 * (n/2)     (n/2 + 1)
 * (n/2 - 2) (n/2 + 3)

 */
