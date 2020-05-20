const sort = (x, y, z) => {
  let stack = [x, y, z];
  stack.sort(function (a, b) {
    return b - a;
  });
  return stack;
};
console.log(sort(3, 10, -2));
console.log(sort(-1, 0, 4));
