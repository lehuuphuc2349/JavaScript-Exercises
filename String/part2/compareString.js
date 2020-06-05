const compareString = (str1, str2) => {
  var equal = str1.toUpperCase() === str2.toUpperCase();
  return equal;
};
console.log(compareString("abcd", "ABCD"));
console.log(compareString("abcd", "ABCe"));
