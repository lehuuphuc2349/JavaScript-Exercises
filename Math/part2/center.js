const centerNumber = (x, y, z) => Math.max(x, y, z);

// function centerNumber(number1,number2,number3) {
//    var mid =
//    number1 > number2 && number1 < number3 ?  number1 ? false :
//    number2 > number1 && number2 < number3 ? number2 : number3
// }

function value_limit(val, min, max) {
  return val < min ? min : val > max ? max : val;
}

console.log(value_limit(7, 1, 12));
console.log(value_limit(-7, 0, 12));
console.log(value_limit(15, 0, 12));
