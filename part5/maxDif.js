function maxDif(array) {
  var max = -1;
  var temp;
  for (var i = 0; i < array.length - 1; i++) {
    temp = Math.abs(array[i] - array[i + 1]);
    max = Math.max(max, temp);
  }
  return max;
}
console.log(maxDif([1, 2, 3, 8, 9]));
