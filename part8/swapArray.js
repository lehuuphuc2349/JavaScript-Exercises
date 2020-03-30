function swapArray(array) {
  if (array.length % 2 !== 0) {
    return false;
  }
  for (var i = 0; i < array.length / 2; i++) {
    var tmp = array[i];
    array[i] = array[i + array.length / 2];
    array[i + array.length / 2] = tmp;
  }
  return array;
}
console.log(swapArray([1, 2, 3, 4, 5, 6]));
