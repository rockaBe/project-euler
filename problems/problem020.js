// Factorial digit sum
// n! means n × (n − 1) × ... × 3 × 2 × 1
//
// For example, 10! = 10 × 9 × ... × 3 × 2 × 1 = 3628800,
// and the sum of the digits in the number 10! is 3 + 6 + 2 + 8 + 8 + 0 + 0 = 27.
//
// Find the sum of the digits in the number 100!
const arrayHelpers = require('../helpers/array');
const value = 100;

const factorial = (num) => {
  if (num == 1) { return 1; }
  else {
    return num * factorial(num-1);
  }
}

const result = factorial(value);
// const result = arrayHelpers.initFromInt(factorial(value)).reduce((memo, el) => {
//   return memo + el;
// }, 0);

console.log(result);
