const getNumericMoth = (date) => {
  var month = new Date(date).getMonth() + 1;
  return month;
};
console.log(getNumericMoth(new Date(2015, 10, 1)));
