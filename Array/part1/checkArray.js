const checkArray = (input) =>
  toString.call(input) === "[object Array]" ? true : false;
console.log(checkArray("phuc dep trai"));
console.log(checkArray([1, 2, 3, 4]));
