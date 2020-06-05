const uncapEachWord = (string) => {
  let temp = string.split(" ");
  var result = [];
  for (var i = 0; i < temp.length; i++) {
    if (temp[i]) {
      result.push(
        temp[i].toString().substring(0, 1).toUpperCase() +
          temp[i].toString().substring(1).toLowerCase()
      );
    }
  }
  return result.join(" ");
};
console.log(uncapEachWord("phuc dep trai"));
