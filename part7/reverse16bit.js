function reverse16Bit(number) {
  var result = 0;
  for (var i = 0; i < 16; i++) {
    result = result * 2 + (number % 2);
    number = Math.floor(number / 2);
  }
  return result;
}
console.log(reverse16Bit(123));
