const getInternetTime = (date) => {
  var day = new Date(date);
  var hours = day.getHours();
  var minutes = day.getMinutes();
  return `${hours}${minutes}`;
};
console.log(getInternetTime(new Date()));
