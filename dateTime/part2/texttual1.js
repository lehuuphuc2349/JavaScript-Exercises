const texttual1 = (date) => {
  var dayList = ["Sun", "Mon", "Tues", "Wed", "Sat"];
  var day = new Date(date);
  return dayList[day.getDay()];
};
console.log(texttual1(new Date()));
