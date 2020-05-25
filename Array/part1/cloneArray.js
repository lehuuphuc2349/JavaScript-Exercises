const cloneArray = (array) => array.slice(0);
console.log(cloneArray([1, 2, 3, 4]));
console.log(cloneArray([1, 2, [3, 4]]));
console.log(cloneArray([1, 2, 3, [4, 6, [2, 21]]]));
