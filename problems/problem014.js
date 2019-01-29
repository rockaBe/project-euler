// The following iterative sequence is defined for the set of positive integers:
//
// n → n/2 (n is even)
// n → 3n + 1 (n is odd)
//
// Using the rule above and starting with 13, we generate the following sequence:
//
// 13 → 40 → 20 → 10 → 5 → 16 → 8 → 4 → 2 → 1
// It can be seen that this sequence (starting at 13 and finishing at 1) contains 10 terms. Although it has not been proved yet (Collatz Problem), it is thought that all starting numbers finish at 1.
//
// Which starting number, under one million, produces the longest chain?
//
// NOTE: Once the chain starts the terms are allowed to go above one million.

function evenChain(n) {
  return n/2;
}

function oddChain(n) {
  return 3*n +1;
}

let startVal = 1;
const limit = 1000000;

let currentVal = 0;
let maxChain = [];
let maxStart = 0;

for (startVal=2; startVal<limit; startVal++) {
  let chain = [];
  currentVal = startVal;
  chain.push(currentVal);

  while (currentVal > 0) {
    if (currentVal == 1) { break; }
    currentVal = currentVal%2==0 ? evenChain(currentVal) : oddChain(currentVal);
    chain.push(currentVal);
  }

  if (chain.length > maxChain.length) {
    maxStart = startVal;
    maxChain = chain;
  }
}

console.log(maxChain, maxChain.length, maxStart);
