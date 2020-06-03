const countCHAR = (string, char) => {
  var temp = string.split(" ");
  var count = 0;
  for (var i = 0; i < temp.length; i++) {
    if (temp[i] === char) {
      count++;
    }
  }
  return count;
};
console.log(countCHAR("PHUC DEP TRAI TRAI", "TRAI"));
console.log(countCHAR("The quick brown fox jumps over the lazy dog", "the"));
console.log(countCHAR("The quick brown fox jumps over the lazy dog", "TRAI"));
