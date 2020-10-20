//for if/else
let dnaStrings = (str) => {
	let dnaArr = [];
	for (i = 0; i < str.length; i += 1) {
		let char = str[i];
		if (char === 'A') {
			dnaArr.push('T');
		} else if (char === 'T') {
			dnaArr.push('A');
		} else if (char === 'G') {
			dnaArr.push('C');
		} else if (char === 'C') {
			dnaArr.push('G');
		}
	}
	let dnaStr = dnaArr.join('');
	return console.log(dnaStr);
};
dnaStrings('ATGC');


//for switch
let dnaStrings = (str) => {
	let dnaArr = [];
	for (i = 0; i < str.length; i += 1) {
		let char = str[i];
		switch (true) {
			case char === 'A':
				dnaArr.push('T');
				break;
			case char === 'T':
				dnaArr.push('A');
				break;
			case char === 'G':
				dnaArr.push('C');
				break;
			case char === 'C':
				dnaArr.push('G');
				break;
		}
	}
	let dnaStr = dnaArr.join('');
	return console.log(dnaStr);
};
dnaStrings('ATGC');


//map object
let dnaStrings = (str) => {
	let arr = str.split('');
	console.log(arr);
};
dnaStrings('hello');
