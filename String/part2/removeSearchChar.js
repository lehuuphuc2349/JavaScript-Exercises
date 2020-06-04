const removeChar = (string, char) =>
  string
    .split(" ")
    .filter((value) => value !== char)
    .join(" ");

console.log(removeChar("The quick brown fox jumps over the lazy dog", "the"));
