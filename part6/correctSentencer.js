function correctSentences(string) {
  var firstChar = string.substring(0, 1);
  var lastChar = string.substring(string.length - 1);
  //   return /[A-Z]/.test(firstChar) && lastChar === ".";
  return lastChar;
}
console.log(correctSentences("Phuc dep trai."));
