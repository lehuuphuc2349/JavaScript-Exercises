function checkgivenNumber(number1, number2) {
  if (number1 == 50 || number2 == 50 || number2 + number1 == 50) {
    return true;
  } else return false;
}
console.log(checkgivenNumber(20, 30));
console.log(checkgivenNumber(50, 1));
console.log(checkgivenNumber(10, 10));
