const getYear2Digit = (date) => ("" + date.getFullYear()).substr(2);
console.log(getYear2Digit(new Date(2015, 10, 1)));
console.log(getYear2Digit(new Date()));
