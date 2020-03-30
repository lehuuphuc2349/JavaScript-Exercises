function findLargestNumber(number1, number2, number3) {
  maxValue =
    number1 > number2 && number1 > number3
      ? (maxValue = number1)
      : number2 > number1 && number2 > number3
      ? (maxValue = number2)
      : (maxValue = number3);
  return maxValue;
}
console.log(findLargestNumber(1, 2, 3));
console.log(findLargestNumber(20, 21, 100));
console.log(findLargestNumber(2, 3, 4));
console.log(findLargestNumber(1, 1, 1));
console.log(findLargestNumber(-1, -1, -2));

function checkGivennUmber(number1, number2) {
  var maxValue =
    number1 > number2 ? (maxValue = number1) : (maxValue = number2);
  return maxValue;
}
console.log(checkGivennUmber(10, 11));
console.log(checkGivennUmber(1022, 112));
