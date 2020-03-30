function changePosition(string) {
  if (string.length >= 1) {
    return (
      string.substring(string.length - 1, string.length) +
      string.substring(1, string.length - 1) +
      string.substring(0, 1)
    );
  }
}
console.log(changePosition("phuc"));

function changePosition1(string) {
  if (string.length < 1) {
    return string;
  }
  midChar = string.substring(1, string.length - 1);
  //   return string.charAt(string.length - 1) + midChar + string.charAt(0);
  return string.charAt(1);
}
console.log(changePosition1("deptrai"));
