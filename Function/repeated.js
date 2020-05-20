const repeated = (string) => {
  const stringTemp = string.split("");
  let count;
  let result = "";
  for (var i = 0; i < stringTemp.length; i++) {
    count = 0;
    for (var j = 0; j < stringTemp.length; j++) {
      if (stringTemp[i] === stringTemp[j]) {
        count++;
      }
    }
    if (count < 2) {
      result = stringTemp[i];
      break;
    }
  }
  return result;
};
console.log(repeated("phhuucc"));
console.log(repeated("abacddbec"));
