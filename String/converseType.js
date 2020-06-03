const cvString = (string) => {
  for (var i = 0; i < string.length; i++) {
    if (string[i] === /A-Z/) {
      return string[i].toLowerCase();
    } else {
      return false;
    }
  }
};
