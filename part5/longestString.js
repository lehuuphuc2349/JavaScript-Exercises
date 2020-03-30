function longestString(array) {
  var max = array[0].length;
  array.map(v => (max = Math.max(max, v.length)));
  result = array.filter(v => v.length == max);
  return result;
}
console.log(longestString(["a", "aa", "aaa", "aaaaa", "aaaa"]));
