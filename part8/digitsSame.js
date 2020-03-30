function digitSame(number) {
  var digit = number % 10;
  while (number) {
    if (number % 10 !== digit) return false;
    number = Math.floor(number / 10);
  }
  return true;
}
console.log(digitSame(1111));
