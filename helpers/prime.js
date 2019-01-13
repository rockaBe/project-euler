const primeHelpers = {
  isPrime: (num) => {
    for (let i=2, s=Math.sqrt(num); i<=s; i++) {
      if (num % i === 0) {
        return false;
      }
    }
    return num !== 1 && num !== 0;
  }
}

module.exports = primeHelpers;
