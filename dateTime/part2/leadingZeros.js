const leadingZeros = (date) => {
  var time = new Date(date);
  var hours = time.getHours();
  return hours < 10 ? "0" + hours : hours;
};
console.log(leadingZeros(new Date()));
