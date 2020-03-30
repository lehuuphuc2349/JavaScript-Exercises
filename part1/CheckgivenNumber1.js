function testNumber(number) {
  return Math.abs(100 - number) <= 20 || Math.abs(400 - number) <= 20;
}
console.log(testNumber(199));
