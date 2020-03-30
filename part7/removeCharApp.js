function removeChar(string) {
  var arrayChar = string.split("");
  var result = [];
  for (var i = 0; i < arrayChar.length; i++) {
    if (string.indexOf(arrayChar[i]) === string.lastIndexOf(arrayChar[i])) {
      result.push(arrayChar[i]);
    }
  }
  return result.join("");
}
console.log(removeChar("abcdabc"));
console.log(removeChar("123454321"));
