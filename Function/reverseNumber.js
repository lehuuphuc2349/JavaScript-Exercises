const reverseNumber = (number) =>
  number.toString().split("").reverse().join("");
console.log(reverseNumber(123));
console.log(reverseNumber(32243));
console.log(reverseNumber(9929));

const reverseNumber1 = (number) => {
  number = number + "";
  return number.split("").reverse().join("");
};
console.log(reverseNumber1(23232));
