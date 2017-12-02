function find(haystack) {
	let i = -1, ii = haystack.length, total = 0;

	do {
		total += (i + 1 < ii && haystack[i] === haystack[i + 1]) ? Number(haystack[i]) : 0;
	} while (i++ < ii);

	console.log(`${ (haystack[0] === haystack[ii - 1] ? (total + Number(haystack[0])) : total) }`);
}