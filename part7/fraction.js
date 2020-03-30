function checkFraction(arrayy) {
  var fraction =
    arrayy[0] / arrayy[1] < 1 ? "Proper Fraction" : "Improper Fraction";
  return fraction;
}
console.log(checkFraction([1, 2]));
console.log(checkFraction([10, 2]));
