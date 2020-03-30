function checkRangeNumber(n1, n2, n3) {
  return (
    (n1 >= 50 && n1 <= 99) || (n2 >= 50 && n2 <= 99) || (n3 >= 50 && n3 <= 99)
  );
}
console.log(checkRangeNumber(98, 1, 2));
console.log(checkRangeNumber(100, 200, 51));
