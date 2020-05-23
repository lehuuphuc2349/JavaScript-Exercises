// Converse Char to Int
const chartoInt = (char) => {
  switch (char) {
    case "I":
      return 1;
    case "V":
      return 5;
    case "X":
      return 10;
    case "L":
      return 50;
    case "C":
      return 100;
    case "D":
      return 500;
    case "M":
      return 1000;
    default:
      return -1;
  }
};
// Output RomanNumeral to Number
const romanNumeral_to_Number = (string) => {
  if (string.length === null) return -1;
  var num = chartoInt(string.charAt(0));
  var curr, pre;
  for (var i = 1; i < string.length; i++) {
    curr = chartoInt(string.charAt(i));
    pre = chartoInt(string.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }
  return num;
};
console.log(romanNumeral_to_Number("XX"));
console.log(romanNumeral_to_Number("XXI"));
console.log(romanNumeral_to_Number("X"));
console.log(romanNumeral_to_Number("XV"));
