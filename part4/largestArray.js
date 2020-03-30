function largestArray(array) {
  var maxValue =
    array[0] > array[array.length - 1] ? array[0] : array[array.length - 1];
  for (var i = 0; i < array.length; i++) {
    array[i] = maxValue;
  }
  return array;
}
console.log(largestArray([20, 10, 30]));
