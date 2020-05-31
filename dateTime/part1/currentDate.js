var day = new Date();
var today = day.getDate();
var month = day.getMonth() + 1;
var year = day.getFullYear();

month < 10 ? "0" + month : month;
today < 10 ? "0" + today : today;

console.log(`${today}/${month}/${year}`);
console.log(`${today}-${month}-${year}`);
