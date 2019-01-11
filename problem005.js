const startVal = 1;
const endVal = 100;

let list = [];
for (var i = startVal; i <= endVal; i++) {
  list.push(i);
}

let sumOfSquares = 0;
let squareOfSums = 0;

list.forEach((el, ind) => {
  sumOfSquares += el**2;
  squareOfSums += el;
});

console.log('squareOfSums', squareOfSums**2);
console.log('sumOfSquares', sumOfSquares);
console.log(squareOfSums**2 - sumOfSquares);