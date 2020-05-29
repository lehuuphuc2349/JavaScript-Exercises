var alphabet = [
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "x",
  "y",
];
function fillArray(startChar, endChar, jump) {
  var first = startChar;
  var last = endChar;
  var result = new Array();
  for (var i = first; i < last; i += jump) {
    result = alphabet.push(i);
  }
  return result;
}
console.log(fillArray("a", "z", 2));
