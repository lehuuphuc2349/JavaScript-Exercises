function findRoundNumber(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 10 === 0) {
      result = i;
    }
  }
  return result;
}
console.log(findRoundNumber([10, 12, 3, 4, 30]));
