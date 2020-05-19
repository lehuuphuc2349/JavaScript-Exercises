const evenArray = (array) => {
  var evenArray = [];
  for (var i = 0; i < array.length; i++) {
    if (array[i] % 2 === 0) {
      evenArray.push(array[i]);
    }
  }
  return evenArray;
};
console.log(evenArray([1, 2, 3, 4, 5, 6]));

const greaterSecond = (array) => {
  array.sort(function (x, y) {
    return x - y;
  });
  var uniqua = [array[0]];
  var result = [];
  for (var j = 1; j < array.length; j++) {
    if (array[j - 1] !== array[j]) {
      uniqua.push(array[j]);
    }
  }
  result.push(uniqua[1], uniqua[uniqua.length - 2]);
  return result.join(",");
};
console.log(greaterSecond([1, 2, 3, 4, 5]));
