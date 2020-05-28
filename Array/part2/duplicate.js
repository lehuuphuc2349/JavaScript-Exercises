var array1 = [1, 2, -2, 4, 5, 4, 7, 8, 7, 7, 71, 3, 6];
var result = Array();
result = array1.filter(
  (value, index, array) => array.indexOf(array[index], index + 1) !== -1
);
console.log(result);
let array2 = [1, 1, 2, 3, 4, 5, 6, 7, 4, 5, 1];
var dup = [];

for (var i = 0; i < array2.length; i++) {
  if (
    dup.indexOf(array2[i]) === -1 &&
    array2.indexOf(array2[i], i + 1) !== -1
  ) {
    dup.push(array2[i]);
  }
}
console.log(dup);
