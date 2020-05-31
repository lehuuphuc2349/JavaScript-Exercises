const diff2Date = (date1, date2) => {
  let dt1 = new Date(date1);
  let dt2 = new Date(date2);
  return (
    Math.floor(
      Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate()) -
        Date.UTC(dt1.getFullYear(), dt1.getMonth(), dt1.getDate())
    ) /
    (1000 * 60 * 60 * 24)
  );
};
console.log(diff2Date("04/02/2014", "11/04/2014"));
console.log(diff2Date("28/05/2020", "01/06/2020"));

var day = new Date();
console.log(
  Date.UTC(day.getFullYear(), day.getMonth(), day.getDate()) /
    (1000 * 60 * 60 * 24)
);
