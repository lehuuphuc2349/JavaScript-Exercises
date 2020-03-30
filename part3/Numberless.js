function numberLess(x, y, z) {
  return (
    (x >= 20 && (x < y || x < z)) ||
    (y >= 20 && (y < x || y < z)) ||
    (z >= 20 && (z < y || z < x))
  );
}
console.log(numberLess(1, 2, 3));
console.log(numberLess(23, 23, 10));
console.log(numberLess(23, 45, 10));
