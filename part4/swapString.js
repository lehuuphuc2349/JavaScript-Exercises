function swapString(string) {
  return string
    .substring(string.length - 3)
    .concat(string.substring(0, string.length - 3));
}
console.log(swapString("Python"));
