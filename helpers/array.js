const arrayHelpers = {
  initRangeFromTo: (startVal, endVal) => {
    return Array.from(Array(endVal).keys()).map((val) => { return val + startVal; });
  },
  initFromInt: (num) => {
    return Array.from(num.toString().split('').map((part) => { return parseInt(part) }))
  }
}

module.exports = arrayHelpers;
