const perfectNumber = (number) => {
  const divisor = [];
  var sum = 0;
  for (var i = 0; i < number; i++) {
    if (number % i === 0) {
      divisor.push(i);
    }
  }
  for (var i = 0; i < divisor.length; i++) {
    sum += divisor[i];
  }
  return sum;
};
console.log(perfectNumber(12));
console.log(perfectNumber(28));
