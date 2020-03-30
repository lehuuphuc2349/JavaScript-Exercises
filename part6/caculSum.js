function caculSum(number) {
  var sum = number;
  for (var i = 1; i <= number; i++) {
    if (number % i === 0) {
      sum += Math.floor(number / i);
    }
  }
  return sum;
}
console.log(caculSum(8));
console.log(caculSum(26));
