const testPower = (number) => {
  var result = "";
  for (var i = 2; ; i += 2) {
    if ((number = 2 * i)) {
      result = true;
      break;
    }
  }
  return result;
};
console.log(testPower(6));
console.log(testPower(8));
console.log(testPower(12));
console.log(testPower(4));
console.log("=============");
function power_of_2(n) {
  if (typeof n !== "number") return "Not a number";

  return n && (n & (n - 1)) === 0;
}

console.log(power_of_2(16));
console.log(power_of_2(18));
console.log(power_of_2(256));
