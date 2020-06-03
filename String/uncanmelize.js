// const uncanmilaze = (string,char) => string.split(char)

var string = "PHUCTRUNG";
console.log(string.split("-").join("-"));

function uncamelize(str, separator) {
  // Assume default separator is a single space.
  if (typeof separator == "undefined") {
    separator = " ";
  }
  // Replace all capital letters by separator followed by lowercase one
  var str = str.replace(/[A-Z]/g, function (letter) {
    return separator + letter.toLowerCase();
  });
  // Remove first separator
  return str.replace("/^" + separator + "/", "");
}
console.log(uncamelize("helloWorld"));
console.log(uncamelize("helloWorld", "-"));
console.log(uncamelize("helloWorld", "_"));

var string = "Trungngu";
var result = "";
if (string.length === 0) {
  result = string.replace("/^" + "-" + "/", "");
}
console.log(result);
