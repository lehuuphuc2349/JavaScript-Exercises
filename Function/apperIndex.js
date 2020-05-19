const apperIndex = (string) => {
  var count = 0;
  var result = "";
  for (var i = 0; i < string.length; i++) {
    if (result.indexOf(string.charAt(i))) {
      result += `${string[i]}: ${string.indexOf(i)} + \n`;
    }
  }
  return result;
};
console.log(apperIndex("The quick brown fox jumps over the lazy dog"));

const CharCount = (string) => {
  var uchars = {};
  string.replace(/\S/g, function (l) {
    uchars[l] = isNaN(uchars[l]) ? 1 : uchars[l] + 1;
  });
  return uchars;
};
console.log(CharCount("The quick brown fox jumps over the lazy dog"));
