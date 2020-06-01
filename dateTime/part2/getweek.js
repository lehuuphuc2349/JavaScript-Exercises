var today = new Date();

var year = new Date(2020, 0, 2);
var result = Math.ceil((today - year) / (1000 * 60 * 60 * 24));
console.log(Math.ceil(result / 4));
