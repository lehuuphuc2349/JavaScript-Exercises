const isPalindrome = (string) => {
  var rev = string.split("").reverse().join("");
  return string == rev;
};

function longestString(string) {
  var maxLength = 0,
    maxp = "";
  for (var i = 0; i < string.length; i++) {
    var subs = string.substring(i, string.length);
    for (var j = subs.length; j >= 0; j--) {
      var subs_subs_Str = subs.substr(0, j);
      if (subs_subs_Str.length <= 1) {
        continue;
      }
      if (isPalindrome(subs_subs_Str)) {
        if (subs_subs_Str.length > maxLength) {
          maxLength = subs_subs_Str.length;
          maxp = subs_subs_Str;
        }
      }
    }
  }
  return maxp;
}
console.log(longestString("abracadabra"));
