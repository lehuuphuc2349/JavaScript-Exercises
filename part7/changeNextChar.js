function changeNextChar(string) {
  var result = [];
  for (var i = 0; i < string.length; i++) {
    var charOrder = string.charCodeAt(i) - "a".charCodeAt(0);
    var changeChar = 25 - charOrder + "a".charCodeAt(0);
    result.push(String.fromCharCode(changeChar));
  }
  return changeChar;
}
console.log(changeNextChar("abc"));
console.log(changeNextChar("xyz"));
