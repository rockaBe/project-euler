const arrayHelpers = require('./helpers/array');

const startNum = 1;
const finalNum = 20;
const topLimit = arrayHelpers.initRangeFromTo(startNum, finalNum).reduce((memo, val) => {
  return memo * val;
}, 1);
let maxHits = 0;
let result = finalNum;

function hitsAll(hit, startNum, finalNum) {
  const list = arrayHelpers.initRangeFromTo(startNum, finalNum);
  const hits = list.map((el) => { return hit%el === 0; }).filter((el) => { return !!el }).length;
  return hits;
}

while (result < topLimit) {
  result += finalNum;
  const hits = hitsAll(result, startNum, finalNum);
  if (hits > maxHits) {
    maxHits = hits;
  };
  if (hits === finalNum) {
    console.log('result:', result);
    break;
  }
}
