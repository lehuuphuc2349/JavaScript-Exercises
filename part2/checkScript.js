function checkScript(string) {
  if (string.substring(4, string.length) == "Script") {
    return string.substring(0, 4);
  }
  return string;
}
console.log(checkScript("JavaScript"));
console.log(checkScript("CoffeeScript"));
console.log(checkScript("TypeScript"));
