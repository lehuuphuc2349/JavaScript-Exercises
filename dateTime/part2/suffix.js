const suffix = (date) => {
  var suffixOrianl = ["st", "nd", "rd", "th"];
  var result = "";
  var day = new Date(date).getDate();
  var stringDay = day.toString();
  for (var i = 0; i < stringDay.length; i++) {
    if (stringDay[stringDay.length - 1].includes(1) === true) {
      result = stringDay + "st";
    } else if (stringDay[stringDay.length - 1].includes(2) === true) {
      result = stringDay + "nd";
    } else if (stringDay[stringDay.length - 1].includes(3) === true) {
      result = stringDay + "rd";
    } else {
      result = stringDay + "th";
    }
  }
  return result;
};
console.log(suffix(new Date(2015, 10, 8)));
