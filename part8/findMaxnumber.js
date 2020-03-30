function findMaximum(number) {
  var n = 0;
  var i = 0;
  while (n < number) {
    n += i++;
  }
  return i - 2;
}
console.log(findMaximum(11));
console.log(findMaximum(12));
console.log(findMaximum(20));
