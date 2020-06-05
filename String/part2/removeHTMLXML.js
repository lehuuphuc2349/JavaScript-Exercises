const removeTag = (string) => {
  string === null || string === "" ? false : string.toString();
  return string.replace(/<[^>]*>/g, "");
};
console.log(removeTag("<p><strong><em>PHP Exercises</em></strong></p>"));
