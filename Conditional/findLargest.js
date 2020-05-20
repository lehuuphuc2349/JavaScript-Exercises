const findLargest = (array) => {
  var max = Math.max(...array);
  return max;
};
console.log(findLargest([1, 2, 3, 4, 5]));
console.log(findLargest([10, 2, 34, 45, 5]));
console.log(findLargest([1, 22, 331, 43, 52]));
