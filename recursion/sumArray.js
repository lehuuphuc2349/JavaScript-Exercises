const arraySum = (array) => {
  if (array.length === 1) {
    return array[0];
  } else {
    return array.pop() + arraySum(array);
  }
};
console.log(arraySum([1, 2, 3, 4]));
