const natureNumber = (number) =>
  number >= 0.0 && Math.floor(number) === number && number !== Infinity;
console.log(natureNumber(-10));
console.log(natureNumber(3));
console.log(natureNumber(2.2));
console.log(natureNumber(4));
console.log(natureNumber(0));
