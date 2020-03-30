function checkChar(string, char) {
  var ctr = 0;
  for (var i = 0; i < string.length; i++) {
    if (string.charAt(i) == char) {
      ctr++;
    }
  }
  return ctr >= 2 && ctr <= 4;
}
console.log(checkChar("phuc", "c"));
