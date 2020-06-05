const escapeHtml = (string) => {
  if (string === null || string === "") {
    return false;
  } else {
    string.toString();
  }

  var map = {
    "&": "&amp;",
    "<": "&lt;",
    ">": "&gt;",
    '"': "&quot;",
    "'": "&#039;",
  };
  return string.replace(/[$<>"']/g, function (m) {
    return map[m];
  });
};
console.log(escapeHtml("HTML & CSS"));
console.log(escapeHtml("10 > 9"));
