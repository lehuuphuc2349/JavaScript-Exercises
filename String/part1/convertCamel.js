const convert = (string) => {
  var temp = string.split(" ");
  var result = "";
  for (var i = 0; i < temp.length; i++) {
    result +=
      temp[i].toString().substring(0, 1).toUpperCase() +
      temp[i].toString().substring(1, temp.lenth);
  }
  return result;
};
console.log(convert("Phuc dep"));
