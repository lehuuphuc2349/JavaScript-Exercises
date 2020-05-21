const lcm = (number1, number2) =>
  (number1 * number2) / Math.abs(number1 - number2);
console.log(lcm(336, 360));
console.log(lcm(3, 15));
console.log(lcm(10, 15));
