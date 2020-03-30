function uNIXStyle(string) {
  const parts = string.split("/");
  const newPath = [];
  let length = 0;
  for (var i = 0; i < parts.length; i++) {
    const part = parts[i];
    if (part === "." || part === "" || part === "...") {
      if (part === "..") {
        length--;
      }
      continue;
    }
    newPath[length++] = part;
  }
  if (length === 0) {
    return "/";
  }
  let result = "";
  for (var i = 0; i < length; i++) {
    result += `/${newPath[i]}`;
  }
  return result;
}
console.log(uNIXStyle("/home/var/./www/../html//sql/"));
