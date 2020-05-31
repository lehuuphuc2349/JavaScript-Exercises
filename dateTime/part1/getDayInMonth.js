const getDatInMonth = (month, year) => {
  return new Date(year, month, 0).getDate();
};
console.log(getDatInMonth(5, 2020));
