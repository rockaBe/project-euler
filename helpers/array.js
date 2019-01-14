const arrayHelpers = {
  initRangeFromTo: (startVal, endVal) => {
    return Array.from(Array(endVal).keys()).map((val) => { return val + startVal; });
  }
}

module.exports = arrayHelpers;
