function between19(number) {
  if (number <= 19) {
    return 19 - number;
  } else {
    return (number - 19) * 3;
  }
}
console.log(between19(20));
console.log(between19(5));
console.log(between19(19));
