const quarter = (date) => {
  var month = new Date(date).getMonth() + 1;
  return Math.ceil(month / 3);
};
console.log(quarter(2020, 1, 21));
