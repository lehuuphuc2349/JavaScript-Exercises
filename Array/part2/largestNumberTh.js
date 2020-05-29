const findLargetsNumberTH = (array, n) =>
  array
    .sort((a, b) => b - a)
    .slice(n)
    .filter((value, index, array) => array[0]);
console.log(findLargetsNumberTH([1, 2, 3, 3, 4], 2));
