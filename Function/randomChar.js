const randomCharToString = (length) => {
  var text = "";
  var charlist =
    "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
  for (var i = 0; i < length; i++) {
    text += charlist.charAt(Math.floor(Math.random() * charlist.length));
  }
  return text;
};
console.log(randomCharToString(4));
console.log(randomCharToString(6));
