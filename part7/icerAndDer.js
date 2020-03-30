function increAndDecre(array) {
  if (array.length == 1) {
    return true;
  }
  var num_direction = array[1] - array[0];
  for (var i = 0; i < array.length - 1; i++) {
    if (num_direction * (array[i + 1] - array[i]) <= 0) {
      return false;
    }
  }
  return true;
}
console.log(increAndDecre([1, 2, 3]));
