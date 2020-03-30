function divString(number1, number2) {
  number1 = 80;
  number2 = 6;
  var div = Math.round(number1 / number2).toString();
  result_array = div.split("");
  if (div >= 1000) {
    for (var i = div.length - 3; i > 0; i -= 3) {
      result_array.splice(i, 0, ",");
    }
    return result_array;
  }
  console.log(result_array);
}
