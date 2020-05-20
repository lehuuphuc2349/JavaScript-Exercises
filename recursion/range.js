const range = (min, max) => {
  if (max - min === 2) {
    return [min + 1];
  } else {
    var list = range(min, max - 1);
    list.push(max - 1);
    return list;
  }
};
console.log(range(2, 9));
