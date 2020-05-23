// function integer_to_roman(num) {
//   if (typeof num !== "number") return false;

//   var digits = String(+num).split(""),
//     key = [
//       "",
//       "C",
//       "CC",
//       "CCC",
//       "CD",
//       "D",
//       "DC",
//       "DCC",
//       "DCCC",
//       "CM",
//       "",
//       "X",
//       "XX",
//       "XXX",
//       "XL",
//       "L",
//       "LX",
//       "LXX",
//       "LXXX",
//       "XC",
//       "",
//       "I",
//       "II",
//       "III",
//       "IV",
//       "V",
//       "VI",
//       "VII",
//       "VIII",
//       "IX",
//     ],
//     roman_num = "",
//     i = 3;
//   while (i--) roman_num = (key[+digits.pop() + i * 10] || "") + roman_num;
//   return Array(+digits.join("") + 1).join("M") + roman_num;
// }

// console.log(integer_to_roman(10));

const converseRomanNumeral = (number) => {
  if (typeof number !== "number") return false;

  var digits = String(+number).split(""),
    key = [
      "",
      "C",
      "CC",
      "CCC",
      "CD",
      "D",
      "DC",
      "DCC",
      "DCCC",
      "CM",
      "",
      "X",
      "XX",
      "XXX",
      "XL",
      "L",
      "LX",
      "LXX",
      "LXXX",
      "XC",
      "",
      "I",
      "II",
      "III",
      "IV",
      "V",
      "VI",
      "VII",
      "VIII",
      "IX",
    ],
    romanNumber = "",
    i = 3;
  while (i--) romanNumber = (key[+digits.pop() + i * 10] || "") + romanNumber;
  return Array(+digits.join("") + 1).join("M") + romanNumber;
};
console.log(converseRomanNumeral(10));

// Converse RomanNumeral to Number
function roman_to_Int(str1) {
  if (str1 == null) return -1;
  var num = char_to_int(str1.charAt(0));
  var pre, curr;

  for (var i = 1; i < str1.length; i++) {
    curr = char_to_int(str1.charAt(i));
    pre = char_to_int(str1.charAt(i - 1));
    if (curr <= pre) {
      num += curr;
    } else {
      num = num - pre * 2 + curr;
    }
  }

  return num;
}

function char_to_int(c) {
  switch (c) {
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
}
console.log(roman_to_Int("XXVI"));
console.log(roman_to_Int("CI"));
