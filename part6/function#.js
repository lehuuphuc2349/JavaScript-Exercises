function isDivide3(string) {
  var digitSum = 0,
    left = "0".charCodeAt(),
    right = "9".charCodeAt(),
    result = [],
    marsk_data = string.split(""),
    hash_pos = -1;

  for (var i = 0; i <= marsk_data.length; i++) {
    if (
      left <= marsk_data[i].charCodeAt() &&
      marsk_data[i].charCodeAt() <= right
    ) {
      digitSum += marsk_data[i].charCodeAt() - left;
    } else {
      hash_pos = i;
    }
  }
  for (var i = 0; i < 10; i++) {
    if ((digitSum + i) % 3 === 0) {
      marsk_data[hash_pos] = String.fromCharCode(left + i);
      result.push(marsk_data.join(""));
    }
  }
  return result;
}
console.log(isDivide3("4#0"));
