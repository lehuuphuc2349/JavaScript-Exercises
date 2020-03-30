function nextPrimeNumber(primeNumber) {
  for (var i = primeNumber + 1; ; i++) {
    var isPrime = true;
    for (var d = 2; d * d <= i; d++) {
      if (i % d == 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      return i;
    }
  }
}
console.log(nextPrimeNumber(3));
console.log(nextPrimeNumber(5));
console.log(nextPrimeNumber(1));
console.log(nextPrimeNumber(7));
