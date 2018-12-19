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

for (let right = (pagesUnordered.length / 2), left = (right + 1); (right > 0); right -= 4, left += 4) {
	[-2, 0, 4, 2].forEach((el, m, arr) => {
		pagesOrdered.push(pagesUnordered[right + el]);
		pagesOrdered.push(pagesUnordered[left - el]);
	});
}

console.log(pagesOrdered);

let lines = [];
for (let k = 0, len = pagesOrdered.length, step = 6*4; k < len; k += step) {
	lines.push(pagesOrdered.slice(k, k + step).join(','));
}
console.log(lines.join('\r\n'));
