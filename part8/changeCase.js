function changeCase(string) {
  var string1 = "";
  for (var i = 0; i < string.length; i++) {
    //  if (/[0-9]/.test(string[i])) {
    //    return false;
    //  }
    if (/[A-Z]/.test(string[i])) {
      string1 += string[i].toLowerCase();
    } else {
      string1 += string[i].toUpperCase();
    }
  }
  return string1;
}
console.log(changeCase("phucdeptrai"));
console.log(changeCase("W3resouces"));
console.log(changeCase("W3schools.com"));
console.log(changeCase("PHUCDEPTRAI"));
console.log(changeCase("120202020"));
