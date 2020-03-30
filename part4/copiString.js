function copiesString(string, n) {
  if (n < 0) {
    return false;
  } else {
    return string.repeat(n);
  }
}
console.log(copiesString("phucdeptrai ", 2));
console.log(copiesString("abc", -2));
