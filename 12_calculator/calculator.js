const add = function(n1, n2) {
	return n1 + n2;
};

const subtract = function(n1, n2) {
	return n1 - n2;
};

const sum = function(arr) {
	let total = 0;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    total += element;
  }
  return total;
};

const multiply = function(arr) {
  let total = 1;
  for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    total *= element;
  }
  return total;
};

const power = function(base, exponent) {
  return base ** exponent
};

const factorial = function(n) {
	let total = 1;
  for (let i = 2; i <= n; i++) {
    total *= i;
  }
  return total;
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
