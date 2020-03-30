function evenNumber(array, number) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      result++;
    }
    if (array[i] === number) {
      return result;
    }
  }
}
console.log(evenNumber([1, 2, 3, 4, 5], 4));
