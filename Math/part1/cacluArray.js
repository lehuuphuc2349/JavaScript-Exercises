const cal = (array) => {
  var result = 1;
  for (var i = 0; i < array.length; i++) {
    if (typeof array[i] !== "number") {
      array[i] == 1;
    } else {
      result *= array[i];
    }
  }
  return result;
};
console.log(cal([1, 2, 3, 4, "a"]));

const cal2 = (array) => array.reduce((a, b) => a * b);
console.log(cal2([1, 2, 3, 4, 5]));
console.log(cal2([1, 2, 3, 4, -20]));
console.log(cal2([1, 22, 32, 4, 5]));
console.log(cal2([1, 232, 3.2, 4, 5]));
