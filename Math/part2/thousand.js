const thousand = (number) => {
  var temp = number.toString().split("");
  return temp;
};
// console.log(thousand(1000));

var string = "100000";
var head = string.substring(0, string.length - 3);
var last = string.substring(string.length - 3);
var result = `,${last}`;
console.log(head + result);
