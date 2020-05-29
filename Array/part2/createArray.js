// const createArray = (size, number) => {
//   var result = new Array();
//   result.map();
// };
// console.log(createArray(6, 0));

function array_filled(n, val) {
  return Array.apply(null, Array(n)).map(Number.prototype.valueOf, val);
}

console.log(array_filled(6, 0));
console.log(array_filled(4, 11));
