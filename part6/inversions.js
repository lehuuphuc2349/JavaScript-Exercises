function inversions(array) {
  var ctr = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] > array[j]) {
        ctr++;
      }
    }
  }
  return ctr;
}
console.log(inversions([1, 2, 3, 4, 5]));
console.log(inversions([1, 3, 4, 2, 6]));
console.log(inversions([1, 2, 3]));
