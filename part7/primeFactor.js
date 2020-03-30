function primeFactor(number) {
  function isPrime(number) {
    for (i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
      return true;
    }
  }
  const result = [];
  for (let i = 2; i <= number; i++) {
    while (isPrime(i) && number % i === 0) {
      if (!result.includes(i)) {
        result.push(i);
        number /= i;
      }
    }
  }
  return result;
}
console.log(primeFactor(100));
