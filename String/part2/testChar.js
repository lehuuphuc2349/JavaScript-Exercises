const testChar = (string, index) =>
  string.charAt(index).toUpperCase() === string.charAt(index);

console.log(testChar("JavaScript", 1));

const testChar1 = (string, index) =>
  string.charAt(index).toLowerCase() === string.charAt(index);

console.log(testChar1("JavaScript", 1));
