const product = (array) => {
  var sum = array.reduce((acc, val) => acc + val);
  console.log(sum);
  var product = array.reduce((acc, val) => acc * val);
  console.log(product);
};
product([1, 2, 3, 4, 5, 6]);
