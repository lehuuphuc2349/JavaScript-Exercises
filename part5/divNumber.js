function checkTwogivenNumber(number1, number2, divisor) {
  if (number1 == number2 || number1 != number2) {
    return (
      (number1 % divisor == 0 && number2 % divisor == 0) ||
      (number1 % divisor != 0 && number2 % divisor != 0)
    );
  }
}
console.log(checkTwogivenNumber(10, 25, 5));
console.log(checkTwogivenNumber(10, 20, 4));
console.log(checkTwogivenNumber(3, 5, 2));
