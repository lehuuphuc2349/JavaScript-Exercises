function prefixSum(array) {
  var newArray = [];
  for (var i = 0; i < array.length; i++) {
    newArray[i] = 0;
    for (var j = 0; j < i + 1; j++) {
      newArray[i] += array[j];
    }
  }
  return newArray;
}
console.log(prefixSum([1, 2, 3, 4, 5]));
console.log(prefixSum([1, 2, 3]));
