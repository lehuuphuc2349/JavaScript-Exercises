// const mul5 = (number) => {
//   if (number % 5 === 0) return number;
//   var result = number;
//   var i = 0;
//   while (i++) {
//     result += i;
//     if (result % 5 === 0) {
//       break;
//     }
//   }
//   return result;
// };

const mul5 = (number) => Math.ceil(number / 5) * 5;
console.log(mul5(16));
