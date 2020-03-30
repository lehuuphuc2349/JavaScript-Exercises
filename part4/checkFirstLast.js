function checkFirstLast(string) {
  if (
    string.substring(0, 1) == "P" &&
    string.substring(string.length - 1, string.length) == "P"
  ) {
    return string.substring(1, string.length - 1);
  }
  return string;
}
console.log(checkFirstLast("PythonP"));
console.log(checkFirstLast("Python"));
console.log(checkFirstLast("Phuc dep traiP"));
