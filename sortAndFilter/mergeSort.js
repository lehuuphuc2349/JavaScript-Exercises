const mergeSort = (array1, array2) => {
  let temp = array1.concat.apply(array1, array2);
  let sortResult = temp.sort((a, b) => a - b);
  return sortResult;
};
console.log(mergeSort([1, 3, 4, 6], [2, 5, 7, 8, 9, 10]));

const mergeSort2 = (array1, array2) => {
  let temp1 = array1.sort((a, b) => a - b);
  let temp2 = array2.sort((a, b) => a - b);
  let result = temp1.concat
    .apply(temp1, temp2)
    .sort((a, b) => a - b)
    .filter((value) => value % 2 === 0);
  return result;
};
console.log(mergeSort2([2, 56, 12, 42, 63], [42, 91, 24, 35]));

const recursion = (array) => {
  let subArray = new Array();
  subArray.push(array.sort((a, b) => a - b));
  return subArray
    .reduce((acc, value, array) => {
      array[value] > array[value + 1] ? array : array + 1;
    })
    .map((value) => (value *= 2));
};
const inserSation = (array) => {
  let shilftoRight = new Array();
  shilftoRight.push(...array);
  return shilftoRight.sort((a, b) => a - b);
};
console.log(inserSation([1, 5, 2, 4, 36, 2, 10]));

const mysort = (array) => {
  var newArray = array.filter((value) => value !== 0);
  return newArray.sort((a, b) => a - b);
};
console.log(mysort([1, 2, 5, 5, 21, 5, 62, 1]));
