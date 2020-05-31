const getLastDay = (year, month) => {
  return new Date(year, month, 0).getDate();
};
console.log(getLastDay(2020, 2));
