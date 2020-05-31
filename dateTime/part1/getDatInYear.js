function leapYear(year) {
  return year % 400 === 0 || (year % 100 !== 0 && year % 4 === 0);
}
const dayOfYear = (year) => (leapYear(year) ? 366 : 365);

console.log(dayOfYear(2020));
console.log(dayOfYear(2016));
console.log(dayOfYear(2015));
