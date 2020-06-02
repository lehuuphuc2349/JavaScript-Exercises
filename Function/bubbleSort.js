const bubbleSort = (a) => {
  var swap;
  var n = a.length - 1;
  var x = a;
  do {
    swap = false;
    for (var i = 0; i < n; i++) {
      if (x[i] < x[i + 1]) {
        var temp1 = x[i];
        x[i] = x[i + 1];
        x[i + 1] = temp1;
        swap = true;
      }
    }
    n--;
  } while (swap);
  return x;
};
console.log(
  bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

const bubbleSort2 = (array) => array.sort((a, b) => b - a);
console.log(bubbleSort2([1, 4, 5, 3, 7, 5, 3]));
console.log(
  bubbleSort2([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213])
);

const sort2Array = (array1, array2) => {
  var reuslt = new Array();
  var temp = array1.concat
    .apply(array1, array2)
    .filter((value) => value % 2 == 0);
  return temp.sort((a, b) => b - a, [[], [], []]);
};
console.log(sort2Array([1, 2, 3, 4], [1, 7, 8, 9]));

// const sortArray = (array1, array2) =>
//   array1.concat
//     .apply(array1, array2)
//     .sort((a, b) => b - a)
//     .filter((value) => value % 2 == 0);

// console.log(sortArray([1, 2, 3, 4, 5, 4, 10, 9, 52, 21]));

// Final
const resultFinal = (array1, array2) => {
  return sort2Array(array1, array2);
};
console.log(resultFinal([1, 2, 5, 6, 3], [2, 5, 6, 11, 52, 44]));
