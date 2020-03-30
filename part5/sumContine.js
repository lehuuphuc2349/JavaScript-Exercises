function sumContinued(array, k) {
  let result = 0;
  let temp = 0;
  for (var i = 0; i < k - 1; i++) {
    temp += array[i];
  }
  for (var i = k - 1; i < array.length; i++) {
    temp += array[i];
    if (temp > result) {
      result = temp;
    }
    temp -= array[i - k + 1];
  }
  return result;
}
console.log(sumContinued([1, 2, 3, 4]), 2);
