const exponent = (number, expo) => {
  if (number === 0) {
    return 0;
  } else if (expo === 0) {
    return 1;
  } else {
    var result = exponent(number, expo - 1);
    result *= number;
  }
  return result;
};
console.log(exponent(2, 3));
