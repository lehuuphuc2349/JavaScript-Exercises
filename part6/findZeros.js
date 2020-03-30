function findZeros(number) {
  var result = 0;
  for (var i = 5; i <= number; i += 5) {
    var num = i;
    while (num % 5 === 0) {
      num /= 5;
      result++;
    }
  }
  return result;
}
console.log(findZeros(5));
