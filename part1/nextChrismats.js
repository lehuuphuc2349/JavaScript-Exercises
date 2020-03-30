var today = new Date();
var years = today.getFullYear();
var cmas = new Date(years, 11, 25);
if (today.getMonth() == 11 && today.getDay() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
// console.log(cmas);
var oneday = 1000 * 60 * 60 * 24;
console.log(Math.ceil((cmas.getTime() - today.getTime()) / oneday));
