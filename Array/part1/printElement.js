var a = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [9, 10, 11, 12],
];
for (var i in a) {
  console.log("row" + i);
  for (var j in a[i]) {
    console.log(" " + a[i][j]);
  }
}

var b = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];
for (var i in b) {
  console.log("row" + i);
  for (var j in b[i]) {
    console.log("" + b[i][j]);
  }
}
