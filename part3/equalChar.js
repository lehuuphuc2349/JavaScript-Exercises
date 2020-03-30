function equalChar(string) {
  return (
    string.replace(/[^p]/g, "").length === string.replace(/[^t]/g, "").length
  );
}
console.log(equalChar("ppttt"));
