function createString(string, n) {
  if (string.length >= 2) {
    return string.substring(0, n).concat(string.substring(string.length - n));
  } else return string;
}
console.log(createString("JavaScript", 2));
