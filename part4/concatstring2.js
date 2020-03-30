function concatString(string1, string2) {
  if (string1.length == string2.length) {
    return string1.concat(string2);
  } else {
    const m = Math.min(string1.length, string2.length);
    return string1
      .substring(string1.length - m)
      .concat(string2.substring(string2.length - m));
  }
}
console.log(concatString("phuc", "phuc"));
console.log(concatString("phuc", "deptrai"));
console.log(concatString("Python", "JS"));
