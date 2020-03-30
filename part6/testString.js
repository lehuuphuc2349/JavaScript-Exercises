function testString(input_str) {
  var is_lower_case = function(symboy) {
    if ("a" <= symboy && symboy <= "z") {
      return true;
    }
    return false;
  };
  var is_upper_case = function(symboy) {
    if ("A" <= symboy && symboy <= "Z") {
      return true;
    }
    return false;
  };
  var is_first_char_lower = is_lower_case(input_str[0]),
    is_first_char_upper = is_upper_case(input_str[0]);
  if (!(is_first_char_lower || is_first_char_upper)) {
    return false;
  }
  for (var i = 1; i < input_str.length; i++) {
    if (i % 2) {
      if (
        is_lower_case(input_str[i]) === is_first_char_lower ||
        is_upper_case(input_str[i]) === is_first_char_upper
      ) {
        return false;
      }
    } else {
      if (
        is_lower_case(input_str[i]) !== is_first_char_lower ||
        is_upper_case(input_str[i]) !== is_first_char_upper
      ) {
        return false;
      }
    }
  }
  return true;
}
console.log(testString("xYz"));
console.log(testString("PHp"));
console.log(testString("phuc dep trai"));
console.log(testString("AbA"));
