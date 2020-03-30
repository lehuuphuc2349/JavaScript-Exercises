function checkExpers(number1, number2, result) {
  return (
    number1 + number2 == result ||
    number1 - number2 == result ||
    number1 * number2 == result ||
    number1 / number2 == result
  );
}
console.log(checkExpers(1, 0, 0));
console.log(checkExpers(1, 2, 3));
console.log(checkExpers(100, 25, 25));
