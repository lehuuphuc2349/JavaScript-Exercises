const targetNumber = (array, target) => {
  var result = new Array();
  var sum = 0;
  for (var i = 0; i < array.length; i++) {
    for (var j = i + 1; j < array.length; j++) {
      sum = array[i] + array[j];
      if (sum == target) {
        result.push(i, j);
      }
    }
  }
  return result;
};
console.log(targetNumber([1, 2, 3, 4, 4], 8));
