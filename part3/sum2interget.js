function sumTwoIntegers(number1, number2) {
  var sum =
    number1 + number2 >= 50 && number1 + number2 <= 80
      ? (sum = 65)
      : (sum = 80);
  return sum;
}
console.log(sumTwoIntegers(20, 30));
console.log(sumTwoIntegers(80, 90));
console.log(sumTwoIntegers(50, 20));
