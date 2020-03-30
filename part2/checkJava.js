function checkJava(string) {
  return string.substring(0, 4) === "Java";
}
console.log(checkJava("JavaScript"));
console.log(checkJava("Java"));
