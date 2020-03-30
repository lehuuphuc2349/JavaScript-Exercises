function longestString(arr_string) {
  var maxString = arr_string[0].length;
  var ans = arr_string[0];
  for (var i = 0; i < arr_string.length; i++) {
    var maxI = arr_string[i].length;
    if (maxI > maxString) {
      maxString = maxI;
      ans = arr_string[i];
    }
  }
  return ans;
}
console.log(longestString(["ab", "a", "abcd"]));
