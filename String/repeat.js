const repeatString = (string, count) => {
  if (typeof count == "undefined") {
    count = 1;
  }
  return count < 1 ? "" : new Array(count + 1).join(string);
};
console.log(repeatString("Phuc", 2));
console.log(repeatString("Phuc"));
