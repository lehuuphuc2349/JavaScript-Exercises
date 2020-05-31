const Mindate = (arrayDate) => {
  var result = [];
  for (var i = 0; i < arrayDate.length; i++) {
    result.push(arrayDate[i]);
  }
  var min = result[0];
  var minObj = new Date(result[0]);
  result.forEach(function (date, index) {
    if (new Date(date) < minObj) {
      min = date;
      minObj = new Date(date);
    }
  });
  return min;
};
console.log(Mindate(["2015/02/01", "2015/02/02", "2015/01/03"]));

var array = ["2015/02/01", "2015/02/02", "2015/01/03"];
var min = array.reduce(function (a, b) {
  return a < b ? a : b;
});
console.log(min);
var max = array.reduce(function (a, b) {
  return a > b ? a : b;
});
console.log(max);

var array1 = [1, 2, 3, 3, 4, 5, 6, 7, 10];
var max1 = array1.reduce(function (a, b) {
  return a > b ? a : b;
});

console.log(max1);
