const abString = (string) => {
  var temp = string.split(" ");
  return temp[0].toString() + " " + temp[1].toString().substring(0, 1);
};
console.log(abString("Phuc dep"));
