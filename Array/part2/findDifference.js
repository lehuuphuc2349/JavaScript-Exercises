const findDifference = (array1, array2) => {
  var temp = [];
  array1.toString().split("").map(Number);
  array2.toString().split("").map(Number);
  for (var i in array1) {
    if (array2.indexOf(array1[i]) === -1) temp.push(array1[i]);
  }
  for (var i in array2) {
    if (array1.indexOf(array2[i]) === -1) temp.push(array2[i]);
  }
  return temp.sort((a, b) => a - b);
};
console.log(findDifference([1, 4, 3], [4, 3, 5]));
