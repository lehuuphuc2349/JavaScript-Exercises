const convertString1 = (string) => {
  var temp = string.split("");
  var newArray = new Array();
  temp.forEach(function (item) {
    if (item === item.toUpperCase()) {
      newArray.push(item.toLowerCase());
    } else {
      newArray.push(item.toUpperCase());
    }
  });
  return newArray.join("");
};
console.log(convertString1("PHP exercises. python exercises."));
