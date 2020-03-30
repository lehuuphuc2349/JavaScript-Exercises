function rotateArray(array) {
  if (array.length == 3) {
    for (var i = 1; i < array.length; i++) {
      array[array + i];
    }
    return array;
  }
}
console.log(rotateArray([1, 2, 3]));
console.log(rotateArray([1, 2, 3, 4]));
