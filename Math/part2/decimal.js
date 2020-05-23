const checkDecimalNumber = (number) => {
  var temp = number.toString().split("");
  var dot = ".";
  if (temp.indexOf(dot) !== -1) {
    return "Number has a decimal places";
  } else {
    return "It a whole number";
  }
};
console.log(checkDecimalNumber(25.66));
