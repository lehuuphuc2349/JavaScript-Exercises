const findLargest = (array) => {
  var max = Math.max(...array);
  return max;
};
console.log(findLargest([1, 2, 3, 4, 5]));
console.log(findLargest([10, 2, 34, 45, 5]));
console.log(findLargest([1, 22, 331, 43, 52]));

var x, y, chr;
for (x = 1; x <= 12; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "💌 Phuc dep trai ";
  }
  console.log(chr);
  chr = "";
}
