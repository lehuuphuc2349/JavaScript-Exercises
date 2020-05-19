const factor = (number) => {
  if (number <= 0) {
    return number;
  } else {
    var factor = [];
    for (var i = 0; i <= number; i++) {
      if (number % i === 0) {
        factor.push(i);
      }
    }
  }
  return factor;
};
console.log(factor(12));
console.log(factor(17));
console.log(factor(20));
