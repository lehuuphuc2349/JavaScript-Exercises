const mergetArray = (array1, array2) => {
  var result = new Array();
  result = array1.concat.apply(array1, array2);
  return result.filter(
    (value, index, array) => array.indexOf(array[index], index + 1) === -1
  );
};
console.log(mergetArray([1, 2, 3], [2, 30, 1]));
