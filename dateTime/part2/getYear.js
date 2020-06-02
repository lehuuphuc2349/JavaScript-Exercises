const getYear = (date) => {
  var day = new Date(date).getFullYear();
  return day;
};
console.log(getYear(new Date(2015, 10, 1)));
