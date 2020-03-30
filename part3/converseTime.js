function time(number) {
  var hours = Math.floor(number / 60);
  var minute = number % 60;
  return hours + "hrs " + minute + "min";
}
console.log(time(450));
