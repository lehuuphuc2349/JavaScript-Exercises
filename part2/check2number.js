function check2Numbers(number1, number2) {
  return (
    (number1 >= 40 && number1 <= 60 && number2 >= 70 && number2 <= 100) ||
    (number2 >= 40 && number2 <= 60 && number2 >= 70 && number2 <= 100)
  );
}
console.log(check2Numbers(44, 56));
