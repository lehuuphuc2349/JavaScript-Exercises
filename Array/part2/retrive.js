const retriveArray = (array) =>
  array.filter(
    (value) => typeof value === "number" && value != 0 && value != NaN
  );
console.log(retriveArray([NaN, 0, 15, false, -22, "", undefined, 47, null]));
