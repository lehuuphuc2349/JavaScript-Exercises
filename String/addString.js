const addString = (string, add, pos) => {
  if (string.length == 0) {
    return string;
  }
  var result = string;
  if (add.length > 0) {
    for (var i = 0; i < result.length; i++) {
      if (i === pos) {
        result += add;
      }
    }
  }
  return result;
};
console.log(addString("Phuc", " deptrai", 2));
