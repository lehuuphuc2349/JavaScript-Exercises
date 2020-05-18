// const CapFirst = (string) =>
//   string
//     .split(" ")
//     .map((v) => v[0].toUpperCase())
//     .join("");
// //  .reduce((v, i = 0) => v[i].toUpperCase(), {})
// //  .join(" ");

// console.log(CapFirst("phuc dep trai"));

const upperCase = (string) => {
  var array = string.split(" ");
  var newArray = [];
  for (var x = 0; x < array.length; x++) {
    newArray.push(array[x].charAt(0).toUpperCase() + array[x].slice(1));
  }
  return newArray.join(" ");
};
console.log(upperCase("phuc dep trai"));
console.log(upperCase("phucdeptrai"));
