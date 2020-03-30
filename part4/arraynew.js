function createNewArray(array) {
  var newArray = [];
  newArray.push(array[0], array[array.length - 1]);
  return newArray;
}
console.log(createNewArray([1, 2, 3]));
