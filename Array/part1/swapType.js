var text = "phuc Dep Trai";
var ans = text
  .split("")
  .map(function (char) {
    return char === char.toUpperCase()
      ? char.toLowerCase()
      : char.toUpperCase();
  })
  .join("");
console.log(ans);
