function sumAbsolute(array) {
  var sum = 0;
  for (var i = 0; i < array.length - 1; i++) {
    sum += Math.abs(array[i] - array[i + 1]);
  }
  return sum;
}
console.log(sumAbsolute([1, 2, 3, 2, -5]));
console.log(sumAbsolute([1, 2, 3]));
