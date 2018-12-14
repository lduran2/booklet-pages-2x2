const data = {
	blank: 2,
	first: 1,
	last: 267
}

const pagesUnordered = [];

for (let k = data.first; k <= data.last; ++k) {
	pagesUnordered.push(k);
}

pagesUnordered.splice(pagesUnordered.length - 1, 0, data.blank);

console.log(pagesUnordered);

const pagesOrdered = [];

for (let k = (pagesUnordered.length - 1), l = 0; k > l; k -= 4, l += 4) {
	[0, 2, 1, 3].forEach((el, m, arr) => {
		pagesOrdered.push(pagesUnordered[k - el]);
		pagesOrdered.push(pagesUnordered[l + el]);
	});
}

console.log(pagesOrdered);
console.log(pagesOrdered.join(','));
