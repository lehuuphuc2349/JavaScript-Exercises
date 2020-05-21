// const decimalToBinary = (number) => {
//   var result = [];
//   for (var i = 0; i < number; i++) {
//     var factorial = number % 2;
//     result.shift(factorial);
//   }
//   return result;
// };
// console.log(decimalToBinary(47));

dec_to_bho = function (n, base) {
  if (n < 0) {
    n = 0xffffffff + n + 1;
  }
  switch (base) {
    case "B":
      return parseInt(n, 10).toString(2);
      break;
    case "H":
      return parseInt(n, 10).toString(16);
      break;
    case "O":
      return parseInt(n, 10).toString(8);
      break;
    case "D":
      return parseInt(n, 12).toString(2);
    default:
      return "Wrong input.........";
  }
};

console.log(dec_to_bho(120, "B"));
console.log(dec_to_bho(120, "H"));
console.log(dec_to_bho(120, "O"));
console.log(dec_to_bho(100, "B"));
console.log(dec_to_bho(120, "O"));
