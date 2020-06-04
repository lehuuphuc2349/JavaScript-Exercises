const afterBefore = (string, char, pos) => {
  if (string.length > 0) {
    if (pos === "a") {
      return string.substr(0, string.indexOf(char));
    } else if (pos === "b") {
      return string.substr(string.indexOf(char) + 1);
    } else {
      return string;
    }
  } else {
    return false;
  }
};
console.log(afterBefore("w3resource: JavaScript Exercises", ":", "a"));
console.log(afterBefore("w3resource: JavaScript Exercises", "E", "b"));
