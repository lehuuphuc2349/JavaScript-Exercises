function vowelJS(str) {
  return str.replace(/[^aeiou]/g, "").length;
}
console.log(vowelJS("Python"));
