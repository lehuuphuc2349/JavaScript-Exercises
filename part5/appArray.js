function appearsArray(array) {
  var ctr = [];
  ans = 0;
  for (var i = 0; i < 10; i++) {
    ctr.push(0);
  }
  for (var i = 0; i < array.length; i++) {
    ctr[array[i] - 1]++;
    if (ctr[array[i] - 1] > ctr[ans]) {
      ans = array[i] - 1;
    }
  }
  return ans + 1;
}
console.log(appearsArray([1, 2, 3, 4, 5, 5]));
