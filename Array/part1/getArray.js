const getArray = (array, num) => {
  var firstElements = array[0];
  var arrayReplace = array.slice(0, num);
  console.log(`First Element: ${firstElements}`);
  console.log(`Array Replace: ${arrayReplace}`);
};
getArray([1, 2, 3, 4], 10);
