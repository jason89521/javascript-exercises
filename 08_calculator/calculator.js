const add = function(a, b) {
	return a + b;
};

const subtract = function(a, b) {
	return a- b;
};

/**
 * 
 * @param {Array} numbers 
 * @returns 
 */
const sum = function(numbers) {
	return numbers.reduce(function(prev, current){
    return prev + current;
  }, 0)
};

/**
 * @param {Array} numbers
 */
const multiply = function(numbers) {
  return numbers.reduce(function(prev, current){
    return prev * current;
  }, 1)
};

const power = function(a, b) {
	return Math.pow(a, b);
};

const factorial = function(n) {
	let result = 1;
  for(let i = 1; i <= n; i++)
    result *= i;
  return result;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};
