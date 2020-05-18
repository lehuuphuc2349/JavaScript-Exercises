function allCombinations(string) {
  var array1 = [];
  for (var x = 0, y = 1; x < string.length; x++, y++) {
    array1[x] = string.substring(x, y);
  }
  var combination = [];
  var temp = "";
  var slent = Math.pow(2, array1.length);
  for (var i = 0; i < slent; i++) {
    temp = "";
    for (var j = 0; j < array1.length; j++) {
      if (i & Math.pow(2, j)) {
        temp += array1[j];
      }
    }
    if (temp !== "") {
      combination.push(temp);
    }
  }
  console.log(combination.join("\n"));
}
allCombinations("phuc");
allCombinations("cat");
