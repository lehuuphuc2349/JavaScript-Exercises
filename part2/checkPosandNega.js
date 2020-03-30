function checkPositiveAndNegative(number1, number2) {
  return (number1 < 0 && number2 > 0) || (number1 > 0 && number2 < 0);
}
console.log(checkPositiveAndNegative(1, 2));
console.log(checkPositiveAndNegative(-1, 2));
console.log(checkPositiveAndNegative(-10, -10));
console.log(checkPositiveAndNegative(0, -1));
console.log(checkPositiveAndNegative(1, -10));
