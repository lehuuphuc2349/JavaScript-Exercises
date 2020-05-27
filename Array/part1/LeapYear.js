const testLeapYear = (yearStart, yearEnd) => {
  var result = [];
  for (var year = yearStart; year <= yearEnd; year++) {
    if (
      (year % 4 === 0 && year % 100 !== 0) ||
      (year % 100 === 0 && year % 400 === 0)
    ) {
      result.push(year);
    }
  }
  return result;
};
console.log(testLeapYear(2000, 2012));
