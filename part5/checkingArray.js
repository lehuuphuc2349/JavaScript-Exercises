function checkingArray(array1, array2) {
  for (var i = 0; i < array1.length; i++) {
    for (var j = i; j < array2.length; j++) {
      var result = true;
      temp = array1[i];
      array1[j] = array1[i];
      array1[j] = temp;
      for (var k = 0; k < array1.length; k++) {
        if (array1[k] !== array2[k]) {
          result = false;
          break;
        }
      }
      if (result) {
        return true;
      }
      array1[j] = array1[i];
      array1[i] = temp;
    }
  }
  return false;
}
console.log(checkingArray([1, 2, 3], [3, 4, 5]));
