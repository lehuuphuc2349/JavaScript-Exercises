const countVowels = (string) => {
  var vowel = "aeiouAEIOU";
  var count = 0;
  var array = string.split("");
  for (var i = 0; i < array.length; i++) {
    if (vowel.indexOf(array[i]) !== -1) {
      count++;
    }
  }
  return count;
};
console.log(countVowels("aeiou"));
console.log(countVowels("The quick brown fox"));
