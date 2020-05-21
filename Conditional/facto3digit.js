const amstrongNumber = (number) => {
  var tempNumber = number.toString().split("");
  var sum = 0;
  var result = "";
  if (tempNumber.length == 3) {
    for (var i = 0; i < tempNumber.length; i++) {
      // sum = amstrongNumber(number) {
      //    sum +=
      // }
      sum += Math.pow(tempNumber[i], 3);
      if (sum === number) {
        result = "Armstrong Number";
      } else {
        result = "error";
      }
    }
  }
  return result;
};
console.log(amstrongNumber(153));
console.log(amstrongNumber(370));
