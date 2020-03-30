function permutation(array, number) {
  for (var i = 0; i < number; i++) {
    if (!array.includes(i + 1)) {
      return false;
    }
  }
  return true;
}
console.log(permutation([1, 2, 3, 4, 5], 5));
console.log(permutation([1, 2, 3, 5], 5));
