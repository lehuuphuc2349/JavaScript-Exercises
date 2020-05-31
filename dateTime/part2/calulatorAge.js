function calulator(year) {
  var date1 = new Date(year);
  var date2 = new Date();
  return date2.getFullYear() - date1.getFullYear();
}
console.log(calulator(new Date(1999, 3, 24)));
