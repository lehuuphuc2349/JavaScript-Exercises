const testFirst = (string, char) =>
  string.split(" ").toString().charAt(0) === char;

console.log(testFirst("js string exercises", "js"));

const test = (string, char) => {
  var temp = string.split(" ");
  var first = temp[0];
  if (temp[0] === char) {
    return true;
  } else {
    return false;
  }
};
console.log(test("js string exercises", "js"));
console.log(test("phuc dep trai", "phuc"));

const testEnd = (string, charEnd) => {
  let temp = string.split(" ");
  let lastChar = temp[temp.length - 1];
  if (lastChar === charEnd) {
    return true;
  } else {
    return false;
  }
};

console.log(testEnd("java PHP JS", "JS"));
