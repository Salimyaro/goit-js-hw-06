function rangeOfNumbers(startNum, endNum) {
	let result = [];
	if (endNum === startNum) {
		result[0] = startNum;
	}
	if (startNum < endNum) {
		result = rangeOfNumbers(startNum, endNum - 1);
		result.push(endNum);
	}
	return result;
};
console.log(rangeOfNumbers(1, 5));
console.log(rangeOfNumbers(6, 9));
console.log(rangeOfNumbers(4, 4));