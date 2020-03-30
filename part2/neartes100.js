function neartes100(number1, number2) {
  var minNear =
    Math.abs(100 - number1) > Math.abs(100 - number2)
      ? "number2 nearest 100"
      : Math.abs(100 - number1) < Math.abs(100 - number2)
      ? "number 1 nearest 100"
      : "number1 = number2";
  return minNear;
}
console.log(neartes100(99, 98));
console.log(neartes100(99, 99));
console.log(neartes100(1, 99));
