const createString = (size, value) => {
  return Array.apply(null, Array(size)).map(String.prototype.valueOf, value);
};
console.log(createString(3, "phuc"));
console.log(createString(4, "trungngu"));
