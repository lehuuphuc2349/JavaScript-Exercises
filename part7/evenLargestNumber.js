// function largetsNumber(array) {
//   var maxValue = 0;
//   for (var i = 0; i < array.length; i++) {
//     if (array[i] % 2 === 0 && array[i] > maxValue) {
//       maxValue = array[i];
//     }
//   }
//   return maxValue;
// }
// console.log(largetsNumber([2, 20, 200]));
// console.log(largetsNumber([1, 20, 300]));

function maxEven(array) {
  array.sort((x, y) => y - x);
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      return array[i];
    }
  }
}
console.log(maxEven([2, 20, 200]));
console.log(maxEven([1, 20, 300]));
