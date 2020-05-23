// const calulator = (x1, x2, y1, y2) => {
//   let result = (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
//   return result;
// };
// console.log(calulator(1, 0, 12, 0));
// console.log(calulator(1, 0, 12, 0));

const calulator = (x1, x2, y1, y2) =>
  (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
console.log(calulator(1, 0, 12, 0));
console.log(calulator(1, 0, 12, 0));

function pointDirection(x1, y1, x2, y2) {
  return (Math.atan2(y2 - y1, x2 - x1) * 180) / Math.PI;
}

console.log(pointDirection(1, 0, 12, 0));
console.log(pointDirection(1, 0, 1, 10));
