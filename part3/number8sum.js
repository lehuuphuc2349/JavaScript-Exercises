function localSumEigth(number1, number2) {
  return number1 == 8 || number2 == 8 || Math.abs(number1 - number2) == 8;
}
console.log(localSumEigth(8, 8));
console.log(localSumEigth(10, 8));
console.log(localSumEigth(16, 8));
console.log(localSumEigth(8, 16));
console.log(localSumEigth(1, 2));
