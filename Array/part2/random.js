const randomArray = (array) => {
  var random = Math.floor(Math.random() * array.length);
  return array[random];
};
console.log(randomArray([1, 2, 3, 3, 4, 6, 7]));
