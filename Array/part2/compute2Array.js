var array1 = [1, 2, 3, 4];
var array2 = [5, 6, 7, 8, 9];
var length = Math.max(array1.length, array2.length);

var result = Array();
for (var i = 0; i < length; i++) {
  result.push((array1[i] || 0) + (array2[i] || 0));
}
console.log(result);

function Sol2() {
  var array1 = [16, 0, 2, 3, 1];
  var array2 = [3, 5, 6, 7, 8, 13];
  var array3 = Array();
  if (array1.length > array2.length) {
    array3 = array1.map(function (num, i) {
      return num + (array2[i] || 0);
    });
  } else
    array3 = array2.map(function (num, i) {
      return num + (array1[i] || 0);
    });
  console.log(array3);
}
Sol2();
