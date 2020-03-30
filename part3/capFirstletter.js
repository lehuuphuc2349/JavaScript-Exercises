function capFirstLetter(string) {
  string = string.split(".");

  for (var i = 0, x = string.length; i < x; i++) {
    string[i] = string[i][0].toUpperCase() + string[i].substr(1);
  }

  return string.join(" ");
}
console.log(capFirstLetter("phuc.dep.trai"));
