const weekend = (date1) => {
  var date = new Date(date1);
  if (date.getDay() == 6 || date.getDay() == 0) {
    return "weekend";
  }
  return "un weekend";
};
console.log(weekend("Nov 15, 2014"));
console.log(weekend("Nov 16, 2014"));
console.log(weekend("Nov 17, 2014"));
console.log(weekend("June 1, 2020"));
