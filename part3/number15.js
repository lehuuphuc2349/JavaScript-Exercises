function number15(number1, number2) {
  return (
    number1 === 15 ||
    number2 === 15 ||
    Math.abs(number1 - number2) === 15 ||
    number1 + number2 === 15
  );
}
console.log(number15(12, 3));
console.log(number15(15, 1));
console.log(number15(-15, 0));
