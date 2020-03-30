function sumCubes(number) {
  var sum = 0;
  for (var i = 0; i <= number; i++) {
    sum += Math.pow(i, 3);
  }
  return sum;
}
console.log(sumCubes(3));
console.log(sumCubes(4));
