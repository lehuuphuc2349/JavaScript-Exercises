const largets = (array) => Math.max(...array);
console.log(largets([1, 2, 3, 4, 5]));

function larget1s(array) {
  var result;
  var max = 0;
  for (var i = 0; i < array.length; i++) {
    if (max < array[i]) {
      max = array[i];
    }
  }
  return max;
}
console.log(larget1s([1, 2, 3, 45, 5]));
