const primeHelpers = require('./helpers/prime');

let primeArray = [2];
let counter = 3;
const goal = 10001;

while (primeArray.length < goal) {
  if (primeHelpers.isPrime(counter)) {
    primeArray.push(counter);
    console.log('primeArray.last => ', primeArray[primeArray.length-1])
    console.log('primeArray.length: ', primeArray.length);
  }
  counter++;
}

console.log(`${goal}th primeNumber: `, primeArray[primeArray.length-1]);
