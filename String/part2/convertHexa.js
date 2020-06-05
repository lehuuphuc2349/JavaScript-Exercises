const convertHexa = (string) => {
  var hex = string.toString();
  var str = "";
  for (var n = 0; n < string.length; n++) {
    str += String.fromCharCode(parseInt(hex.substr(n, 2), 16));
  }
  return str;
};
console.log(convertHexa("3132"));
