const bubbleSort = (a) => {
  var swap;
  var n = a.length - 1;
  var x = a;
  do {
    swap = false;
    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return x;
};
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

const converBinary = (Binary) => {
  var temp = Binary.toString().split("");
  var result = [];
  var sum = 0;
  for (var i = 0; i < temp.length; i++) {
    sum += temp[i] * Math.pow(2, i);
  }
  return sum;
};
console.log(converBinary(11011011));
console.log(converBinary("100"));
console.log(converBinary(110011));

function bin_to_dec(bstr) {
  return parseInt((bstr + "").replace(/[^01]/gi, ""), 2);
}
console.log(bin_to_dec("110011"));
console.log(bin_to_dec("100"));
