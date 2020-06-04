const converASCII = (string) => {
  let arr1 = [];
  for (var n = 0; n < string.length; n++) {
    let hex = Number(string.charCodeAt(n)).toString(16);
    arr1.push(hex);
  }
  return arr1.join("");
};
console.log(converASCII("12"));
console.log(converASCII("100"));
