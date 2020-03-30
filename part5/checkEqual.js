function equalReturn(array) {
  var result = array.length > 1 ? array[0] == array[array.length - 1] : false;
  return result;
}
console.log(equalReturn([1, 2, 3]));
console.log(equalReturn([1, 2, 1]));
console.log(equalReturn(1, 2, 3, 4));
