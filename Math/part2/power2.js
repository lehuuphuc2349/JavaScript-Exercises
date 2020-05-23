const power2 = (number) => {
  var result = 0;
  if (number === null) {
    return -1;
  }
  result = Math.sqrt(number);
  return parseInt(result);
};
console.log(power2(12));
console.log(power2(64));
console.log(power2(36));
