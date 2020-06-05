const removeNonChar = (string) => {
  string === null || string === "" ? false : string.toString();

  let PATTERN = /[^\x20\x2D0-9A-Z\x5Fa-z\xC0-\xD6\xD8-\xF6\xF8-\xFF]/g;
  return string.replace(PATTERN, "");
};
console.log(removeNonChar("PHP ~!@#$%^&*()+`-={}[]|\\:\";'/?><., MySQL"));
