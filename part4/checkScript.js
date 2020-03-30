function checkScript(string) {
  var script =
    string.length >= 6 && string.length - 6 == "Script"
      ? (script = string.substring(string.length - 6))
      : (script = string);
  return script;
}
console.log(checkScript("JavaScript"));
console.log(checkScript("Script"));
console.log(checkScript("TypeScript"));
console.log(checkScript("abcdef"));
