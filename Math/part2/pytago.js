const pytago = (side1, side2) => {
  let result = Math.sqrt(Math.pow(4, 2) - Math.pow(3, 2));
  return result;
};
const pytago1 = (side1, side2) => Math.sqrt(Math.pow(4, 2) - Math.pow(3, 2));
console.log(pytago1(4, 3));

const pytago2 = (side1, side2) => Math.pow(side1, 2) - Math.pow(side2, 2);
console.log(pytago2(4, 3));

const pytago3 = (side1, side2) => Math.sqrt(Math.pow(3, 2) + Math.pow(4, 2));
console.log(pytago3(4, 3));
