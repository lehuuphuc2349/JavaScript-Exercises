function sumArray(array) {
  var sum = array.map(element => element + element);
  return sum;
}
console.log(sumArray([1, 2, 2]));
