const lowerAMPM = (date) => {
  var day = new Date(date);
  var hours = day.getHours();
  return hours < 12 ? "am" : "pm";
};
console.log(lowerAMPM(new Date()));
