const maxDate = (arrayDate) => {
  var result = [];
  for (var i = 0; i < arrayDate.length; i++) {
    result.push(arrayDate[i]);
  }
  var max = result[0];
  var maxObj = new Date(result[0]);
  result.forEach(function (date, index) {
    if (new Date(date) > maxObj) {
      max = date;
      maxObj = new Date(date);
    }
  });
  return max;
};
console.log(maxDate(["2015/02/01", "2015/02/02", "2015/01/03"]));
