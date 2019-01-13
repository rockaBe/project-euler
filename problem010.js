const primeHelpers = require('./helpers/prime');

const limit = 2000000;
let primeArray = [];

for (let i=0; i<=limit; i++) {
  if (primeHelpers.isPrime(i)) {
    primeArray.push(i);
  }
}

function reducer(memo, element) {
  return memo + element;
};

function sumOfPrimes() {
  return primeArray.reduce(reducer);
};

console.log('The sum of all primes: ', sumOfPrimes());
