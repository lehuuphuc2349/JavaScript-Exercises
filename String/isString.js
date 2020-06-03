const isString = (string) => {
  if (typeof string == "string") {
    return "Is String";
  } else {
    return "Not String";
  }
};
console.log(isString("Phuc dep trai"));
console.log(isString(11111));
