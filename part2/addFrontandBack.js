function addFrontAndBack3letter(string) {
  if (string < 3) {
    return string;
  }
  threeLetter = string.substring(string.length - 3);
  return threeLetter + string + threeLetter;
}
console.log(addFrontAndBack3letter("phucdeptrai"));
console.log(addFrontAndBack3letter("abcd"));
console.log(addFrontAndBack3letter("Trungisgay"));
