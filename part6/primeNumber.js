function primeNumber(number) {
  var prime_number1 = [];
  var prime_number2 = [];
  for (var i = 0; i <= number; i++) {
    prime_number2.push(true);
  }
  for (var i = 2; i <= number; i++) {
    if (prime_number2[i]) {
      prime_number1.push(i);
      for (var j = 1; i * j <= number; j++) {
        prime_number2[i * j] = false;
      }
    }
  }
  return prime_number1;
}
console.log(primeNumber(5));
console.log(primeNumber(11));
console.log(primeNumber(19));
