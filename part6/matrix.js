function matrix(users_matrix) {
  for (var i = 0; i < users_matrix.length; i++) {
    for (var j = 0; j < users_matrix.length; j++) {
      if (i !== j && users_matrix[i][j] !== 0) {
        return false;
      }
    }
    return true;
  }
}
console.log(
  matrix([
    [1, 0, 0],
    [0, 3, 0],
    [0, 0, 3]
  ])
);
