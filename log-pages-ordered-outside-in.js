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
pagesUnordered.splice(0, 0, data.blank);
pagesUnordered.splice(pagesUnordered.length - 1, 0, data.blank);

console.log(pagesUnordered);

const pagesOrdered = [];

for (let right = (pagesUnordered.length - 1), left = 0; right > left; right -= 4, left += 4) {
	[0, 2, 1, 3].forEach((el, m, arr) => {
		pagesOrdered.push(pagesUnordered[right - el]);
		pagesOrdered.push(pagesUnordered[left + el]);
	});
}

console.log(pagesOrdered);

let lines = [];
for (let k = 0, len = pagesOrdered.length, step = 6*4; k < len; k += step) {
	lines.push(pagesOrdered.slice(k, k + step).join(','));
}
console.log(lines.join('\r\n'));
