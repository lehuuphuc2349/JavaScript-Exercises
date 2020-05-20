Array.prototype.merge_Search = function () {
  if (this.length <= 1) {
    return this;
  }
  var half = parseInt(this.length / 2);
  var left = this.slice(0, half).merge_Search();
  var right = this.slice(half, this.length).merge_Search();
  var merge = function (left, right) {
    var array = [];
    while (left.length > 0 && right.length > 0) {
      array.push(left[0] <= right[0] ? left.shift() : right.shift());
    }
    return array.concat(left).concat(right);
  };
  return merge(left, right);
};
var a = [53, 42, 3, 2, 32, 1, 1];
console.log(a.merge_Search());
