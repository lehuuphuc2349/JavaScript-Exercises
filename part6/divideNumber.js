function divideNumber(number, divide) {
  if (divide == 1) {
    return number;
  } else {
    while (number % divide === 0) {
      number /= divide;
    }
    return number;
  }
}
console.log(divideNumber(123, 1));
console.log(divideNumber(10, 2));
console.log(divideNumber(120, 60));
console.log(divideNumber(6, 12));
console.log(divideNumber(-12, 2));
