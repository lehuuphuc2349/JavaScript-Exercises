function checkELements(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    if (array1.indexOf(array2[i]) != -1) {
      return true;
    }
  }
  return false;
}
console.log(checkELements([1, 2, 3], [3, 4, 5]));
console.log(checkELements([1, 2, 3], [4, 5, 6]));
