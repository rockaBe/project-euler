let sumOfSquares = 0;
let sum = 0;

for (let i=1; i<=100; i++) {
  sumOfSquares += i*i;
  sum += i;
}

const squareOfSums = sum * sum;

console.log('sumOfSquares: ', sumOfSquares);
console.log('squareOfSums: ', squareOfSums);
console.log('Differenco sumOfSquares and squareOfSums: ', Math.abs(squareOfSums - sumOfSquares));
