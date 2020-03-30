function digitSum(number) {
  const digitSum = number => {
    var digit_sum = 0;
    while (number) {
      digit_sum += number % 10;
      number = Math.floor(number / 10);
    }
    return digit_sum;
  };
  let result = 0;
  while (number >= 10) {
    result += 1;
    number = digitSum(number);
  }
  return result;
}
console.log(digitSum(123));
console.log(digitSum(156));
console.log(digitSum(120));
