const quickSort = (array) => {
  if (array.length < 0) {
    return undefined;
  }
  let reuslt = [];
  reuslt = array.sort((a, b) => a - b);
  return reuslt;
};
console.log(quickSort([51, 95, 66, 72, 42, 38, 39, 41, 15]));

const quickSort1 = (array) =>
  array.filter((value) => value > 0).sort((a, b) => a - b);

const subArray = (array) => {
  quickSort1(array);
};
console.log(subArray([1, 23, 5, 2, 9, 10]));
