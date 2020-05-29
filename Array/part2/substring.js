const substring = (string1, string2) => {
  let temp1 = string1.split("");
  let temp2 = string2.split("");
  var result = new Array();
  for (var i = 0; i < temp1.length; i++) {
    for (var j = 0; j < temp2.length; j++) {
      if (temp1[i] == temp2[j]) {
        result.push(temp1[i], temp2[j]);
      }
    }
  }
  return result.join("");
};
console.log(substring("go", "google"));
