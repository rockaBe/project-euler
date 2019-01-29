let a = 0;
let b = 1;
let c = 2;
let s = 1000;

let found = false;

for (a=1; a<s/3; a++) {
  for (b=a+1; b<s/2; b++) {
    c = s - a - b;
    if (a*a + b*b == c*c) {
      found = true;
      break;
    }
  }
  if (found) {
    break;
  }
}

console.log(`${a}^2 + ${b}^2 = ${c}^2 => ${a*a} + ${b*b} = ${c*c}`);
console.log(`-- keeping the sum of all 3 numbers ${a} + ${b} + ${c} = 1000`);
console.log(`the product a*b*c equals: ${a*b*c}`);
