function rightMostDigit(number1, number2, number3) {
  return (
    number1 % 10 === number2 % 10 ||
    number1 % 10 === number3 % 10 ||
    number2 % 10 === number3 % 10
  );
}
console.log(rightMostDigit(11, 21, 32));
