function addTwodigits(number) {
  return (number % 10) + Math.floor(number / 10);
}
console.log(addTwodigits(25));
