function isPalindrom(number) {
  const stringified = number.toString()
  return stringified === stringified.split('').reverse().join('');
}

const exponent = 3;
const ceil = 10**exponent;

let largestProduct = 0;
let startVal = 1;

for (let factor1 = startVal; factor1 < ceil; factor1++) {
  for (let factor2 = startVal; factor2 < ceil; factor2++) {
    const product = factor1 * factor2;
    if (isPalindrom(product) && product > largestProduct) {
      largestProduct = product;
    }
  }
}

console.log(largestProduct);