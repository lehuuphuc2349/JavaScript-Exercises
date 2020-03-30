function threeLetter(string) {
  if (string.length <= 3) {
    return string;
  } else {
    return string.substring(string.length - 3).repeat(4);
  }
}
console.log(threeLetter("phuc"));
console.log(threeLetter("dep"));
console.log(threeLetter("JavaScript"));
