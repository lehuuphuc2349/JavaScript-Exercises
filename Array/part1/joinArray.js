const joinArray = (array, dilimiter) => {
  console.log(array.toString());
  console.log(array.join());
  console.log(array.join(dilimiter));
};
joinArray(["Red", "Green", "Blue", "Black"], "-");
