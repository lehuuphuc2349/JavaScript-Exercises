function divArray(array) {
  var result = [0, 0];
  for (var i = 0; i < array.length; i++) {
    if (i % 2) result[1] += array[i];
    else result[0] += array[i];
  }
  return result;
}
console.log(divArray([1, 2, 3, 4, 5]));
