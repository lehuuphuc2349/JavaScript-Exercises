const extraUnique = (string) => {
  var stringTemp = string.split("");
  var count = 0;
  var stringResult;
  var arrayTemp = [];
  for (var i = 0; i <= stringTemp.length; i++) {
    if (stringTemp[i]) {
      count++;
      arrayTemp.push(stringTemp[i]);
      if (count > 1) {
        break;
      }
    }
  }
  stringResult = arrayTemp.join("");
};
console.log(extraUnique("thequickbrownfoxjumpsoverthelazydog"));

const unique = (string) => {
  var str1 = string;
  var uniqual = "";
  for (x = 0; x < str1.length; x++) {
    if (uniqual.indexOf(str1.charAt(x)) == -1) {
      uniqual += str1[x];
    }
  }
  return uniqual;
};
console.log(unique("thequickbrownfoxjumpsoverthelazydog"));
