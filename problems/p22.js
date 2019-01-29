const fs = require('fs');
const input = fs.readFileSync('../input/p022_names.txt');
const alphabet = [
  'A', 'B', 'C', 'D', 'E', 'F', 'G', 'H', 'I', 'J',
  'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T',
  'U', 'V', 'W', 'X', 'Y', 'Z'
];
const names = input.toString().replace(/"/g, '').split(",").sort();

function valForChar(char) {
  return alphabet.indexOf(char) + 1;
}

const values = names.reduce((memo, name, index) => {
  const value = name.split('').reduce((m, char) => {
    const hi = valForChar(char);
    return m + hi;
  }, 0);
  const result = value * (index+1);
  return memo + result;
}, 0);
