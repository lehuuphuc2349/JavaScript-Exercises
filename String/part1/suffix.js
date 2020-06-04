const suffix = (number) => {
  var temp = number.toString();
  for (var i = 0; i < temp.length; i++) {
    if (temp[temp.length - 1].includes(1) === true) {
      return number + "st";
    } else if (temp[temp.length - 1].includes(2) === true) {
      return number + "nd";
    } else if (temp[temp.length - 1].includes(3) === true) {
      return number + "rd";
    } else {
      return number + "th";
    }
  }
};
console.log(suffix(10));
