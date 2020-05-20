const fibonacci = (number) => {
  if (number === 1) {
    return [1, 0];
  } else {
    var result = fibonacci(number - 1);
    result.push(result[result.length - 1] + result[result.length - 2]);
    return result;
  }
};
console.log(fibonacci(8));
