function findMax(array, k) {
  for (var i = 0; i < k; i++) {
    var maxIndex = i;
    tmp = array[i];

    for (var j = i + 1; j < array.length; j++) {
      if (array[j] > array[maxIndex]) {
        maxIndex = j;
      }
    }
    array[i] = array[maxIndex];
    array[maxIndex] = tmp;
  }
  return array[k - 1];
}
console.log(findMax([1, 2, 3, 4, 5], 1));
