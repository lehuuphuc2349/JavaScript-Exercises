function checkGivenNumberMul(number1, number2) {
  if (
    !(
      (number1 % 7 == 0 || number1 % 11 == 0) &&
      (number2 % 11 == 0 || number2 % 7 == 0)
    )
  ) {
    return (
      number1 % 7 == 0 ||
      number1 % 11 == 0 ||
      number2 % 7 == 0 ||
      number2 % 11 == 0
    );
  } else return false;
}
console.log(checkGivenNumberMul(14, 21));
console.log(checkGivenNumberMul(14, 20));
console.log(checkGivenNumberMul(16, 20));
