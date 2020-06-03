const capFirstForEach = (string) => {
  var temp = string.split(" ");
  temp.forEach(function (value, index, array) {
    temp[index].toString().substring(0, 1).toUpperCase();
  });
  return temp;
};

console.log(capFirstForEach("phuc dep trai"));

const capFirst2 = (string) => {
  var result = "";
  var temp = string.split(" ");
  for (var i = 0; i < temp.length; i++) {
    result +=
      temp[i].toString().substring(0, 1).toUpperCase() +
      temp[i].toString().substring(1, temp[i].length) +
      " ";
  }
  return result;
};
console.log(capFirst2("phuc dep trai"));
