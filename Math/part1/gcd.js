const gcd = (number1, number2) =>
  number1 > number2 ? number1 - number2 : number2 - number1;
console.log(gcd(336, 360));
console.log(gcd(200, 100));
console.log(gcd(1000, 2260));
console.log(gcd(25, 25));
console.log(gcd(-25, -25));
console.log(gcd(-25, 25));
