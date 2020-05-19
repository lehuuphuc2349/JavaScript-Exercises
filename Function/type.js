const type = (argument) => typeof argument;
console.log(type(12));
console.log(type("phucdeptrai"));
console.log(type(false));
const phucdeptrai = (deptrai) => {
  return `${deptrai}`;
};
const typeOf = (arg) => {
  var dttypes = [Function, RegExp, Number, String, Boolean, Object],
    x,
    len;
  if (typeof arg === "object" || typeof arg === "function") {
    for (x = 0, len = dttypes.length; x < len; x++) {
      if (arg instanceof dttypes[x]) {
        return dttypes[x];
      }
    }
  }
  return typeof arg;
};
console.log(typeOf(phucdeptrai()));
console.log(typeOf(12));
