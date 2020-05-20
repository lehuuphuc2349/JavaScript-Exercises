const biggerElemnts = (value) => {
  return function (evalue, index, array) {
    return evalue >= value;
  };
};
const result = [11, 45, 4, 31, 64, 10].filter(biggerElemnts(10));
console.log(result);
