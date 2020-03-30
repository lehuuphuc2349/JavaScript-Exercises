function fidPairsDiv(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i] % array[j] === 0 || array[j] % array[i] === 0) {
        result += 1;
      }
    }
  }
  return result;
}
console.log(fidPairsDiv([1, 2, 3]));
console.log(fidPairsDiv([2, 4, 16]));
