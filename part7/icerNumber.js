function incerNumber(number) {
  var num = ("" + number).split("");
  for (var i = 0; i < num.length; i++) {
    if (parseInt(num[i]) >= parseInt(num[i + 1])) {
      return false;
    }
  }
  return true;
}
console.log(incerNumber(123));
