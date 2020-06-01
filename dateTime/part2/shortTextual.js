const shortTextual = (date) => {
  var monthList = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ];
  var day = new Date(date).getMonth();
  return monthList[day];
};
console.log(shortTextual(new Date(2015, 10, 1)));
