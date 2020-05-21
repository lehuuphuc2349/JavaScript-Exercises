for (var i = 1; i <= 6; i++) {
  for (var j = i; j < i; j++) {
    console.log("*");
  }
}
var x, y, chr;
for (x = 1; x <= 6; x++) {
  for (y = 1; y < x; y++) {
    chr = chr + "*";
  }
  console.log(chr);
  chr = "";
}
