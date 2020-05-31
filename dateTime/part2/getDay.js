const getDay = (time) => {
  var day = new Date(time);
  if (day.getDate() < 10) {
    return "0" + day.getDate();
  }
  return day.getDate();
};
console.log(getDay(new Date()));
console.log(getDay(new Date(2020, 4, 23)));
console.log(getDay(new Date(2020, 6, 1)));

const getMonth = (time) => {
  var day = new Date(time);
  var month = day.getMonth();
  return month;
};
console.log(getMonth(new Date(2020, 4, 23)));
