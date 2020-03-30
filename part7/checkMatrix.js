function checkMatrix(users_matrix) {
  for (var i = 0; i < users_matrix.length; i++) {
    for (j = 0; j < users_matrix[0].length; j++) {
      if (j > i && users_matrix[i][j] !== 0) {
        return false;
      }
    }
  }
  return true;
}
console.log(
  checkMatrix([
    [1, 0, 0],
    [2, 0, 0],
    [0, 3, 3]
  ])
);
console.log(
  checkMatrix([
    [1, 0, 1],
    [2, 0, 0],
    [0, 3, 3]
  ])
);
