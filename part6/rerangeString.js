function reRangeString(string1, string2) {
  var first_set = string1.split(""),
    second_set = string2.split(""),
    result = true;
  first_set.sort();
  second_set.sort();

  for (var i = 0; i < Math.max(first_set.length, second_set.length); i++) {
    if (first_set[i] != second_set[i]) {
      result = false;
    }
  }
  return result;
}
console.log(reRangeString("PHUC", "phuc"));
console.log(reRangeString("xyz", "yxz"));
