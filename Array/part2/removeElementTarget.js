const revemoElementTarget = (array, target) => {
  var result = array;
  return result.filter((value) => value != target);
};
console.log(revemoElementTarget([1, 2, 2, 3], 2));
console.log(revemoElementTarget([2, 5, 9, 6], 5));
