function changeCase(new_string) {
  var x = 0;
  var y = 0;
  for (var i = 0; i < new_string.length; i++) {
    if (/[A-Z]/.test(new_string[i])) {
      x++;
    } else y++;
  }
  if (x > y) {
    return new_string.toUpperCase();
  }
  return new_string.toLowerCase();
}
console.log(changeCase("Phuc"));
console.log(changeCase("PhP"));
