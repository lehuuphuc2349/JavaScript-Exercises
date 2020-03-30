function maxDiff(array) {
  var temp = 0;
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    for (var k = 0; k != i && k < array.length; k++) {
      temp = Math.abs(array[i] - array[k]);
      max = Math.max(temp, max);
    }
  }
  return max;
}
console.log(maxDiff([1, 2, 3, 4]));
console.log(maxDiff([1, 2, 3, 4, 5, 6]));
