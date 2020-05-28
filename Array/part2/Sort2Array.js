const SortArray = (array1, array2) => {
  var result = new Array();
  result = array1.concat.apply(array1, array2);
  var sortResult = result.sort((a, b) => a - b);
  //   var afterSorting = new Array();
  //   for (var i = 0; i < sortResult.length; i++) {
  //     if (
  //       afterSorting.indexOf(sortResult[i]) === -1 &&
  //       sortResult.indexOf(sortResult[i], i + 1) === -1
  //     ) {
  //       afterSorting.push(sortResult[i]);
  //     }
  //   }
  //   return afterSorting;
  return sortResult.filter(
    (value, index, array) => array.indexOf(array[index], index + 1) === -1
  );
};
console.log(SortArray([1, 2, 3], [1, 2, 3]));
console.log(SortArray([0, 10, 20], [20, 10, 30]));
