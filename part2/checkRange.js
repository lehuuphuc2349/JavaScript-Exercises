function checkRange2number(number1, number2) {
  return (number1 >= 50 && number1 <= 99) || (number2 >= 50 && number2 <= 99);
}
console.log(checkRange2number(5, 98));
console.log(checkRange2number(51, 52));
console.log(checkRange2number(1, 2));
