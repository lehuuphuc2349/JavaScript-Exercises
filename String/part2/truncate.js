const truncate = (string, number) =>
  string.split(" ").slice(0, number).join(" ");

console.log(truncate("The quick brown fox jumps over the lazy dog", 4));
