const reverse = (num) => {
  const number = num;
  const string = number.toString();
  const result = [string[0]];

  for (let i = 1; i < string.length; i++) {
    if (string[i - 1] % 2 === 0 && string[i] % 2 === 0) {
      result.push("-", string[i]);
    } else {
      result.push(string[i]);
    }
  }
  return result.join("");
};
console.log(reverse(02546));
console.log(reverse(023456));
