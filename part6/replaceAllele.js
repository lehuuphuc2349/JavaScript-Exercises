function replaceAll(array, old_ele, new_ele) {
  for (var i = 0; i < array.length; i++) {
    if (array[i] == old_ele) {
      array[i] = new_ele;
    }
  }
  return array;
}
console.log(replaceAll([1, 2, 2, 4, 5], 2, 5));
