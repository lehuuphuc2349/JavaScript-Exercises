const checkSide = (number, side) => {
  number = parseFloat(number);
  return number.toFixed(side);
};
console.log(checkSide(12.375, 2));
console.log(checkSide(12.37499, 2));
console.log(checkSide(-10.3079499, 3));
