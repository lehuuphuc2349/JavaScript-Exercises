const appearLength = (array, elements) => {
  var count = 0;
  var letter = elements;
  for (var i = 0; i < array.length; i++) {
    if (letter === array[i]) {
      count++;
    }
  }
  return count;
};
console.log(appearLength([1, 2, 2, 3, 3, 3, 1, 3], 3));
