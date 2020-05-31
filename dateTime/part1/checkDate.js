const checkDate = (input) => {
  if (Object.prototype.toString.call(input) === "[object Date]") {
    return true;
  }
  return false;
};

const checkDate1 = (input) =>
  Object.prototype.toString.call(input) === "[object Date]" ? true : false;

console.log(checkDate("October 13, 2014 11:13:00"));
console.log(checkDate(new Date(86400000)));
console.log(checkDate(new Date(99, 5, 24, 11, 33, 30, 0)));
