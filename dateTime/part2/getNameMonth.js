const getNameMonth = (date) => {
  var day = new Date(date).getMonth();
  var monthList = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  return monthList[day];
};
console.log(getNameMonth(new Date(2015, 10, 1)));
