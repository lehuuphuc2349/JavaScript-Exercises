function getNumericday(date) {
  var list = [7, 1, 2, 3, 4, 5, 6];
  var day = new Date(date).getDay();
  return list[day];
}
console.log(getNumericday(new Date(2015, 10, 1)));
console.log(getNumericday(new Date()));

const convertNumber = (date) => {
  var day = new Date(date);
  return day.getDay() === 0 ? 7 : day.getDay();
};
console.log(convertNumber(new Date()));
console.log(convertNumber(new Date(2015, 10, 1)));
