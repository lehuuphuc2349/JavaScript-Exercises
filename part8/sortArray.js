function sortArray(array) {
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      if (array[i].length > array[j].length) {
        var m = array[i];
        array[i] = array[j];
        array[j] = m;
      }
    }
  }
  return array;
}
console.log(sortArray(["", "a", "ab", "abcd", "abc"]));
