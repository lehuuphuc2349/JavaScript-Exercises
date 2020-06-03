const leftRight = (str1, str2, pos) => {
  var result;
  var temp;
  var count = 0;
  if (str1.length > str2.length) {
    if (pos === "l") {
      count = str1.length - str2.length;
      result = str1.substr(0, count) + str2;
    } else {
      result = str2 + str1.substr(str2.length, str1.length);
    }
  }
  return result;
};
console.log(leftRight("0000", "123", "l"));
console.log(leftRight("00000000", "123", ""));
