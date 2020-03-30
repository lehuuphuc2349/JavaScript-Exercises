function lastDigit(number1, number2, number3) {
  var lastDigit =
    (number1 > 0) & (number2 > 0) & (number3 > 0)
      ? number1 % 10 == number2 % 10 &&
        number2 % 10 == number3 % 10 &&
        number1 % 10 == number3 % 10
      : false;
  return lastDigit;
}
console.log(lastDigit(11, 21, 31));
console.log(lastDigit(10, 20, 30));
console.log(lastDigit(0, 0, 0));
