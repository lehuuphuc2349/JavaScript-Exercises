const repeatString2 = (string, times) => {
  if (typeof times === "undefined") {
    return "Error in string in count";
  }
  return times < 1 ? "" : new Array(times + 1).join(string);
};
console.log(repeatString2("a", 2));
console.log(repeatString2("a"));
