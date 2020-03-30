function lowerCase(string) {
  var lowerCase =
    string.length >= 3
      ? string.substring(0, 4).toLowerCase() +
        string.substring(4, string.length)
      : string;
  return lowerCase;
}
console.log(lowerCase("PHUCdeptrai"));
console.log(lowerCase("DEPTRAI"));
console.log(lowerCase("JAVASCRIPT"));
