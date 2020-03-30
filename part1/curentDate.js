// Basic
// var today = new Date();
// var day = today.getDay();
// var month = today.getMonth() + 1;
// var year = today.getFullYear();
// if (day < 10) {
//   day = "0" + day;
// }
// if (month < 10) {
//   month = "0" + month;
// }
// today = month + "-" + day + "-" + year;
// console.log(today);
// today = month + "/" + day + "/" + year;
// console.log(today);
// today = day + "-" + month + "-" + year;
// console.log(today);
// today = day + "/" + month + "/" + year;
// console.log(today);

// Ex6
let today = new Date();
let day = today.getDay();
let month = today.getMonth() + 1;
const year = today.getFullYear();
if (day < 10) {
  day = `0${day}`;
}
if (month < 10) {
  month = `0${month}`;
}
today = `${month}-${day}-${year}`;
console.log(today);
today = `${month}/${day}/${year}`;
console.log(today);
today = `${day}-${month}-${year}`;
console.log(today);
today = `${day}/${month}/${year}`;
console.log(today);
