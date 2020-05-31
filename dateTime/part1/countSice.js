const countPassed = (date) => {
  var current = new Date(date.getTime());
  var previous = new Date(date.getFullYear(), 0, 2);

  return Math.ceil((current - previous) / (1000 * 60 * 60 * 24));
};
console.log(countPassed(new Date(2020, 4, 32)));

var today = new Date(2020, 4, 32);
console.log(today.toJSON());

var dt = 1412743274;
var date = new Date(dt * 1000);
console.log(date);

var now = new Date();
var time = now.getTime();
console.log(time);
