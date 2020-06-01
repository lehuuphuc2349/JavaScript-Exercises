const textual = (date) => {
  var dayList = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Saturday",
    "Friday",
  ];
  var day = new Date(date).getDate();
  return dayList[day - 1];
};
console.log(textual(new Date(2015, 10, 1)));
