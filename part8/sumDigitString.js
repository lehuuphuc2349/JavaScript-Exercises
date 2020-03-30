function sumDigtiString(string) {
  var sum = 0;
  for (var i = 0; i < string.length; i++) {
    if (/[0-9]/.test(string[i])) {
      sum += parseInt(string[i]);
    }
  }
  return sum;
}
console.log(sumDigtiString("Phuc123"));
