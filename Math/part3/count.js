const count = (number) => {
  var temp = number.toString().split("");
  var count = temp.length + 1;
  return count;
};
console.log(count(1111));
