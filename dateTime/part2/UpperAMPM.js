const upperAMPM = (date) => {
  var today = new Date(date);
  var hours = today.getHours();
  return hours < 12 ? "AM" : "PM";
};
console.log(upperAMPM(new Date()));
