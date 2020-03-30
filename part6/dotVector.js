function dotVector(array1, array2) {
  var result = 0;
  for (var i = 0; i < array1.length; i++) {
    result += array1[i] * array2[i];
  }
  return result;
}
console.log(dotVector([1, 2, 3], [1, 2, 3]));
console.log(dotVector([2, 4, 6], [2, 4, 6]));
console.log(dotVector([1, 1, 1], [0, 1, -1]));
console.log(dotVector([1, 2, 5], [1, 2, 5]));
