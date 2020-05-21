const checkNumeric = (x) => (typeof x === "number" ? true : false);
console.log(checkNumeric(12));
console.log(checkNumeric(""));
console.log(checkNumeric("adsds"));
console.log(checkNumeric(20.2));
console.log(checkNumeric(-222));
console.log(checkNumeric(null));
