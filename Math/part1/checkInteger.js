const checkInteger = (number) => (parseInt(number) === number ? true : false);
console.log(checkInteger(23));
console.log(checkInteger(NaN));
console.log(checkInteger(4e2));
console.log(checkInteger(34.2));
console.log(checkInteger(32.2));
console.log(checkInteger(-20));
