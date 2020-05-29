// const move = (start, end) => {};
// const converse = (array, start, end) => {
//   var result = new Array();
//   return result.toString().substring(start, end).reverse();
// };

// var arr = [1, 2, 3, 4, 5];

// arr.push.apply(arr, arr.splice(0, noOfItems));
// // console.log(arr);

// const move = (array, start, end) => {
//   array.unshift.apply(array, array.splice(start, end));
//   return array;
// };
// console.log(move([1, 2, 3, 4, 5], 0, 2));

function move(arr, old_index, new_index) {
  while (old_index < 0) {
    old_index += arr.length;
  }
  while (new_index < 0) {
    new_index += arr.length;
  }
  if (new_index >= arr.length) {
    var k = new_index - arr.length;
    while (k-- + 1) {
      arr.push(undefined);
    }
  }
  arr.splice(new_index, 0, arr.splice(old_index, 1)[0]);
  return arr;
}
console.log(move([10, 20, 30, 40, 50], 0, 2));
console.log(move([10, 20, 30, 40, 50], -1, -2));

var array = [1, 2, 3, 4, 5];
array.splice(2, 0, array.splice(2, 1)[0]);
console.log(array);
