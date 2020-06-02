const getMinutes = (date) => {
  var day = new Date(date);
  return day.getMinutes() == 0 ? "00" : day.getMinutes();
};
console.log(getMinutes(new Date()));
