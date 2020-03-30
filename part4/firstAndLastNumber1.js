function checkOneArray(array) {
  return array[0] == 1 || array[array.length - 1];
}
console.log(checkOneArray([1, 2, 3]));
console.log(checkOneArray([0, 1, 0]));
