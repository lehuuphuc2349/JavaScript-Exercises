const removeArray = (array) =>
  array.filter((value) => typeof value === "number");
console.log(removeArray([null, 1, 2, "s", undefined, 3]));
