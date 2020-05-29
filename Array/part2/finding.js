const finding = (array, findNumber) => {
  var result = array;
  for (var i = 0; i < array.length; i++) {
    if (array[i] == findNumber) {
      return true;
    }
    return false;
  }
};
console.log(finding([1, 2, 3], 1));
console.log(finding([1, 2, 3, 4, 5, 6, 7, 9], 10));
