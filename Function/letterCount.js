const letterCount = (string, letter) =>
  string.split("").filter((x) => x == letter).length;
console.log(letterCount("phuc", "p"));
console.log(letterCount("w3resource.com", "o"));
