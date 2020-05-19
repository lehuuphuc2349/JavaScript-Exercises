const searchBinary = (array, elements) => {
  var mposition = Math.floor(array.length / 2);
  if (array[mposition] === elements) {
    return mposition;
  } else if (array.length === 1) {
    return null;
  } else if (array[mposition] < elements) {
    var arr = array.slice(mposition + 1);
    var res = searchBinary(arr, elements);
    if (res === null) {
      return null;
    } else {
      return mposition + 1 + res;
    }
  } else {
    var array1 = array.slice(0, mposition);
    return searchBinary(array1, elements);
  }
};
var myArray = [1, 2, 3, 5, 6, 7, 10, 11, 14, 15, 17, 19, 20, 22, 23];
console.log(searchBinary(myArray, 6));
