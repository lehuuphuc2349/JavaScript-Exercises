function halfString(string) {
  if (string.length % 2 == 0) {
    return string.substring(0, string.length / 2);
  } else {
    return string;
  }
}
console.log(halfString("JavaScript"));
