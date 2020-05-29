const filterStirng = (array) => {
  var result = array.filter(trueString);
  return result;
};
const trueString = (value) => {
  if (value !== null || value !== 0 || value !== false) {
    return value;
  }
};
console.log(filterStirng([58, "", "abcd", true, null, false, 0]));
