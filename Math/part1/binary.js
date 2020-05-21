const converBinary = (Binary) => {
  var temp = Binary.toString().split("");
  var sum = 0;
  for (var i = 0; i <= temp.length; i++) {
    for (var j = temp.length; j >= 0; j--) {
      sum += temp[i] * Math.pow(2, j);
    }
  }
  return sum;
};
console.log(converBinary(11011011));
console.log(converBinary(100));
console.log(converBinary(110011));

function bin_to_dec(bstr) {
  return parseInt((bstr + "").replace(/[^01]/gi, ""), 2);
}
console.log(bin_to_dec("110011"));
console.log(bin_to_dec("100"));
