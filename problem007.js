const primeHelpers = require('./helpers/prime');

let primeArray = [];
let counter = 2;
const goal = 10001;

while (primeArray.length < goal) {
  if (primeHelpers.isPrime(counter)) {
    primeArray.push(counter);
  }
  counter++;
}

console.log(`${goal}th primeNumber: `, primeArray[primeArray.length-1]);
