const removeElement = (array) => {
  var result = [];
  var obj = {};
  for (var x = 0; x < array.length; x++) {
    obj[array[x]] = 0;
  }
  for (var i in obj) {
    result.push(i);
  }
  return result;
};
console.log(removeElement([1, 1, 2, 3, 2, 4, 5, 4]));
