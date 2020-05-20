Array.prototype.brSearch = function (target) {
  var half = parseInt(this.length / 2);
  if (target === this[half]) {
    return half;
  }
  if (target > this[half]) {
    return half + this.slice(half, this.length).brSearch(target);
  } else {
    return this.slice(0, half).brSearch(target);
  }
};
stack = [1, 2, 3, 3, 4, 5, 6, 7, 8, 9, 10];
console.log(stack.brSearch(5));
