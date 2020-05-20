const checkType = (number) => {
  if (number < 0) {
    return number;
  }
  if (number === 0) {
    return true;
  }
  if (number === 1) {
    return false;
  } else {
    number = number - 2;
    return checkType(number);
  }
};
console.log(checkType(2324));
