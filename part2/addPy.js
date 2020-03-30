function addPy(string) {
  if (
    string.substring(0, 2) === "Py" ||
    string === null ||
    string === undefined
  ) {
    return string;
  } else {
    return "Py" + string;
  }
}
console.log(addPy("Python"));
console.log(addPy("thon"));
console.log(addPy(""));
