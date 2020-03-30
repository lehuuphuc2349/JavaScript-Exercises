function addTwoNumber(number1, number2) {
  var result = 0;
  x = 1;
  while (number1 > 0 && number2 > 0) {
    result += x * ((number1 + number2) % 10);
    number1 = Math.floor(number1 / 10);
    number2 = Math.floor(number2 / 10);
    x *= 10;
  }
  return result;
}
console.log(addTwoNumber(222, 911));
