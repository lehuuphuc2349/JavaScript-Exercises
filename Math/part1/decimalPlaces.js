function decimals(n, d) {
  if (typeof n !== "number" || typeof d !== "number") return false;
  n = parseFloat(n) || 0;
  return n.toFixed(d);
}
console.log(decimals(2.100212, 2));
console.log(decimals(2.100212, 3));
console.log(decimals(2100, 2));

const decimals1 = (number, d) => {
  if (typeof number !== "number" || typeof d !== "number") return false;
  number = parseFloat(number) || 0;
  return number.toFixed(d);
};
console.log(decimals1(2.100212, 3));
