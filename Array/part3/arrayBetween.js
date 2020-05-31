const arrayBetwwenRange = (start, end) => {
  let result = [];
  for (var i = start; i <= end; i++) {
    result.push(i);
  }
  return result;
};
console.log(arrayBetwwenRange(-1, 1));
console.log(arrayBetwwenRange(-4, 7));
