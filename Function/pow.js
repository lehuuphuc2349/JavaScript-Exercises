const powJS = (number, exponent) => Math.pow(number, exponent);
console.log(powJS(2, 3));

const powpow = (number, exponent) => {
  if (number <= 0) {
    return number;
  } else {
    var result = 1;
    for (var i = 0; i <= number; i++) {
      result = number * result;
    }
  }
  return result;
};
console.log(powpow(2, 3));
