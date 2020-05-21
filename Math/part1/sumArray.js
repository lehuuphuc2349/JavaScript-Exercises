// const sumArray = (array) => {
//   var sum = 0;
//   for (var i = 0; i < array.length; i++) {
//     for (var j = i; j < array.length; j++) {
//       sum = array[i] + array[j];
//     }
//   }
//   return sum;
// };
// console.log(sumArray([1, 2, 3]));
// console.log(sumArray([2, 3, 4]));

const sumArray1 = (array) => array.reduce((a, b) => a + b, 0);
console.log(sumArray1([1, 2, 3, 4, 5]));

function sum(array) {
  var result = 0;
  for (var i = 0; i < array.length; i++) {
    result += array[i];
  }
  return result;
}
console.log(sum([1, 2, 3, 3]));
