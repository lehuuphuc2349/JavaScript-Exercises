function removeChar(string, index) {
  par1 = string.substring(0, index);
  par2 = string.substring(index + 1, string.length);
  return par1 + par2;
}
console.log(removeChar("Phucdeptrai", 0));
console.log(removeChar("Phuctaitu", 8));
