function roundNumber(number) {
  if (typeof number !== "number") return -1;

  var result = number;
  return result.toFixed(4);
}

console.log(roundNumber(5.00001));
console.log(roundNumber(5.0001));
console.log(roundNumber(-4.55555));
