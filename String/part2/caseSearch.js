const searchString = (string, char) =>
  string.split(" ").includes(char) === true ? "Matched" : "Not Matched";

console.log(searchString("JavaScript Exercise", "JavaScript"));
console.log(searchString("JavaScript Exercise", "JavaScripttt"));
