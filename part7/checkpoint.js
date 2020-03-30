function checkpoint(a, b, x, y, r) {
  var dist_Point = (a - x) * (a - x) + (b - y) * (b - y);
  r *= r;
  if (dist_Point < r) {
    return true;
  }
  return false;
}
console.log(checkpoint(0, 0, 2, 4, 6));
