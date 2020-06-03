const textTr = (string, under) => {
  if (typeof under === "undefined") {
    under = 1;
  }
  var result = string.slice(0, under);
  return result;
};
console.log(textTr("PHUC DEP TRAI", 4));
