function reverseArray(array) {
  return array.map((element, index, arr) => arr[arr.length - 1 - index]);
}
console.log(reverseArray([1, 2, 3]));
