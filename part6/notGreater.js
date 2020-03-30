function findNotgreater(array, x) {
  var maxValue = -1;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      var y = Math.abs(array[i] - array[j]);
      if (y <= x) {
        maxValue = Math.max(maxValue, y);
      }
    }
  }
  return maxValue;
}
console.log(findNotgreater([12, 10, 33, 34], 10));
console.log(findNotgreater([1, 2, 3, 4], 0));
