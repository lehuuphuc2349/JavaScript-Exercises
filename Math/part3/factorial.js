// const factorial = (number) => number.reduce((acc, value) => acc * value, 0);
// console.log(factorial(5));

// const factorial = (number) => {
//   var num;
//   for (var i = 1; i <= number; i++) {
//     number *= i;
//   }
//   return number;
// };
// console.log(factorial(5));

function factorialize(num) {
  if (num === 0) {
    return 1;
  }
  return num * factorialize(num - 1);
}
function fatorialR(r) {
  if (r === 0) {
    return 1;
  }
  return r * fatorialR(r - 1);
}
function product_Range(a, b) {
  var prd = a,
    i = a;

  while (i++ < b) {
    prd *= i;
  }
  return prd;
}

function combinations(n, r) {
  if (n == r) {
    return 1;
  } else {
    r = r < n - r ? n - r : r;
    return product_Range(r + 1, n) / product_Range(1, n - r);
  }
}

console.log(combinations(6, 2));
console.log(combinations(5, 3));
