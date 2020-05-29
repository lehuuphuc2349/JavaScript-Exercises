const arrayRange = (start, end) => {
  var result = new Array(end);
  for (var i = 0; i < end; i++, start++) {
    result[i] = start;
  }
  return result;
};
console.log(arrayRange(1, 4));
console.log(arrayRange(-6, 4));
