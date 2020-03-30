function swapDigit(number) {
  if (number % 2 !== 0) {
    return false;
  }
  var result = 0,
    x = 1;
  while (number != 0) {
    var digit1 = number % 10,
      digit2 = ((number - digit1) / 10) % 10;
    result += x * (10 * digit1 + digit2);
    number = Math.floor(number / 100);
    x *= 100;
  }
  return result;
}
console.log(swapDigit(1234));
