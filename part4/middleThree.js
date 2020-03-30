function middleString(string) {
  if (string.length % 2 != 0) {
    mid = (string.length + 1) / 2;
    return string.slice(mid - 2, mid + 1);
  }
  return string;
}
console.log(middleString("HTML5"));
console.log(middleString("CSS"));
console.log(middleString("phucdeptrai"));
