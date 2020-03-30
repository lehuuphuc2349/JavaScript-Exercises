function findLargestRangeNumber(number1, number2) {
  if (number1 >= 40 && number1 <= 60 && number2 >= 40 && number2 <= 60) {
    if (number1 == number2) {
      return "Two number are same";
    } else if (number1 > number2) {
      return number1;
    } else if (number1 < number2) {
      return number2;
    }
  } else {
    return "Numbers don't fit on range";
  }
}
console.log(findLargestRangeNumber(1, 2));
console.log(findLargestRangeNumber(41, 42));
console.log(findLargestRangeNumber(40, 80));
