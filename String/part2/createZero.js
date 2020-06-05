const createZero = (number, size, add) => {
  let num = "" + Math.abs(number),
    zeros = size - num.length,
    sign = number >= 0;

  return (
    (sign ? (add ? "+" : "") : "-") +
    Math.pow(10, Math.max(0, zeros)).toString().substr(1) +
    num
  );
};
console.log(createZero(23, 5, "-"));

console.log("a" == "A");
