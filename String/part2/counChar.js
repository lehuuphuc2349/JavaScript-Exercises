const countChar = (string, char) => {
  let count = 0;
  var tempString = string.split(" ");
  for (var i = 0; i < tempString; i++) {
    if (tempString[i] == char) {
      count++;
    }
  }
  return count;
};
console.log(countChar("The quick brown fox", "fox"));
console.log(countChar("aa, bb, cc, dd, aa", "aa"));
