function difference(number) {
  if (number <= 13) {
    return 13 - number;
  } else {
    return (number - 13) * 2;
  }
}
console.log(difference(10));
console.log(difference(40));

