function sameNumber(number1, number2, number3) {
  var sameNumber;
  return (sameNumber =
    number1 == number2 && number2 == number3 && number1 == number3
      ? (sameNumber = 30)
      : number1 != number2 && number2 != number3 && number1 != number3
      ? (sameNumber = 20)
      : (sameNumber = 40));
}
console.log(sameNumber(1, 2, 3));
console.log(sameNumber(1, 1, 1));
console.log(sameNumber(1, 1, 2));
